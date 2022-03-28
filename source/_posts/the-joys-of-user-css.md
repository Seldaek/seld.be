---
extends: _layouts.post
section: content
title: "The joys of user stylesheets"
date: 2008-11-28 17:13:33
description: ""
featured: false
categories: [web]
---
User stylesheets are a way to inject some CSS in all the sites you visit, each browser has his own way of [setting it up](http://www.squarefree.com/userstyles/user-style-sheets.html) (if you use opera step 2 there should be replaced with: "Tools &gt; Preferences &gt; Advanced &gt; Content &gt; Style Options &gt; Select your css file in *My stylesheet*"), but the idea is always the same.

I've recently found a couple of use for these styles so I thought I might as well share :

#### Changing gmail's font

I like gmail, but losing my dear monospaced font was annoying me - especially when reading code-related mails with snippets in them. So this little hack allows you to choose the font used in the mail body area of the page. It's made for the "old" gmail interface since I don't have the new one yet, but it can probably be adapted if it doesn't work with the new one.

 \[code css\] .XoqCub .ArwC7c { font:16px proggytinytt, "courier new", courier !important; font-size:16px !important; } \[/code\] This uses the [proggytinytt](http://www.proggyfonts.com/) font by the way, which is my font of choice for all monospace purposes, however if you don't have it it falls back on courier new/courier.

#### Saving flickr's images peacefully

Some images on flickr seem to be protected with a file called *spaceball.gif* that's overlayed onto the actual image, so that when you right-click it to save, you hit the transparent gif and can't save the image. With the help of that great CSS3 selector :nth-child(N), you can make sure you hide the gif if it's there.

 \[code css\] .photoImgDiv img:nth-child(2) { display:none !important; } \[/code\] If you've anything useful, feel free to post it in the comments.