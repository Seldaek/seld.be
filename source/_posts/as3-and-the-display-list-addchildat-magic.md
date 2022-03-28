---
extends: _layouts.post
section: content
title: "AS3 and the Display List, addChildAt magic."
date: 2007-12-21 11:51:01
description: ""
featured: false
categories: [actionscript]
---
ActionScript 3 introduced the *Display List*, which is the new version of the old depth system that AS1/2 had, and the *Display Objects*, which replace the MovieClip, but extending the idea a lot since now there are many types of objects that can be added to the Display List.

There are many advantages to this implementation, you don't HAVE to provide a depth anymore, the Display Object names are optional as well, and it's all more consistent as the only way to add an object to the list is through AddChild/AddChildAt, no more createEmptyMovieClip, attachMovie, etc.

All of this is quite easy to adjust to as it's really nicer and more powerful than AS2 was, but until recently I was stuck with my old habits of using depths. What I mean is that, in AS2, if you did ten times *createEmptyMovieClip('name',0);* then only one MovieClip was left at the end, as each new MovieClip created was overwriting the previous at depth 0.

I recently wanted to add an object at the bottom of the stack, to display it as a background. So I looked at my options, and since I was still thinking in the "AS2 way", I thought about using swapDepths (now swapChildren) on all the current objects to move them up and free the zero-depth.

But then when I went into the documentation to check if this could be done more efficiently with a new method I didn't know of, I realized that the addChildAt method, if set to an already occupied index, will not overwrite it as it happened before. Instead it will just push all the objects up to make room for your newly added object. This is a really great feature, which allows you to really forget all about depths. swapChildrenAt acts in the very same way, allowing to move things around without having to worry about keeping track of all your used depths.