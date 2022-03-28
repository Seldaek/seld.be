---
extends: _layouts.post
section: content
title: "Web Development on Windows in 2018"
date: 2018-05-16 17:49:49
description: "Foreword I have been developing web apps on Windows for the last 10+ years. I ran PHP, Apache then Nginx, MySQL and Postgres, Redis and others. I dabbed in VMs at some point but was always dissatisfied with the experience so mostly this was all running natively on Windows. There were quirks for sure, I have used a lot of duct tape over the years. A..."
featured: true
categories: [news, random]
---
Foreword
--------

I have been developing web apps on Windows for the last 10+ years. I ran PHP, Apache then Nginx, MySQL and Postgres, Redis and others. I dabbed in VMs at some point but was always dissatisfied with the experience so mostly this was all running natively on Windows. There were quirks for sure, I have used a lot of duct tape over the years.

All my hosting and sysadmin work is done on Linux though, so I have always felt more comfortable using command line tools from the Linux world. I have tried a variety of solutions to get those running on Windows, Cygwin was interoperability hell, Msys/MinGW was better but also had shortfalls.

Then a couple years ago Microsoft announced WSL (Windows Subsystem for Linux). In short it is a Windows-level implementation of the Linux system calls, allowing us to run Linux-compiled software on top of the Windows kernel. The coverage of syscalls isn't 100% yet, but as of the Windows 10 April Update released last month most things work really well for my purposes. As I recently got a new laptop I figured it was time to switch over.

Hardware considerations
-----------------------

In the last year, more and more of my Mac-using colleagues and friends have stopped making fun and started complaining, missing Esc keys and whatnot. The reasons for their anguish do not matter much, but it seems like lots of people are considering switching to Windows and/or Linux. I figured I would do a write up as it can probably help smoothen the migration process.

If you are looking to get a new laptop, I can only recommend [Lenovo's T-Series](https://www3.lenovo.com/us/en/laptops/thinkpad/thinkpad-t-series/c/thinkpadt) (I just got a T480s) or the [X1 Carbon](https://www3.lenovo.com/us/en/laptops/thinkpad/thinkpad-x/c/thinkpadx) or [Microsoft's own Surface Book 2](https://www.microsoft.com/en-us/surface/devices/surface-book-2/overview) if portability is really important to you. Dell and Asus also seem to have a few decent machines but I have no experience there, and I would stay away from any other cheaper manufacturers if you're going to use this all day every day.

Setting up a new machine
------------------------

First of all, depending on how you configured your machine to start with, check what your username is. If you open a terminal (open up the start menu and type PowerShell or cmd.exe/Command Prompt) you will see the prompt contains C:\\Users\\XXX - that last bit is your username, and if it doesn't please you or contains spaces or non-ASCII characters I would highly recommend [renaming your user account](https://superuser.com/a/955026) as it will likely save you some trouble later.

Then the first step is to [install Chocolatey](https://chocolatey.org/) which is a Windows package manager. Once you have that, you can install a bunch of things you will need on the Windows side.

I would recommend the following:

```
choco install -y firefox googlechrome dropbox slack skype thunderbird notepad2-mod sysinternals xnviewmp 7zip.install foobar2000 cyberduck wox heidisql sublimetext3 vcxsrv
choco install -y clipx --version 1.0.3.9-beta --pre
choco pin add --version 1.0.3.9-beta -n=clipx
```

Go through the list and remove those you don't want obviously, but a few that you might not recognize if you haven't been using Windows are:

- notepad2-mod overwrites the good ol' notepad with something that's not a full blown editor but does a decent job of quickly editing a file
- sysinternals is [a set of utilities](https://docs.microsoft.com/en-us/sysinternals/downloads/sysinternals-suite) for monitoring and debugging windows
- xnviewmp is a great image viewer, IMO anyway, the one shipping with windows isn't all that bad these days depending on what you do
- 7zip handles all possible archive formats
- foobar2000 is the best music player with the worst name, nerdy business, skip it if you gave in to music streaming
- cyberduck does S/FTP just in case the 90s call, but also S3 browsing
- wox is like Alfred for OSX, an app launcher, you can also use the windows key then type but I find Wox faster and more configurable
- heidisql is a nice way to browse your MySQL/PostgreSQL database, definitely beats phpMyAdmin or the like
- sublimetext3 my editor of choice but if you have opinions please remove it and move on, I don't care
- vcxsrv is an X server which needs to run to be able to run GUIs from Linux, which I really only use for gitk. You can also look at [X410](https://token2shell.com/x410/) which is a paid alternative with a bit better support if you want to run many linux apps.
- clipx is a multiple clipboard storage which looks horrendous but is functional, if you know a better option please do tell
 
This gives you a decent basis to get stuff done, and for backup and whatnot, please note that most apps will (and should) store their settings in `C:\Users\...\AppData\Roaming`. When migrating to a new laptop copying that over is the best way to carry over settings. Some stuff will end up in AppData\\Local but in theory that is only made for caches and temp files.

If you then want to upgrade apps, run `choco upgrade -y all` in an admin shell.

Installing Ubuntu, git/ssh and a web server
-------------------------------------------

First of all, it's not exciting but it's a good idea to set some environment variables. Search for "Edit the environment variables" in the start menu, then in the dialog add the following User env vars:

`WSLENV` set to `HOME/p` - this says that WSL should receive your HOME env var, /p means it's a path and should be converted to linux style path.

`HOME` set to `C:\Users\XXX` - or whatever you want your home dir to be, but this is what makes sense from a Windows perspective.

Add a few paths to the `Path` environment variable (it is exported to WSL automatically). I recommend adding `C:\Users\XXX\bin` to have a place to drop exe files or scripts you want to be able to execute from anywhere, `C:\Users\XXX\.yarn\bin` if you are going to use Yarn, `C:\Users\XXX\.config\composer\vendor\bin` if you use Composer to and want to install global utils.

Then as it is 2018, you can get [Ubuntu 18.04](https://www.microsoft.com/en-us/store/p/ubuntu-1804/9n9tngvndl3q?rtc=1) right from the Microsoft store. What a world we live in!

Now you can install [ConEmu](https://conemu.github.io/), which is my terminal emulator of choice. This will do the color support etc. If you install it once Ubuntu is present I think it'll default to the right thing, but if not make sure you pick `{Bash::bash}` as its startup task. That way you get to Linux-land as soon as you open it.

Alternatively open a new cmd.exe window and type `bash` or `ubuntu1804` to start it.

### Ubuntu / WSL configuration

Once in a bash prompt, run `sudo nano /etc/passwd` to edit your home dir. By default it will be /home/XXX but I rather not use that as it is under the Linux filesystem and I want to be able to store as little as possible in there, so I can manage my files from Windows using my editor of choice and also make sure I have backups running etc. The Linux filesystem I treat as disposable. Anyway once in that /etc/passwd file you can look for a line like `XXX:x:1000:1000:,,,:/home/XXX:/bin/bash` with your username, change the `/home/XXX` at the end to be `/mnt/c/Users/XXX` instead, you'll thank me later. Save and exit (Ctrl-X then Y then Enter), then go on to the next file: `sudo nano /etc/wsl.conf` to edit the WSL config, and make sure that it contains this at the end:

```
[automount]
enabled = true
options = "metadata"
```

Save and exit (Ctrl-X then Y then Enter), close all bash windows to make sure it "shuts down" Ubuntu and then reopen it. This metadata option means that it will let you use chmod to modify Windows files permissions from bash. That is invaluable to set up SSH correctly. You will want to have your ssh key set up just like you would on OSX or in Linux at ~/.ssh, or in Windows terms `%USERPROFILE%/.ssh`, so `C:\Users\XXX\.ssh`. Put your public/private keys in there, and ssh\_config if you have one. You can create the folder from the Ubuntu terminal if needed, or create it as `.ssh.` from Explorer otherwise it won't let you save it as .ssh, but the trailing dot will get trimmed. Once you got those files set up you want to make sure SSH does not flip out about file permissions. By default all files in the Windows filesystem have a 777 mode for Linux, so SSH will refuse to read your key as it is insecure. `chmod -R go-rwx ~/.ssh && chmod 0400 ~/.ssh/id_rsa*` should fix that. Try to ssh in to some server if you can to verify.

### Web server

Once that is done, time to install a web server, PHP and whatnot. You can run the commands in the Setup script at <https://gist.github.com/Seldaek/fe3676f8b1ade7b9eb65abd5f5508b3a>. I tried to split up the steps so it can be edited easily, but I think that should be a good base for most PHP devs at least. If you want Apache.. don't ask me :)

The other file accessible in the gist linked above is a .bash\_profile, which you can drop in `~/.bash_profile`. It adds a few aliases, and ssh-agent so that your encrypted SSH key doesn't prompt for a password every single time but only once when you open the terminal. It also contains a few helpful functions like n/subl/exp which will start notepad (or nano if editing a linux file)/sublime text/explorer but do path translation first so that if you give them a linux-style path they will receive the equivalent windows path and open the right file/directory. Note that you have to open a new terminal for that file to take effect. It's not the end all of bash configs, but it's a good start and inspiration to build upon.

To configure PHP and nginx, there are a few minor things I would recommend to make it run smoothly. In `/etc/php/7.2/fpm/pool.d/www.conf` you should set the following to make sure the php processes are running as your user and you don't have permission issues:

```
listen = /var/run/php-fpm.sock
user = XXX
group = XXX
```

Then in `/etc/nginx/nginx.conf` inside the `http {}` block make sure you add `fastcgi_buffering off;`. That is required to make it run on WSL for now. Hopefully a future Windows version will fix it. In that same file I also add at the end of the `http {}` block an include so that I can manage all my vhost files in windows and not loose them if I decide to reset Ubuntu: `include /mnt/c/Users/XXX/nginx-vhosts/*.vhost;` - check nginx\_example.vhost in my gist to see how these vhosts can look like for hosting a Symfony app. What matters really is that `root` has to be a Linux-style `/mnt/c/..` path and `fastcgi_pass` should match what FPM listens to.

For starting up nginx, php etc you use `sudo service php7.2-fpm restart` for example. Now there is a catch here one of the issues left of WSL is that it has no init system really as it doesn't "boot" an OS per se. So you can't easily make it start services automatically in the background. You could make sure they start at the end of your .bash\_profile, but that slows down opening new terminals so I took the approach of adding a new file in `~/bin/srv` containing the following:

```
#!/bin/bash

sudo service php7.2-fpm start
sudo service nginx start
sudo service redis-server start
```

Now as I added this bin dir to my PATH earlier, all I need to do when I start my machine is open a new terminal, run `srv` and all is well.

One last thing I would recommend if you care about gitk is to run `echo 'start "" "C:\Program Files\VcXsrv\vcxsrv.exe" -multiwindow' > /mnt/c/Users/$USER/AppData/Roaming/Microsoft/Windows/Start\ Menu/Programs/Startup/VcXsrv.bat` to make sure VcXsrv starts automatically when you start windows, otherwise gitk won't be able to run without X server.

### Gotchas

Since Windows is case insensitive and contains lots of uppercase paths I would also recommend adding a `~/.inputrc` file with `set completion-ignore-case On` in it. That makes bash tab completion ignore case sensitivity, which makes life much easier IMO.

Speaking of differences, if you create files from Windows, make sure you use LF line endings and not CRLF, or bash will trip up. Notepad2 has an easy way to change that by double clicking on LF/CR/CR+LF in the bar at the bottom.

FAQ
---

### What about MySQL/PostgreSQL?

I install those in Windows and not Ubuntu, because I want the data to live in the Windows filesystem as explained above. Sockets work just fine across the OS boundary so you can connect from your Ubuntu PHP.

### Which Antivirus do you need?

Just don't go there IMO. Windows Defender has shipped with Windows for ages now, and it's really good enough if you are not opening random .exe attachments from dodgy emails. Other antivirus software tends to hook so deep into the system that they cause instability or even introduce vulnerabilities.

Conclusion
----------

That's it for the first steps. Hopefully this gets you up and running quicker than if you had to figure it all out. If anyone has specific tips please do write in the comments below. I am sure some of this can be improved.
