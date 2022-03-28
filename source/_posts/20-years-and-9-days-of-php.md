---
extends: _layouts.post
section: content
title: "20 Years and 9 Days of PHP"
date: 2015-06-17 10:18:05
description: "Here is my (slightly late) take on Ben Ramsey's call for stories on how people got started with PHP (although at this point I feel he just did this to get his blog to rank number one on all PHP related searches). I can't retrace exactly when it was that I got started playing with PHP, but I guess I was around 18. Given that I am 30 that's.. a while..."
featured: false
categories: [php]
---
Here is my (slightly late) take on [Ben Ramsey's](http://benramsey.com/blog/2015/06/php-at-20/) call for stories on how people got started with PHP (although at this point I feel he just did this to get his blog to rank number one on all PHP related searches).

I can't retrace exactly when it was that I got started playing with PHP, but I guess I was around 18. Given that I am 30 that's.. a while ago, and it places it around 2002-2003.

I had been doing web things as plain HTML + some basic flash animations since '99 or 2000. But until PHP my only programming (as in having logic, not just markup) had been writing and publishing mIRC scripts. I guess those were my first open source contributions in a way although it wasn't called that and I wasn't really thinking about it. By some miracle my ISP from back then is still hosting this site 10 years after I haven't sent them a dime, so kudos to them, [you can still enjoy](http://users.skynet.be/seldaek/sscripts/) the table layout, green on black text, flash menu and other niceties.

PHP Beginnings
--------------

Back to PHP because Ben didn't ask for a complete life story; the earliest code I still have, that is also the first big thing I remember building with PHP, was a web forum. phpBB had existed for a few years already, and I am sure other forums did too, but I was probably too silly to even think of looking for existing software. When a forum I was on experienced a big civil war of sorts (online arguments lasted longer than a 1h twitter shitstorm back then) I did the logical thing and started writing my own so we could split and leave these suckers behind.

According to an early db dump I did my first post in there on 2003-09-17 on MySQL 3.23 and PHP 4.2.0 (although 4.3 was out for almost a year, but who ever upgrades PHP right?). I soon learned my first security lessons as well, for example that `header("location:index.php");` is NOT a safe way to protect sensitive pages. Maybe that was payback for the IRC takeover scripts I wrote.

For some odd reason looking at that code it seems that I was using `crypt()` to store hashed passwords. The hash was an undefined constant of course because who needed strings back then, but at least I might have a claim that I never stored passwords in clear text!

Moving on..
-----------

After a few years of studying mostly unrelated things, I worked on a PHP framework/CMS for my graduation work. That monstrosity is still running this very website at the time of writing but eh at least it renders pages in a few milliseconds! On the way there I got a few odd summer jobs for local agencies, and spent a summer month (in 2006 I believe) doing absolutely random things for very little money on oDesk or a similar online-freelance site. I guess the highlight there was a job doing new features for the [Internet Book List](http://www.iblist.com/) which felt like hacking on iMDB for books, pretty cool at the time but given the design of that site hasn't changed since I am afraid some of my code is still running it.

Open source
-----------

In 2008 I got my first fulltime programming job at Liip after graduating. A few months before that to occupy winter holidays I worked on the Dwoo templating engine which I needed for my graduation work CMS and was also my first real open source PHP project. This time around I knew about Smarty but still decided to write it from scratch because I had grand ideas about improvements and Smarty development had pretty much stalled. The old site is [still up on archive.org](https://web.archive.org/web/20131010004419/http://dwoo.org/) but I have since passed on the lib to someone that was interested in taking over so there is a [new site](http://dwoo.org/) and a v2.

In early 2010 I attended the Symfony Live event in Paris where [Symfony2](http://symfony.com) development was announced and I was sold by the promise of leaving all the old framework code behind and starting from scratch (you might notice a pattern by now). I started contributing quite a bit and worked on that as time allowed for a little over a year.

In 2011 I started working on [monolog](https://github.com/Seldaek/monolog) mainly to get rid of the gigantic ZF dependency we had to pull in only to use a couple Zend\_Log classes (I can admit it publicly now that we are all friends, right?). It was before Composer and git cloning the whole ZF repo was quite a pain.

Composer
--------

A few months later as the release of Symfony 2.0 approached I joined Nils to work on Composer and around the same time quit my job and founded Nelmio which afforded me quite a bit of free time as we had no customers for a while ;) Composer took more and more of that time and I had to distance myself from Symfony as I just could not follow it all anymore.

Now 4 years later I am still working on the same old Composer. While it has been immensely rewarding to see something grow like that and have such an impact on the PHP community at large, my write-something-from-scratch instinct is starting to itch.

Here is to twenty more years!