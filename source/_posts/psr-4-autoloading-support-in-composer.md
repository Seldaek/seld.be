---
extends: _layouts.post
section: content
title: "PSR-4 autoloading support in Composer"
date: 2014-01-03 19:30:00
description: "As of today and thanks to a pull request by Andreas Hennings who did the bulk of the work, we have PSR-4 autoloading support in Composer. It is a feature that can have a serious impact on users of your packages so I wanted to detail what it means for everyone. First of all if you are not familiar with PSR-4 but know about PSR-0 the main difference ..."
featured: false
categories: [php]
---
As of today and thanks to a [pull request by Andreas Hennings](https://github.com/composer/composer/pull/2459) who did the bulk of the work, we have [PSR-4](https://github.com/php-fig/fig-standards/blob/master/accepted/PSR-4-autoloader.md) autoloading support in Composer. It is a feature that can have a serious impact on users of your packages so I wanted to detail what it means for everyone.

First of all if you are not familiar with PSR-4 but know about PSR-0 the main difference and benefit is that it allows for flatter directory structures in your git repositories. While you typically had `src/Vendor/Lib/Class.php` in libraries it is now possible to use a simpler `src/Class.php` while retaining the namespacing at the code level. The other small difference is there no more support for PEAR-style namespacing of classes using underscores (e.g. `Vendor_Lib_Class`) so those packages should keep using PSR-0 and not migrate.

So we can use it in Composer now, and that's cool. I am sure some of you already stopped reading and are pushing changes to your repos to be using the new shiny, but please don't. Not just yet.

The issue is that Composer support for PSR-4 is needed for your packages to autoload properly. If you push this out now, people are going to freak out as soon as they update your package and classes can not be autoloaded anymore. In addition we will for sure have a ton of bogus support requests, and perhaps you too. Therefore I would like to urge everyone to wait at least until February before using this in any semi-popular package. I will tag a new release of Composer soon so that homebrew users for example also get the PSR-4 support in a timely manner.

For the gory details you can head to [the Composer documentation](http://getcomposer.org/doc/04-schema.md#psr-4), but it's fairly straightforward to upgrade. To only upgrade at the Composer level only you can just update mappings like this:

 \[code js\] // before { "autoload": { "psr-0": { "Foo\\\\Bar\\\\": "src/" } } } // after { "autoload": { "psr-4": { "Foo\\\\Bar\\\\": "src/Foo/Bar/" } } } \[/code\] While if you want to benefit from the shorter paths it is even more simple, you turn the `psr-0` into a `psr-4` and move all the files from `src/Foo/Bar/*` into `src/*`

Finally, a quick note for users of the `target-dir` property (mostly that is Symfony2 bundle authors as far as I know). The property is now deprecated and using it together with PSR-4 is forbidden since was essentially a hack to support PSR-0 autoloading in non-standard repositories. If you were using that you can easily get rid of it by updating the composer.json as such:

 \[code js\] // before { "autoload": { "psr-0": { "Foo\\\\BarBundle\\\\": "" } }, "target-dir": "Foo/BarBundle" } // after { "autoload": { "psr-4": { "Foo\\\\BarBundle\\\\": "" } } } \[/code\] Thanks for your attention, and again please refrain from jumping on this too quickly to save everyone some trouble. And while I am at it: Happy new year!