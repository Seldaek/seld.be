---
extends: _layouts.post
section: content
title: "PHP Console in Your Browser"
date: 2010-09-23 18:05:55
description: "So-called interactive modes for scripting languages are commonly used in the command line, and they are great for quick tests, but most of the time when I try something it tends to grow and quickly becomes painful to handle in a CLI one-liner. Since I spend most of my days programming PHP I tend to need that a lot and a few years back I wrote a sma..."
featured: false
categories: [php]
---
So-called interactive modes for scripting languages are commonly used in the command line, and they are great for quick tests, but most of the time when I try something it tends to grow and quickly becomes painful to handle in a CLI one-liner.

Since I spend most of my days programming PHP I tend to need that a lot and a few years back I wrote a small script that would let me type php code in my browser and execute it. Nothing fancy, but quite useful.

Over the years a few people got interest seeing me use it and asked for the sources, so instead of repackaging it every time, I thought I'd clean it up, polish a bit, add some features, and put it on github.

I can't really let you try it on my website for the obvious security implications, but you can look at the screenshot below or to get your hands on it more directly head to [github (seldaek/php-console)](http://github.com/seldaek/php-console) or grab the [zip archive](http://github.com/Seldaek/php-console/zipball/master).

Setup is easy, just put it somewhere, and run it in a browser. It only works from localhost, so it's as secure as your machine is, and I can't be held responsible for anything.

It fetches the execution result with javascript so you can even die() in the script with no problem, and expands tabs to spaces. Press ctrl-enter to submit from the textarea.

![](http://seld.be/_misc/php-console.png)

What do you think?