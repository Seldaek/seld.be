---
extends: _layouts.post
section: content
title: "One logger to rule them all"
date: 2012-12-20 19:10:06
description: "I called the vote on the Logger Interface proposal last week. When the vote ends next week it will become PSR-3 (since it already collected a majority). The fourth recommendation from the PHP-FIG group, and the first one actually including interfaces/code, which is a great milestone. You can read the proposal if you have not done so yet, but I want..."
featured: false
categories: [php]
---
I [called the vote](https://groups.google.com/forum/?fromgroups=#!topic/php-fig/d0yPC7jWPAE) on the Logger Interface proposal last week. When the vote ends next week it will become PSR-3 (since it already collected a majority). The fourth recommendation from the [PHP-FIG group](http://www.php-fig.org/), and the first one actually including interfaces/code, which is a great milestone.

You can read the [proposal](https://github.com/php-fig/fig-standards/pull/60) if you have not done so yet, but I wanted to discuss the goal and long term hopes I have in more details here.

Where we come from
------------------

Most PHP frameworks and larger applications have in the past implemented their own logging solutions and this makes sense since I think everyone recognizes the usefulness of logs. Traditionally most of those did not have many external dependencies, established libraries were few and far between. Having no logging capability in those was not such a hindrance.

Libraries deserve logs too
--------------------------

Yet in the last couple years, thanks to GitHub allowing easier sharing, composer allowing more reusability, and mentalities shifting slowly to a less-NIH approach, we are seeing more and more libraries used in applications and even by frameworks themselves. This is great, but as soon as you call a library you enter a black box and if you want anything to show up in your logs you have to log yourself.

The availability of the PSR-3 interface means that libraries can optionally accept a `Psr\Log\LoggerInterface` instance, and if it is given to them they can log to it. That opens up a whole lot of possibilities for tighter integration of libraries with the framework/application loggers. I really hope library developers will jump on this and start logging more things so that when things go south it is easier to identify problems by looking at your application logs.

Take a deep breath
------------------

I am sure people will have questions or complaints regarding details of the interface itself, but I hope this helped you see the broader benefits it brings.