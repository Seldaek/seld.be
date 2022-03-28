---
extends: _layouts.post
section: content
title: "Typo Squatting and Packagist"
date: 2016-06-29 23:20:31
description: "Earlier this month an article was published summarizing Nikolai Philipp Tschacher's thesis about typosquatting. In short typosquatting is a way to attack users of a package manager by registering a package with a name similar to a popular package, hoping that someone will accidentally typo the name and end up installing your version of it that cont..."
featured: false
categories: [php]
---
Earlier this month [an article](http://incolumitas.com/2016/06/08/typosquatting-package-managers/) was published summarizing Nikolai Philipp Tschacher's thesis about typosquatting. In short typosquatting is a way to attack users of a package manager by registering a package with a name similar to a popular package, hoping that someone will accidentally typo the name and end up installing your version of it that contains malware.

The thesis mentions https://packagist.org as a good example as we use vendor namespaces:

> \[...\] it is much more secure, if a package is named ntschacher/GoogleScraper instead of just GoogleScraper. The reason is: If the package name is misspelled and not the author name, this will not have any consequences, because the typo version cannot be registered in this namespace, since this author name is already reserved. \[...\] Because package names are much longer with two attributes, it is more likely that users will copy and paste the package name instead of remembering it.

Despite this mitigating fact, it is still technically possible to squat the vendor name, so I wanted to take a look at our repository data and see if I could spot any bad actors. I wrote a script that basically does the following:

- Read the list of all vendor names which have packages with at least 1000 downloads, as the others are unlikely targets or at least low value targets.
- Check the [levenshtein distance](http://php.net/levenshtein) of every vendor name against all others.
- If the distance is 1, then it checks for package names within those two vendors to see if they have any intersecting names. Those are then candidates for being typosquatters.
 
What did I find? [21 vendor pairs](https://gist.github.com/Seldaek/491543d86b0d902fab9cb2b540bc85d9) that conflict to some degree. Only one that looked like an actual typosquatting attempt, `momolog/monolog`, and it even had in the package description that it was a demonstration of typosquatting. I deleted it along with 5 others packages that were useless, but the others are still in place. A lot of it is just due to people renaming their vendor names, or simply people that picked similar names but don't seem to be abusing anything.

In the future it would be nice to automate this, or prevent the creation of vendors that are too similar to popular ones. However it is reassuring to see that there is no widespread abuse going on.