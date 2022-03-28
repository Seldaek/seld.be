---
extends: _layouts.post
section: content
title: "Terminal (Bash) arguments tricks"
date: 2011-04-13 19:50:25
description: "Reading David DeSandro's last post on how to store strings in variables in terminal, or any bash-y shell (I'd say any unix shell but I'm sure there is a weird one out there that does things differently) for that matter, it struck me that many web developers seem to have a big disconnect with the shell. Now I'm no expert, but I know that the use cas..."
featured: false
categories: [php, web, javascript]
---
Reading David DeSandro's last post on how to [store strings in variables](http://dropshado.ws/post/4554069627/strings-in-terminal) in terminal, or any bash-y shell (I'd say any unix shell but I'm sure there is a weird one out there that does things differently) for that matter, it struck me that many web developers seem to have a big disconnect with the shell.

Now I'm no expert, but I know that the use case he describes can be solved much more efficiently, so I felt like writing a little follow-up, and hopefully teach you, dear reader, a thing or two. The short story is that you sometimes want to do many operations on the same file. Now the neat trick to do that is to use [history expansion](http://www.gnu.org/software/bash/manual/bashref.html#History-Interaction), which allows you to reference one of the parameters from the previous commands you typed.

As always with unix stuff, it has simple useful basics, and then it can get really hairy. Here are a few examples, from most commonly useful to those things you just won't remember in five minutes.

 \[code\] # First, the example from DeSandro's post # !$ references the last argument of the previous command. mate \_posts/2011/2011-04-12-terminal-strings.mdown git add !$ tumblr !$ # Now more complex, let's copy the second argument # !! references the last command, and :2 the second arg. echo foo bar baz echo !!:2 # outputs "bar" # Batshit crazy # !?baz? references the last command containing baz, :0-1 grabs the two first args echo !?baz?:0-1 # should output "echo foo" \[/code\] Now if you've been paying attention, the second example had **!!** in it that referenced the last command. This one is really useful for all those times you forgot to **sudo** something. Just type **sudo !!** like you really mean it, and it will copy your last command after sudo. It does not work if you add cursing to it though.

So read up those history expansion docs, it's really worth if only to know your options, and if you know other related tricks, please do share in the comments.