---
extends: _layouts.post
section: content
title: "Major glob() fail"
date: 2009-12-02 20:15:40
description: ""
featured: false
categories: [php]
---
I just had the pleasure of discovering another of PHP's little quirks and since it's been almost a year since my last post, I thought it would be a good occasion.

Working on some personal project that lists a bunch of stuff on my hard drive, I found out that directories that contain square brackets (those *\[\]*) don't return any results for the simple reason that glob reads *\[stuff\]* as a character class, just like in regular expressions. When you know it it makes perfect sense, but when you don't, the [documentation](http://docs.php.net/manual/en/function.glob.php) is really not so helpful. Of course it mentions libc's glob() and unix shells, but not everyone knows what that implies at first glance.

My first reaction when I noticed that those directories were missing was to try and escape them with backslashes, which works on unix systems, but not on windows since the backslash is the directory separator. The cross platform solution is to enclose them in brackets (i.e. *\[\[\]*), which effectively creates a character class with only the opening bracket in it, so it matches correctly.

I then wrote this glob\_quote function which, just like preg\_quote, escapes the meta characters that glob uses.

 \[code php\] function glob\_quote($str) { $from = array( '\[', '\*', '?'); $to = array('\[\[\]', '\[\*\]', '\[?\]'); return str\_replace($from, $to, $str); } \[/code\] Another detail worth noting while I'm at it is that this problem also occurs when you do *glob('\*.txt')* if your [cwd](http://docs.php.net/manual/en/function.getcwd.php) contains brackets, since in this case the cwd is pre-pended to the pattern, the solution being to escape it as well as such:  
*glob(glob\_quote(getcwd()).DIRECTORY\_SEPARATOR.'\*.txt');*

That's it for today, so until next year..