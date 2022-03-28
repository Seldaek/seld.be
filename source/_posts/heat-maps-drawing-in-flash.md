---
extends: _layouts.post
section: content
title: "Heat maps drawing in Flash"
date: 2007-12-16 03:22:37
description: ""
featured: false
categories: [actionscript]
---
Someone was looking for help to draw Heat Maps in Flash this afternoon on [\#flash](irc://irc.quakenet.org/flash "#flash @ quakenet.org") and as I found the matter interesting I gave it a shot.

I managed to do it by drawing grey circles with 1-5% opacity to a BitmapData object, which works a lot faster than working with Arrays to sum up all the values.

After that first pass the class scans the whole BitmapData to find the peak value and then uses that peak to scale all values and enhance the contrast of the image. At the same time, the pixels are colored depending on their value, which creates the "heat" look.

However, with a high resolution and thousands of heat spots, the process is taking a while to complete so I thought I would use this occasion to try and implement a render loop that computes chunks of data on every frame instead of running all at once and freezing the player. And here is the result, although the heat map doesn't match the underlying map.

\[flash\]/upload/lib/flash/heatmap-demo.swf\[/flash\]

You can [get the sources](/code/heatmap-1-0-0/download/1), including the demo .fla to see how it works.

On a side note, during my initial tests I did a small error with bitwise operators which lead to this fractal-art-like generator, quite useless but sometimes it produces interesting -one might say nice- results. Click it to redraw it !

\[flash\]/upload/lib/flash/heatmap.swf\[/flash\]