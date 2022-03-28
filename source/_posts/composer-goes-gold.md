---
extends: _layouts.post
section: content
title: "Composer goes Gold"
date: 2016-04-05 17:00:00
description: "Five years ago today, Composer was born. In some ways it feels like yesterday, at least it doesn't feel like five years went by. In other ways it seems like a lifetime ago, and I can barely remember what it was like to write PHP code without having a whole ecosystem at my fingertips...."
featured: false
categories: [news, php]
---
Five years ago today, [Composer](https://getcomposer.org/) was born. In some ways it feels like yesterday, at least it doesn't feel like five years went by. In other ways it seems like a lifetime ago, and I can barely remember what it was like to write PHP code without having a whole ecosystem at my fingertips.

Composer 1.0.0
--------------

Today I have the pleasure of announcing that the first [1.0.0 stable release](https://github.com/composer/composer/releases/tag/1.0.0) is out and available for immediate download!

It has been a long time coming, but we fixed a few last critical issues in the last few months that finally allow me to take this step. Going forward I plan on releasing more frequently as well ;)

Update channels
---------------

One big change that happened recently is that by default the Composer installer *and* `composer self-update` both install stable releases by default. This is great to avoid bad surprises if you run self-update as part of your deployment, but it also means that the feedback loop gets longer for us when we do changes. Therefore I really hope that we can get enough people running frequent self-updates using the `preview` (alpha/beta/..) and especially `snapshot` (dev builds) channels.

My recommendation would be to run regular updates for deployment/builds to have stability, run `self-update --preview` in CI if you can to make sure you test at least pre-release versions. And on dev environments `composer self-update --snapshot` would give you the latest and shiniest Composer has to offer. This will ensure we spot regressions or mistakes as early as possible, and thus avoid breaking things in stable releases.

Composer Gold Edition
---------------------

Finally, in an attempt to mark the fact that Composer has finally [gone gold](https://en.wikipedia.org/wiki/Software_release_life_cycle#Release_to_manufacturing_.28RTM.29), I wanted to do something special.

My girlfriend had a brilliant idea, and a few days and a couple express deliveries later here we are. We made an actual Composer gold master copy of the 1.0 release, on a floppy!

Collector items are no fun if you can't collect them though, so you can [head to eBay now to bid on it](http://www.ebay.co.uk/itm/Composer-V1-0-0-Anniversary-Gold-Edition-/162029115091?) if you'd like to own it!

[![](https://seld.be/images/composer-gold.jpg)](http://www.ebay.co.uk/itm/Composer-V1-0-0-Anniversary-Gold-Edition-/162029115091?)

Here's to the next five years <span style="font-size:.5em">(for the 2.0, hah.)</span>!