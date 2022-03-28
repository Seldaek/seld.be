---
extends: _layouts.post
section: content
title: "New design"
date: 2010-04-03 18:29:03
description: ""
featured: false
categories: [news]
---
In recent news, this site got a new design, I thought I could make the content more readable and accessible, so I killed my old templates and style sheets and started from scratch, without photoshop this time.

There is also mobile browser (android/iphone) support which is by the way achieved with this very interesting CSS media instruction:

 \[code html\] <link href="/mobile.css" media="only screen and (max-device-width: 800px)" rel="stylesheet" type="text/css"></link> \[/code\] This means any device with a monitor less than or exactly 800px wide will load the mobile.css file on top of the default one. Note that using *media="handheld"* is not working for recent smartphones that consider themselves greater than old school internet-enabled cellphones, so this is the only way to do it.

Any feedback, especially bad, is appreciated.