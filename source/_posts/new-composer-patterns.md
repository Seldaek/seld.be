---
extends: _layouts.post
section: content
title: "New Composer Patterns"
date: 2015-12-18 18:00:02
description: "Here is a short update on some nice little features that have become available in the last few months in Composer. Checking dependencies for bad patterns You may know about the composer validate command, but did you know about its new --with-dependencies / -A flag? It lets you validate both your project and all your dependencies at once! This is qu..."
featured: false
categories: [news, php]
---
Here is a short update on some nice little features that have become available in the last year in [Composer](https://getcomposer.org).

Checking dependencies for bad patterns
--------------------------------------

You may know about the `composer validate` command, but did you know about its new `--with-dependencies / -A` flag? It lets you validate both your project and all your dependencies at once!

This is quite nice to check if any of your dependencies has unsafe requirements like `>=` or similar issues. You can also combine it with `--strict` to make sure that any warning results in a failure exit code, so you can detect warnings in your CI builds for example by checking the command exit code.

Try it out: `composer validate -A --strict`

Referencing scripts to avoid duplication
----------------------------------------

You can now reference other scripts by name to avoid having to define the exact same script command in multiple places (e.g. post-update-cmd and post-install-cmd is a common pattern). See [the docs](https://getcomposer.org/doc/articles/scripts.md#referencing-scripts) for an example. This could be applied to [the symfony standard composer.json](https://github.com/symfony/symfony-standard/blob/22ec5ec332569d44170b0e69c81a238162e7df5d/composer.json#L30-L45) for example. The referenced script can even be array of scripts!

Defining your target production environment in composer.json
------------------------------------------------------------

The `config.platform` option lets you emulate which platform packages you have available on your prod environment. That way even if you have a more recent PHP version or are missing an extension locally for example, composer will always resolve packages assuming that you have the packages you declared installed.

Let's take a concrete example. If I am running PHP 5.6 in production but use PHP 7 to develop on my machine, I might end up installing a package that depends on PHP 7 and not notice the problem until I deploy and things break on the server. Obviously it is better to develop with the exact same versions to avoid any surprises but this isn't always practical and especially when working on open source libraries I think many don't use VMs but instead work with whatever PHP they have on their host system.

In Composer for example we want to guarantee that we at least work with php5.3, so [we tell Composer to fake the PHP version to be 5.3.9](https://github.com/composer/composer/blob/e87190e/composer.json#L44) when running updates, no matter what PHP version you run it with. If we did not do this for example the symfony/console package we depend on would upgrade to v3, but as symfony/console v3 requires at least PHP 5.5 it does not happen thanks to the platform config.

Excluding paths from the optimized classmap
-------------------------------------------

When you run `composer dump-autoload -o` to get an optimized autoloader, Composer scans all files and builds a huge classmap, even for packages that define autoload rules as psr-0 or psr-4. This is great but in some cases you have some classes in the psr-4 path that you actually don't want to be included in this optimized map. One typical example of this would be [Symfony2 bundles](https://github.com/nelmio/NelmioCorsBundle/tree/fa14a81) that follow the best practices layout of having all sources at the root of the repo. In this case the psr-4 path is "" (repo root) and there is a Tests/ folder which contains the test classes. Obviously in production we don't want to include those test classes in the optimized class map as it is just a waste. Adding the second line here to the autoload config will make sure they are not included:

 ```

"autoload": {
    "psr-4": { "Nelmio\\CorsBundle\\": "" },
    "exclude-from-classmap": ["/Tests/"]
},
```

Requiring packages easily and safely
------------------------------------

For quite a while now we have had the ability of running `composer require some/package` without specifying the version and Composer just figures out the best requirement for you. However this came with a catch, as it always picked the latest version available. This usually works but if the latest version requires a newer PHP version than what you have on your machine it would actually fail. I fixed that and it now looks at your PHP version (or `config.platform.php` value) to determine which is the best version to install. This is great because it enables package authors to require PHP 7 in their new package version for example and anyone using `composer require` will not accidentally get this newer version installed until they are ready and using PHP 7 themselves. More on that note soon!

I hope these tips helped bring a bit more attention to those cool new features we have added!