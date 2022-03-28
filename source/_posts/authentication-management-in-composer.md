---
extends: _layouts.post
section: content
title: "Authentication management in Composer"
date: 2014-05-27 15:07:03
description: "Up until today if you run a home-grown package repository serving private packages it was quite a pain to use with Composer. You did not have efficient way to password-protect the repository except by inlining the password in the composer.json or by typing the username/password every single time. With the merge of PR#1862 and some further improveme..."
featured: false
categories: [news, php]
---
Up until today if you run a home-grown package repository serving private packages it was quite a pain to use with Composer. You did not have efficient way to password-protect the repository except by inlining the password in the composer.json or by typing the username/password every single time.

With the merge of [PR#1862](https://github.com/composer/composer/pull/1862) and some [further improvements](https://github.com/composer/composer/commit/90d1b6e08a3135db3edef44e12478ee34f33f933) you can now remove credentials from your composer.json! The first time Composer needs to authenticate against some domain it will prompt you for a username/password and then you will be asked whether you want to store it. The storage can be done either globally in the `COMPOSER_HOME/auth.json` file (COMPOSER\_HOME defaults to `~/.composer` or `%APPDATA%/Composer` on Windows) or also in the project directory directly sitting besides your composer.json.

You can also configure these by hand using the config command if you need to configure a production machine to be able to run non-interactive installs. For example to enter credentials for example.org one could type:

 ```

composer config http-basic.example.org username password
```

   
That will store it in the current directory's auth.json, but if you want it available globally you can use the `--global` (`-g`) flag.

The advantage of having it in a separate file is that you can easily add this auth.json to .gitignore and let every developer in your company have their own credentials in there.

And I did not forget the security-minded folks that do not want to store anything on disk and do not want to be prompted every time! You can use `composer config -g store-auths false`

Altogether these small improvements should make some use cases much easier so that is great news.