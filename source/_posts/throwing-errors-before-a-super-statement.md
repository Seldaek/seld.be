---
extends: _layouts.post
section: content
title: "Throwing errors before a super() statement"
date: 2007-11-27 17:30:47
description: ""
featured: false
categories: [actionscript]
---
Lately I was building a class which takes XML as it's configuration, reads part of it and then calls *super()* with some parameters.

However I wanted to throw an error if the XML did not contain valid settings, and Flex doesn't let you do that. Upon compilation it returns an error saying *1201: A super statement cannot occur after a this, super, return, or throw statement.*

Fortunately, it's possible to overcome this by creating a helper function or class that will throw the error for you, so that's what I did with my ErrorThrower class. It is as simple as it can get, and it fools the compiler alright.

 \[code as3\] package com.seld.errors { public class ErrorThrower { public function ErrorThrower(msg:String, id:int = 0):void { throw new Error(msg, id); } } } \[/code\] Then with that class, instead of doing *throw new Exception('foo');* you just do *new ErrorThrower(msg);* and it will be compiled, error free.