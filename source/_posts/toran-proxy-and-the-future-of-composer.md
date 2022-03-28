---
extends: _layouts.post
section: content
title: "Toran Proxy and the future of Composer"
date: 2014-06-19 17:49:31
description: "I have spent quite a large part of the last three years working on both Composer and Packagist. This has been great fun for the most part, I learned tons, met a gazillion people both online and offline, got to travel places to talk about it at conferences. One question I get asked frequently is how I find the time to work on this for free, and my a..."
featured: false
categories: [news, php]
---
TL;DR: New shiny product to support Composer development: [Toran Proxy](https://toranproxy.com)

A bit of history
----------------

I have spent quite a large part of the last three years working on both [Composer](https://getcomposer.org) and [Packagist](https://packagist.org). This has been great fun for the most part, I learned tons, met a gazillion people both online and offline, got to travel places to talk about it at conferences. One question I get asked frequently is how I find the time to work on this for free, and my answer until recently was along the lines of: "I run my own business, which affords me quite some flexibility".

The problem is that I can not use this answer anymore. We have changed [Nelmio](http://nelm.io)'s business model a few months ago to focus more on consulting and contracting. While this does not change the amount of time I can decide to spend on open source, it means that if I keep working the way I did in the past I will have to move under a bridge sooner or later.

Open-Source or a Salary?
------------------------

I have spent quite some time over the last few months evaluating options to get out of the current situation. Having to choose between working on open source or earning a living is not great, and I feel horrible for ignoring GitHub issues and such. So the one thing I settled on is to work on an product around Composer that helps businesses using it but does not take anything away from the regular users.

Introducing Toran Proxy
-----------------------

[Toran Proxy](https://toranproxy.com) does mainly two things at the moment: it proxies Packagist, GitHub and others to make Composer faster and more reliable, and it allows you to host private packages easily. This was already sort of possible with Satis and many people used various amounts of hackery to get there. Toran makes it easier and faster. It integrates better with Composer since it acts as a real proxy. It can fetch/build packages lazily or can build them ahead of time, enabling you to choose between a lower disk usage or more safety against GitHub outages and such.

It comes with a yearly license fee, which includes updates and will hopefully allow me to work full time on improving Composer &amp; Packagist. There is quite a big backlog of issues to look at and pull requests to review, finalize and merge. Packagist also has tons of potential for improvement. I have a million ideas and I really hope I get the chance to work on them. For example improvements in the discoverability of packages alone would benefit most everyone in the PHP community.

Of course Composer and Packagist remain free to use and fully open source. There is no way that will change. I just hope I can continue to work on them, for the community and supported by the community. [Check it out](https://toranproxy.com)!