---
extends: _layouts.post
section: content
title: "Toran Proxy Updates"
date: 2016-04-04 20:41:37
description: "Over the last month I spent quite some time bringing Toran Proxy up to speed with the times, and added a few features along the way. I haven't blogged about it in a while so I thought an update was overdue. Toran what? First of a all a quick note about Toran Proxy, in case you don't know about it. You can check the website for details but in two wo..."
featured: false
categories: [news, php]
---
Over the last month I spent quite some time bringing [Toran Proxy](https://toranproxy.com) up to speed with the times, and added a few features along the way. I haven't blogged about it in a while so I thought an update was overdue.

Toran what?
-----------

First of a all a quick note about Toran Proxy, in case you don't know about it. You can check [the website](https://toranproxy.com) for details but in two words it is a way to host private packages, as well as to mirror github, packagist and others so that if they break down you can still run composer installs from your Toran setup. It is a paid product but money goes to fund Composer development and Packagist hosting as well so you will hopefully agree it is for a good cause ;)

Drupal, Magento and WordPress support
-------------------------------------

v1.3 added the capability to mirror other public repositories, like the [WPackagist](https://wpackagist.org/) one for WordPress, the [Firegento](https://packages.firegento.com/) repo for Magento or [Drupal's Packagist](https://packagist.drupal-composer.org/) setup. These projects have large plugin ecosystems and they have chosen to publish them on their own repositories instead of using Packagist. Toran now lets you add these in the settings so that you can mirror public packages transparently no matter if they come from Packagist or another public repo.

Performance and UI improvements
-------------------------------

It used to be a bit slow to run updates with many packages, as it was hitting the PHP application for every package. This has been fixed and updates should now run a lot faster.

As for UI, the new release brings an actual package detail page for your private packages so you can see which versions are available and what they require, as well as trigger instant updates from the UI.

   
If you haven't yet, go [try it out](https://toranproxy.com) with the personal edition and I hope you will then consider getting a license to use it in your company!