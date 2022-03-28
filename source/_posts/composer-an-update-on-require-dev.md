---
extends: _layouts.post
section: content
title: "Composer: an update on require-dev"
date: 2013-03-04 10:00:00
description: "require-dev in Composer is a way to declare the dependencies you need for development/testing. It works in most simple cases, but when the dev dependencies overlap with the regular ones, it can get tricky to handle. In too many cases it also tends to just fail at resolving dependencies with quite strange error messages. Since this was quite unrelia..."
featured: false
categories: [php]
---
**Update:** the install command now also defaults to --dev, [read more about the rationale](http://seld.be/notes/composer-installing-require-dev-by-default)

Using [require-dev](http://getcomposer.org/doc/04-schema.md#require-dev) in [Composer](http://getcomposer.org/) you can declare the dependencies you need for development/testing. It works in most simple cases, but when the dev dependencies overlap with the regular ones, it can get tricky to handle. In too many cases it also tends to just fail at resolving dependencies with quite strange error messages.

Since this was quite unreliable, I set out to rework the whole feature this week-end. The [patch](https://github.com/composer/composer/pull/1644) has been merged, and it fixes six open issues which is great. The short story there is that it now does things in one pass instead of two before, so it should be faster and a lot more reliable. Also dev dependencies can now impact the non-dev ones without problems since it's all resolved at once.

Workflow changes
----------------

I took the chance to change another thing while I was at it. The *update* command now installs dev requirements by default. This makes sense since you should only run it on dev environments. No more *update --dev*, the dev flag is now implicit and if you really don't want these packages installed you can use *update --no-dev* instead.

The *install* command on the other hand remains the same. It does not install dev dependencies by default, and it will actually remove them if they were previously installed and you run it without *--dev*. Again this makes sense since in production you should only run install to get the last verified state (stored in `composer.lock`) of your dependencies installed.

I think this minor change in workflow will simplify things for most people, and I really hope it doesn't break any assumptions that were made in third party tools.