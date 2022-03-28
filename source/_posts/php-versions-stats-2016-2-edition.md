---
extends: _layouts.post
section: content
title: "PHP Versions Stats - 2016.2 Edition"
date: 2016-11-18 10:36:35
description: "It's stats o'clock! See 2014, 2015 and 2016.1 for previous similar posts. A quick note on methodology, because all these stats are imperfect as they just sample some subset of the PHP user base. I look in the packagist.org logs of the last 28 days for Composer installs done by someone. Composer sends the PHP version it is running with in its User-A..."
featured: false
categories: [php]
---
It's stats o'clock! See [2014](https://seld.be/notes/my-view-of-php-version-adoption), [2015](https://seld.be/notes/php-versions-stats-2015-edition) and [2016.1](https://seld.be/notes/php-versions-stats-2016-1-edition) for previous similar posts.

A quick note on methodology, because all these stats are imperfect as they just sample some subset of the PHP user base. I look in the [packagist.org](https://packagist.org) logs of the last 28 days for Composer installs done by someone. Composer sends the PHP version it is running with in its `User-Agent` header, so I can use that to see which PHP versions people are using Composer with.

PHP usage statistics
--------------------

I have two datasets, from May 2016 and today, which shows the progression of various versions.

### May 2016

<table> <tr> <td style="width: 90px">All versions</td> <td></td> <td style="width: 30px"></td> <td style="width: 70px">Grouped</td> <td></td> </tr> <tr> <td>PHP 5.5.9</td> <td>11.87%</td> <td></td> <td>PHP 5.6</td> <td>39.67%</td> </tr> <tr> <td>PHP 7.0.6</td> <td>10.39%</td> <td></td> <td>PHP 5.5</td> <td>29.56%</td> </tr> <tr> <td>PHP 5.6.20</td> <td>8.41%</td> <td></td> <td>PHP 7.0</td> <td>20.24%</td> </tr> <tr> <td>PHP 5.6.21</td> <td>7.69%</td> <td></td> <td>PHP 5.4</td> <td>7.64%</td> </tr> <tr> <td>PHP 5.6.19</td> <td>4.71%</td> <td></td> <td>PHP 5.3</td> <td>2.43%</td> </tr> </table>

### November 2016

<table> <tr> <td style="width: 90px">All versions</td> <td></td> <td style="width: 30px"></td> <td style="width: 70px">Grouped</td> <td></td> </tr> <tr> <td>PHP 7.0.12</td> <td>8.58%</td> <td></td> <td>PHP 5.6</td> <td>37.46%</td> </tr> <tr> <td> PHP 5.5.9</td> <td>8.25%</td> <td></td> <td>PHP 7.0</td> <td>35.01%</td> </tr> <tr> <td>PHP 7.0.11</td> <td>7.62%</td> <td></td> <td>PHP 5.5</td> <td>18.93%</td> </tr> <tr> <td> PHP 7.0.8</td> <td>6.92%</td> <td></td> <td>PHP 5.4</td> <td>5.40%</td> </tr> <tr> <td>PHP 5.6.26</td> <td>6.12%</td> <td></td> <td>PHP 5.3</td> <td>1.60%</td> </tr> <tr> <td>PHP 5.6.27</td> <td>4.49%</td> <td></td> <td>PHP 7.1</td> <td>1.36%</td> </tr> </table>

![](//seld.be/images/composer-2016-02.png)

A few observations: 5.3 and 5.4 at this point are gone as far as I am concerned! 5.5 still has a good presence but lost 12% in 6 months which is awesome. 5.6 basically stayed stable as I suspect people jumped from 5.5 to 7 directly probably when upgrading Ubuntu LTS. 7.0 gained 15% and is now close to being the most deployed version, 1 year after release! That should definitely encourage more libraries to require it IMO, and I hope it is good encouragement to PHP internals folks as well to see that people actually upgrade these days :) Interestingly 7.1 is almost passing 5.3 already and it isn't even released. That is probably coming from CI installs mostly but for example I already run 7.1 on my local dev environment and I hope others do too.

PHP requirements in Packages
----------------------------

The second dataset is which versions are required by all the PHP packages present on packagist. I only check the require statement in their current master version to see what the latest is.

### PHP Requirements - Current Master - November 2016 (+/- diff from May 2016)

<table> <tbody><tr> <td style="width: 40px">5.2</td> <td>2.35% (-0.16)</td> </tr> <tr> <td>5.3</td> <td>41.25% (-4.01)</td> </tr> <tr> <td>5.4</td> <td>30.12% (-1.57)</td> </tr> <tr> <td>5.5</td> <td>16.98% (+1.5)</td> </tr> <tr> <td>5.6</td> <td>6.22% (+2.7)</td> </tr> <tr> <td>7.0</td> <td>3.08% (+1.54)</td> </tr> </tbody></table>

A few observations: I don't know how else to say this but PEOPLE COME ON! This is moving waaaay slower than people are migrating their servers, and it doesn't make any sense to me. I guess there are a lot of projects out there that are somewhat stale or stable and not really changing and that makes sense, but if you still maintain a library, don't hesitate to require 7 and bump the major release at this point. You will have more fun using all the cool features of the language instead of being stuck writing `array()`.

As I wrote in the last update: I would like to encourage everyone to be a bit more aggressive in bumping PHP requirements when tagging new major releases of their libs. Don't forget that the old code does not go away, it's still there to be used by people using legacy PHP versions.

However it seems that a lot of people here do not read and just look at the pictures, so allow me to illustrate this last point.

![](//seld.be/images/update-reqs.png)