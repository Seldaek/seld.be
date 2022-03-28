---
extends: _layouts.post
section: content
title: "ESI - Full page caching with Symfony2"
date: 2010-12-09 15:30:00
description: "A tale of implementing full page caching with ESI and Symfony2, from concepts to benchmarks."
featured: false
categories: [php]
---
Launched about a month ago, [techup.ch](http://techup.ch) runs on the [Symfony2](http://symfony-reloaded.org) PHP framework, which is still undergoing heavy development but is already a great framework.

Full page caching basics
------------------------

Don't get me wrong, the framework is fast, pages are rendered by our fairly modest server in 40-50ms on average, so it hardly needs optimization. However I still wanted to try and squeeze more speed out of it, and also get a chance to play with cool stuff, so I decided to implement full page caching with ESI into the application.

The way this works is that you typically install some reverse proxy like [Varnish](http://www.varnish-cache.org/), which will sit between the web and your http server. More complex setups might include another http server in front of varnish to gzip output but I won't go into details on that in this post. The purpose of the reverse proxy is that it will cache the output of your application, for as long as you specify in your Cache-Control header. Once a page is cached, it will just return the output to the clients straight, without ever hitting your http server, php, or your application. Needless to say this is ideal for performance. Symfony2 is a great match for this type of cache because it's supported natively as I'll show, and it also implements a reverse proxy layer in php, that can be used for development or on hostings where you can't have access to Varnish. It acts just the same and is automatically turned off if an ESI-capable proxy is added in front of php.

ESI awesomeness
---------------

Of course the issue with caching the entire output is that most sites have areas with dynamic content, especially when users are logged in. This is where ESI comes into play. ESI stands for [Edge Side Includes](http://www.akamai.com/html/support/esi.html), and is a [standard](http://www.w3.org/TR/esi-lang) that defines a way to tell reverse proxies how to assemble pages out of smaller bits, that can be cached for various amounts of time, or fully dynamic.

So if you take for example an [event page](http://techup.ch/18) on techup, you have two user-dependent areas, the "login with twitter" button, which turns into "@username" once you're logged in, and the "attend" button is also showing attend or unattend depending on the user viewing the page. Those two areas are ESI includes. What this means for the reverse proxy is that it will first try and fetch the main page content out of its cache, and if found, it will then process the <span class="pre">&lt;esi:include src="http://..." /&gt;</span> tags that it finds. Those tags contain the url to a sub-component of the page. So one url will point to an action in one of my controllers that only outputs an attend button, green or red depending on the user viewing it. The rest of the page is still taken out of the cache.

Each of those sub-components have their own Cache-Control header, which means that you can composite a page with various components that expire after various durations.

The way this is done in Symfony2 is pretty straightforward. Your controller actions must always return a response object, and all you need for the reverse proxy cache length is to set the shared max age of the response - beware, max age will apply to the entire page, so you really want to use the **shared** variant. It's as simple as calling <span class="pre">$response-&gt;setSharedMaxAge(3600);</span>, 3600 being the length in seconds.

In your templates, if you use [Twig](http://twig-project.org), and you really should with Symfony2, it is also quite easy to define an <span class="pre">&lt;esi:include /&gt;</span> tag. You call out the controller/action that you want to execute, give it some parameters, and specify it as being standalone which means it's an ESI include, for example <span class="pre">{% render 'FooBundle:Default:attendButton' with \['event\_id': event.id\], \['standalone': true\] %}</span>. For more info on how to set that up feel free to go read the [Symfony2 docs on the topic](http://docs.symfony-reloaded.org/guides/cache/http.html).

Invalidation woes
-----------------

The tricky part, which is also a slightly controversial topic, is invalidation. In theory if you say that a page or sub-component is cache-able for X seconds, you should just live with it and let it be cached, even if the data changed. Now this is an acceptable downside on really high traffic sites, or in cases where only admins publish content and it doesn't really matter if it takes a few seconds/minutes to appear to the end users. But I like to give our users feedback when they add or change data, and I think they should see it straight away, so I decided to invalidate the cached pages in the proxy whenever the data is modified.

I will refer you to [the docs](http://docs.symfony-reloaded.org/guides/cache/http.html#invalidation) as to how to actually setup support for purging (invalidating) caches in your proxy of choice, no point in repeating it all here, but what I want to share is the approach I took on actually managing invalidation. As you [may know](http://martinfowler.com/bliki/TwoHardThings.html), invalidation can quickly get very tricky to handle. So what I did is just built centralized methods that contain all the invalidation logic for one domain model. When that model changes, it's passed to the matching method and all the urls that will render it are purged. This at least allows you to keep a good overview of the pages that are affected, and gives you a single point of entry to make adjustments to those invalidation rules.

 \[code php\] // src/Application/FooBundle/Controller/FooController.php protected function invalidateEvent($event) { $args = array('event' =&gt; $event-&gt;getId(), 'title' =&gt; $event-&gt;getSlug()); $this-&gt;invalidate('viewEvent', $args); $this-&gt;invalidate('home'); } protected function invalidate($route, $parameters = array()) { $url = $this-&gt;router-&gt;generate($route, $parameters, true); $context = stream\_context\_create(array('http'=&gt;array('method'=&gt;'PURGE'))); $stream = fopen($url, 'r', false, $context); fclose($stream); } \[/code\] This example implementation will do a PURGE request to the site URL. This only scales if you have one single Varnish instance though. I assume you must do a PURGE request on each if you have a redundant setup, but in this case it might become cleaner to use an external job queue like Gearman to execute those outside of php.

There are a few gotchas you should consider, especially if you use the Symfony2 reverse proxy and not Varnish. First of all one thing that is fairly obvious is that you must prevent anyone from purging stuff, otherwise attackers could DDoS you with PURGE requests and make your load skyrocket. The second issue is that if you return a 404 code for "Not purged" a.k.a the page wasn't cached, fopen() will throw a php warning, which is really not that nice. For this reason, and since I don't want to care whether the purge happened or not for now, I chose to just respond always with a 200. It could be handled nicer with curl though, if you really need to have a proper response code to your PURGE requests.

 \[code php\] // app/AppCache.php protected function invalidate(Request $request) { if ($\_SERVER\['SERVER\_ADDR'\] !== $request-&gt;getClientIp() || 'PURGE' !== $request-&gt;getMethod()) { return parent::invalidate($request); } $response = new Response(); if (!$this-&gt;store-&gt;purge($request-&gt;getUri())) { $response-&gt;setStatusCode(200, 'Not purged'); } else { $response-&gt;setStatusCode(200, 'Purged'); } return $response; } \[/code\] The results
-----------

It sounds nice and all, but is it actually working?

I used [JMeter](http://jakarta.apache.org/jmeter/) to benchmark the site with and without reverse proxy. Note that I used the integrated Symfony cache layer and not Varnish, so the results would be even better with Varnish since it's written in C and doesn't have to to hit apache and php on every request.

 \[code\] Before: / =&gt; 63req/sec /86/rails-hock =&gt; 100req/sec /api/events/upcoming.json =&gt; 70req/sec /api/event/10.json =&gt; 120req/sec After: / =&gt; 200req/sec \* /86/rails-hock =&gt; 230req/sec /api/events/upcoming.json =&gt; 100req/sec \* /api/event/10.json =&gt; 800req/sec \* my 20mbps internet line was the bottleneck for those because they have too large response bodies \[/code\] In short: Holy crap. Now for the two first pages tested, the improvement is "modest" because they include sub-components which are not cacheable, so they always require some full framework cycles. But the last one which is from the API is just amazing, with 8 times more requests processed per second.

All I can say to conclude is that this is worth playing with, and that Symfony2 really doesn't disappoint with regard to speed. If you have any experience with that kind of setup and want to add anything feel free to do so in the comments, questions are also welcome.