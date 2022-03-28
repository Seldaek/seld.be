---
extends: _layouts.post
section: content
title: "ActionScript 3 Language file for GeSHi"
date: 2007-11-30 17:36:28
description: "Actionscript 3 syntax coloring language file for GeSHi"
featured: false
categories: [actionscript, php]
---
As I wanted to post AS3 code with syntax coloring, I researched it a bit and found [GeSHi](http://qbnz.com/highlighter/ "GeSHi syntax highlighter"), a PHP syntax highlighter, for which you can create language files quite easily. There is currently no AS3 file available in GeSHi though, so I decided to build one.

For now it's available here, but I hope it will make it into GeSHi's next releases. It's following the FlexBuilder2 colors for the default style, but it is stylable with CSS.

Should you see any missing keyword or anything, please contact me so I can update it.

*Edit : **I updated this file to v1.0.1**, I was so focused on scraping data that I forgot the "this" keyword in the process, that's now fixed.*

Download : [AS3 Language file](/code/as3-for-geshi/downloads "ActionScript 3 Language File for GeSHi")