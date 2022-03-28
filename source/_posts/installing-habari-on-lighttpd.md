---
extends: _layouts.post
section: content
title: "Installing Habari on Lighttpd"
date: 2008-08-02 23:32:43
description: "Just a small post about Habari installation over Lighttpd, since it is not really documented anywhere that I could find.I will assume that you know how to run php scripts on your server, and start from there. So once you have unpacked Habari files in say /home/seld/domain.com/, all you need to do is add the following to your lighttpd.conf file&nbsp..."
featured: false
categories: [web]
---
Just a small post about [Habari](http://habariproject.org/en/) installation over Lighttpd, since it is not really documented anywhere that I could find.

I will assume that you know how to run php scripts on your server, and start from there. So once you have unpacked Habari files in say /home/seld/domain.com/, all you need to do is add the following to your lighttpd.conf file :

 \[code js\] $HTTP\["host"\] =~ "^(www\\.)?domain\\.com$" { server.document-root = "/home/seld/domain.com" url.rewrite-once = ( "^/(?!scripts/|3rdparty/|system/|doc/|user/(?:themes/|files/|plugins/|locales/|sites/))\[^?\]\*(\\?(.\*))?" =&gt; "/index.php/$1" ) } \[/code\] Update: See also the Habari wiki on how to set that up, they have since then added docs on [Lighttpd support](http://wiki.habariproject.org/en/Installation#Configuring_Lighttpd)

With this setup, your blog must lie in the top level directory ( http://domain.com/ ), should you want to install it in a subdirectory, you need to add it to the url rewrite, for example to install in http://domain.com/blog/ you would need to replace line 4 with:

**"^/blog/(?!scripts/|3rdparty/|system/|doc/|user/(?:themes/|files/|plugins/|locales/|sites/))\[^?\]\*(\\?(.\*))?" =&gt; "/blog/index.php/$1"**