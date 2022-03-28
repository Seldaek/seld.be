---
extends: _layouts.post
section: content
title: "Common files in PHP packages"
date: 2016-04-21 15:56:15
description: "This one started in a peculiar way. Paul M. Jones announced a new version of his Producer tool, I had a look at it and saw that it recommended having a changelog called CHANGES.md by default. This irked me a bit because I always use CHANGELOG.md and hardly ever see that as a file name (it's the little things that matter, right?). My first thought w..."
featured: false
categories: [php]
---
This one started in a peculiar way. Paul M. Jones announced a new version of his [Producer](https://github.com/producerphp/producer.producer/) tool, I had a look at it and saw that it recommended having a changelog called CHANGES.md by default. This irked me a bit because I always use CHANGELOG.md and hardly ever see that as a file name (it's the little things that matter, right?).

My first thought was to report an issue asking to change the default, but then I thought it's Paul, he will not just take my word for it, he will want hard facts. So here I am two days later. I queried GitHub's API for the file listing (only the root directory) of all PHP packages listed on packagist.org.

Show me the data!
-----------------

What this let me do is look at what files are commonly present (and not), which is quite interesting to get a picture of the whole ecosystem.

In total, this includes file listings from 78'992 packages (no GitHub API was harmed in the making of this blog post though). And here are a few interesting things that surfaced:

### Common Directories

- 58% of packages include a src/ directory and 5% a lib/ one. That's surprisingly low to me, that means a lot have the code simply in the root folder.
- 8% have a DependencyInjection/ directory, which I believe indicates Symfony bundles, that's 6780 of them.
- 4% have a bin/ directory, including some sort of CLI executables.
- 3.6% have a examples/ and 3.5% a docs/ directory, not a whole lot of extensive out-of-README documentation out there it seems. Definitely something that could be improved.
 
### Common Files

- 55% have a LICENSE file, that's.. pretty disastrous but hopefully a lot of those that don't at least indicate in the README and composer.json
- 49% have some file or directory indicating the presence of tests (phpunit.xml &amp; co). I am not sure if this is good or bad news to be honest, that depends on your expectations.
- 35% show a presence of a CI system running their tests (.travis.yml &amp; co)
- 14% have committed their composer.lock. As I have said in the past for libraries it is not really necessary to commit it, and it seems most prefer not to. I hope you commit it in your private projects though!
- 9% have a CHANGELOG, and that is composed of 8.5% CHANGELOG and 0.5% CHANGES, so there goes my answer for Paul ;)
- 8% show a presence of some code quality/style CI (scrutinizer, codeclimate, styleci). That's not a lot but some might be running thoes tools as part of their regular CI so the numbers are not necessarily valid.
 
If you would like to access the full data to look at other numbers, you can get [a readable version](https://gist.githubusercontent.com/Seldaek/27a141c7e21f1a1e816461b97c199930/raw/9206f938b3256b5174cf4cef7c8017adf7faa4bf/results.txt) of the top 100 dirs and top 100 files plus a [file containing the whole data set](https://gist.githubusercontent.com/Seldaek/27a141c7e21f1a1e816461b97c199930/raw/9206f938b3256b5174cf4cef7c8017adf7faa4bf/results.php) with file name =&gt; package counts.