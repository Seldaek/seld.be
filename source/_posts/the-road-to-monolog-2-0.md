---
extends: _layouts.post
section: content
title: "The Road to Monolog 2.0"
date: 2015-12-18 18:30:15
description: "Monolog's first commit was on February 17th, 2011. That is almost 5 years ago! I have now been thinking for quite a while that it would be nice to start on a v2.0, and being able to drop some BC baggage. One of the main questions when doing a major release is which minimum PHP version to support going forward. Last summer I decided I wanted to do a..."
featured: false
categories: [news, php]
---
[Monolog](https://github.com/Seldaek/monolog)'s first commit was on February 17th, 2011. That is almost 5 years ago! I have now been thinking for quite a while that it would be nice to start on a v2, and being able to drop some baggage.

One of the main questions when doing a major release is which minimum PHP version to support going forward. Last summer I decided I wanted to do a big jump from 5.3 and directly target PHP 7. It provides a lot of nice features as well as performance improvements, and as Monolog is one of the most installed packages on Packagist I wanted to help nudge everyone towards PHP 7.

Back then 7.0 was not out though, so I played around a bit but I did not do much progress. Another point that was limiting me was that I did not want to bother people adding Monolog to their project via `composer require monolog/monolog` as that used to just take the last release available.

However PHP 7.0 is now out, and as you may have seen in [my previous post](/notes/new-composer-patterns) I have fixed the issue in composer require. I also emailed several projects that had dangerous requirements on Monolog a few months ago to ensure they would not upgrade to the 2.0 version accidentally.

The road forward
----------------

Monolog's master branch now targets PHP 7, and the branch-alias has been updated to 2.0 so work can now fully begin on the upcoming version. There is an [old issue with a list of ideas and tasks](https://github.com/Seldaek/monolog/issues/197) for 2.0, but I am open to more ideas. There is also a [2.0 milestone](https://github.com/Seldaek/monolog/milestones/2.0) with some more issues and PRs that have to be considered for inclusion.

If you use Monolog a lot and have thoughts on what should change in the design, please open an issue! If you want to help grab one of those tasks (except those that aren't clear or still need to be decided on) and send a pull request! It's a great chance to play with PHP 7 features if you haven't yet. I took care of some things already but there is plenty more to be done and I definitely can't do it alone.

A word of caution
-----------------

Please check your composer.json, if you require monolog/monolog **dev-master** you **will** have issues next time you update! Please fix that immediately and use `^1.17` instead, it will ensure you don't upgrade to 2.0 accidentally.

Supporting the past
-------------------

Obviously, not everyone will upgrade to PHP 7 immediately, and Monolog v2 will probably not be ready and stable for a few months, so Monolog 1 will still be maintained. I don't have a concrete date in mind of when the maintenance will stop, but it is anyway pretty stable so I don't think maintaining it will be a big deal.

There is now a `1.x` branch where bug fixes and features applicable to both versions should go, and 1.x releases will be created from there in the future.