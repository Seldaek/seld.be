---
extends: _layouts.post
section: content
title: "Who let the Dwoo out ?"
date: 2008-05-13 00:47:41
description: "Dwoo announcement - my new php5 template engine"
featured: false
categories: [php]
---
Four months have passed since I started on this project and I finally feel that it is stable enough to make an announcement and have more people trying it.

So what is it ? [Dwoo](http://dwoo.org/) is a PHP5 template engine. Another one you might think, indeed but with every new project comes a new vision, and hopefully you will like mine.

If you you don't like chatter, feel free to skip to [download](http://dwoo.org/download).

#### History

Early this year I wanted to rebuild my template engine to have something stronger to work with, so I started thinking about it and then asked myself why I didn't use one of the available engines out there. The fact is that -and I guess I will lose many of my few readers here- I am not fond of using php itself as a template engine (with Savant or similar).

The two main reasons are that the syntax is too heavy for short variable insertions and that I want to allow end users to edit templates themselves on a site I'm working on. Obviously giving them access to the php files is not an option, so I was left with Smarty-like engines. Most of them are slow, too old, not maintained anymore or just plain ugly, so I didn't like that either.

Smarty being one of the most popular engines, I decided to look at its features to build up my road map, the point being that I knew from the start where I was headed, which has allowed me to avoid many of the weirdnesses that you can find within Smarty. Those being due to backwards compatibility issues or simply the fact that it has been built layer upon layer during many years.

Hence Dwoo was born, built to support (most of) Smarty features at first, but then extended to provide new ways to build templates more efficiently. I also thought that since it followed Smarty features so closely, I should make an easy upgrade path from Smarty to Dwoo. This is possible with the help of an adapter class that translates the Smarty API calls, effectively cloaking Dwoo as a Smarty object.

That means it takes seconds to switch to Dwoo if your app runs Smarty on PHP5 (and well, if you don't use one of the few [unsupported features](http://wiki.dwoo.org/index.php/SmartySupport)), and then you can [make the move](http://wiki.dwoo.org/index.php/SmartyAdapter) smoothly.

#### Features

I will try to sum up the main features added on top of the Smarty stuff (vars replacement, loops, conditions, caching), feel free to look at the wiki for more detailed examples. Although documentation is a bit scarce at the moment, I will now focus on filling the wiki.

Dwoo is a scope aware engine, [some](http://wiki.dwoo.org/index.php/Blocks:loop) [plugins](http://wiki.dwoo.org/index.php/Blocks:with) are provided that allow you to change the current scope and there are special variables that read the current, parent or top level (global) scope. One of those plugins is the [loop](http://wiki.dwoo.org/index.php/Blocks:loop) plugin, that iterates over an array and moves the scope within each value, I won't lie it is a tad slower than a pure foreach loop, but if you compare PHP's *&lt;?php echo $item\['name'\]; ?&gt;* to simply *{$name}*, it makes the template much shorter and easier to read, so it is probably worth the performance loss unless you are under a lot of traffic - but in this case you might want to use caching anyway.

[Template inheritance](http://wiki.dwoo.org/index.php/TemplateInheritance), a concept that I discovered while looking at [Django](http://www.djangoproject.com/) -a Python framework-, had not yet been ported into any PHP template engine as far as I know. It is basically a new way to build complex template structures by having templates inherit parent templates instead of parent templates including child templates.

Plugins/functions can be [called](http://wiki.dwoo.org/index.php/Syntax#Functions) with named arguments as you do in Smarty, but they can also be called without argument names, which is really convenient and easier in most cases.

About plugins, my main issue with Smarty was the use of a $params array that received all parameters as an associative array. The way I solved this is that you just [create your plugin](http://wiki.dwoo.org/index.php/WritingPlugins) with all the parameters you want, with or without default values, and then Dwoo's compiler uses [reflection](http://ch2.php.net/Reflection) to reorder the parameters in the correct place, checks that arguments with no default value are set in the template, etc. This saves a lot of *if(isset($params\['bleh'\]))* junk in the plugins, and there is still the possibility to use a parameter array if a plugin requires it.

Now if you're still with me I hope you will consider trying it, just [download it](http://dwoo.org/download) and [get started](http://wiki.dwoo.org/index.php/GettingStarted).