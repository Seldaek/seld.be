---
extends: _layouts.post
section: content
title: "Composer: Installing require-dev by default"
date: 2013-07-11 10:18:05
description: "Jeremy Kendall started a small twitter shitstorm last night by asking why Composer's install command now installs the require-dev dependencies by default. Indeed until a few months ago the only way to install dev requirements was to run composer commands with the --dev flag. This was changed when the require-dev handling was fixed to be a lot more ..."
featured: false
categories: [php]
---
Jeremy Kendall started a small twitter shitstorm last night by asking why Composer's install command now installs the require-dev dependencies by default. Indeed until [a few months ago](http://seld.be/notes/composer-an-update-on-require-dev) the only way to install dev requirements was to run composer commands with the --dev flag. This was changed when the require-dev handling was fixed to be a lot more reliable, and the update command started installing dev requirements by default.

A couple months ago when releasing alpha7 I took care to [note in the changelog](https://github.com/composer/composer/releases/tag/1.0.0-alpha7) that the install command would also start installing dev requirements by default in the next release. I did that change some weeks ago and now people started to notice.

The rationale behind the change is fairly simple, it's about consistency and ease of use. Consistency between the various commands which now all default to have require-dev enabled. Ease of use because in 99% of the cases, when you type a composer command by hand you should be doing so on a dev machine where it makes sense to have dev requirements enabled. The only case where you want them disabled is when deploying to production or other similar environments. Since those deployments should be scripted, adding --no-dev to your script vs having to type --dev every single time you run composer makes sense. I understand it may create some pain in the short run - although having dev requirements installed in prod is usually harmless - but I truly believe it is the right thing to do if you look at the big picture.

Jeremy also said that [install is meant for prod](https://twitter.com/JeremyKendall/status/355187632365514755), and while this is not a wrong statement per se, I would like to take the chance to clarify that install is *not only* meant for prod. Install should be used for prod for sure, because you don't want the prod server to run newer packages than those you last tested on your dev machines. But in many cases developers should also run install to just sync up with the current dependencies of the project when pulling in new code, or when switching to an older feature branch or older release to do a hotfix for example. Developers also might need to run install in some larger teams where only a few select devs are responsible to update the dependencies and test that things still work, while the other devs just run install to sync up with those changes.

And for those that are still not committing their composer.lock file, note that the above paragraph only applies if you have a lock file available in the project's git repository. If you are not sure what this file does please [read more about it](http://getcomposer.org/doc/01-basic-usage.md#composer-lock-the-lock-file) in the docs.