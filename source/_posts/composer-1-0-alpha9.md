---
extends: _layouts.post
section: content
title: "Composer 1.0 alpha9"
date: 2014-12-08 12:27:42
description: "I tagged Composer's 1.0.0-alpha9 release yesterday and wanted to write down a more detailed update on the highlights of this release, which includes many changes as the last tag was almost one year old. You can also check the full changelog if you want more details. Requiring packages from CLI just got easier The require command now guesses the bes..."
featured: false
categories: [news, php]
---
I tagged Composer's 1.0.0-alpha9 release yesterday and wanted to write down a more detailed update on the highlights of this release. It includes many changes as the last tag was almost one year old. You can also check [the full changelog](https://github.com/composer/composer/releases/tag/1.0.0-alpha9) if you want more details.

Requiring packages from CLI just got easier
-------------------------------------------

The `require` command now guesses the best version constraint for the latest stable release of the package you require, so if you know you need a package but don't know what the latest version is you can just use for example `composer require monolog/monolog` and it will guess and use a constraint like `~1.11`. There is also a new `remove` command to easily remove dependencies from the CLI without having to touch json.

Installing dependencies on the wrong environment is now possible
----------------------------------------------------------------

The new `--ignore-platform-reqs` flag for the install and update commands lets you install dependencies even if you have the wrong php version or are missing one of the required php extensions. It's not really recommended but it can be useful sometimes if you want to run composer outside a VM for example and you only have the right extensions installed in the VM where you run the code.

You now get warnings when installing abandoned packages
-------------------------------------------------------

A few months back Packagist got this feature allowing packages to be marked as abandoned. For example [this php markdown fork](https://packagist.org/packages/dflydev/markdown) is not maintained anymore as the original package is now on Packagist as well. Marking it as abandoned lets people know they should ideally not rely on it in new projects, and migrate away if possible. If you install this package Composer now warns about it: `Package dflydev/markdown is abandoned, you should avoid using it. Use michelf/php-markdown instead.`. This should make it easier to deprecate packages and let your users know about it.

Custom composer commands via scripts
------------------------------------

[Script handlers](https://getcomposer.org/doc/articles/scripts.md) defined for a non-existing event are now registered as custom composer commands. So you can for example define a [test](https://github.com/composer/composer/blob/master/composer.json#L52) handler with the command to run your test suite, and then use `composer test` to call it. All the binaries installed as dependencies like phpunit in this example are made available in the PATH before the command is executed so you can call them easily without using the vendor/bin/ prefix.

Autoloading tests and related files
-----------------------------------

The new `autoload-dev` section lets you define autoload rules that only apply when your package is installed in dev mode, much like `require-dev`. This is mainly useful to split off test autoload rules from the main autoload rules the users of your packages will need.

Performance improvements
------------------------

In case you missed it last week, we gained a huge performance boost by [disabling garbage collection](https://github.com/composer/composer/commit/ac676f47f7bbc619678a29deae097b6b0710b799) when running the Composer dependency solver. This is great news for everyone but I wanted to stress once again that you probably should not disable GC in your scripts unless you have a very good reason to do so. PHP's GC isn't flawed per se but our use case just falls out of the use cases it's been designed for. Anthony Ferrara wrote [a good round-up](http://blog.ircmaxell.com/2014/12/what-about-garbage.html) of the issue in case you want to learn more.

A note on supporting Composer maintenance
-----------------------------------------

While many of the above features have been contributed by others, reviewing pull requests and checking on new issues every day does take a lot of my time. I launched [Toran Proxy](https://toranproxy.com/) about six months ago to help me get some paid time to work on and maintain Composer and Packagist. Looking at the numbers now it seems about 20% of the time spent was paid for thanks to Toran Proxy customers. I want to thank you all for supporting me and I hope more people will join in! I will try to do updates like this one more regularly to highlight new features and developments in the Composer ecosystem.