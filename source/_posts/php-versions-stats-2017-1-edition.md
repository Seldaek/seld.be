---
extends: _layouts.post
section: content
title: "PHP Versions Stats - 2017.1 Edition"
date: 2017-05-07 18:00:00
description: "It's stats o'clock! See 2014, 2015, 2016.1 and 2016.2 for previous similar posts. A quick note on methodology, because all these stats are imperfect as they just sample some subset of the PHP user base. I look in the packagist.org logs of the last month for Composer installs done by someone. Composer sends the PHP version it is running with in its ..."
featured: false
categories: [news, php]
---
It's stats o'clock! See [2014](https://seld.be/notes/my-view-of-php-version-adoption), [2015](https://seld.be/notes/php-versions-stats-2015-edition), [2016.1](https://seld.be/notes/php-versions-stats-2016-1-edition) and [2016.2](https://seld.be/notes/php-versions-stats-2016-2-edition) for previous similar posts.

A quick note on methodology, because all these stats are imperfect as they just sample some subset of the PHP user base. I look in the [packagist.org](https://packagist.org) logs of the last month for Composer installs done by someone. Composer sends the PHP version it is running with in its `User-Agent` header, so I can use that to see which PHP versions people are using Composer with.

PHP usage statistics
--------------------

### May 2017 (+/- diff from November 2016)

<table> <tr> <td style="width: 90px">All versions</td> <td></td> <td style="width: 30px"></td> <td style="width: 70px">Grouped</td> <td></td> </tr> <tr> <td>PHP 5.6.30</td> <td>14.73%</td> <td></td> <td>PHP 7.0</td> <td>36.12% (+1.11)</td> </tr> <tr> <td>PHP 7.0.15</td> <td>9.53%</td> <td></td> <td>PHP 5.6</td> <td>31.44% (-6.02)</td> </tr> <tr> <td>PHP 5.5.9</td> <td>6.12%</td> <td></td> <td>PHP 7.1</td> <td>17.64% (+16.28)</td> </tr> <tr> <td>PHP 7.0.17</td> <td>6.00%</td> <td></td> <td>PHP 5.5</td> <td>10.61% (-8.32)</td> </tr> <tr> <td>PHP 7.1.3</td> <td>5.88%</td> <td></td> <td>PHP 5.4</td> <td>3.11% (-2.29)</td> </tr> <tr> <td>PHP 7.1.4</td> <td>3.65%</td> <td></td> <td>PHP 5.3</td> <td>0.98% (-0.62)</td> </tr> </table>

![](//seld.be/images/composer-2017-01.png?v2)

A few observations: With a big boost of PHP 7.1 installs, PHP 7 overall now represents over 50%. 5.3/5.4 are really tiny and even 5.5 is dropping significantly which is good as it is not maintained anymore since last summer. That's a total of 85% of installs done on supported versions, which is pretty good.

And because a few people have asked me this recently, while HHVM usage is not included above in the graph it is at 0.36% which is a third of PHP 5.3 usage and really hardly significant. I personally think it's fine to support it still in libraries if it just works, or if the fixes involved are minor. If not then it's probably not worth the time investment.

Also.. since I now have quite a bit of data accumulated and the pie chart format is kind of crappy to see the evolution, here is a new chart which shows the full historical dataset!

![](//seld.be/images/composer-graph-2017-01.png?v2)

It is pretty interesting I think as it shows that 5.3/5.4/5.5 had people slowly migrating in bunches and the versions peaked at ~50% of the user base. On the other hand 5.6/7.0/7.1 peak around 35% which seems to indicate people are moving on faster to new versions. This is quite encouraging!

PHP requirements in Packages
----------------------------

The second dataset is which versions are required by all the PHP packages present on packagist. I only check the require statement in their current master version to see what the latest is.

### PHP Requirements - Current Master - May 2017 (+/- diff from November 2016)

<table> <tbody> <tr><td style="width: 40px">5.2</td><td>2.13% (-0.22)</td></tr> <tr><td>5.3</td><td>37.6% (-3.65)</td></tr> <tr><td>5.4</td><td>28.38% (-1.74)</td></tr> <tr><td>5.5</td><td>17.11% (+0.13)</td></tr> <tr><td>5.6</td><td>9.37% (+3.15)</td></tr> <tr><td>7.0</td><td>4.61% (+1.53)</td></tr> <tr><td>7.1</td><td>0.81% (+0.81)</td></tr> </tbody></table>

A few observations: This is as usual moving pretty slowly. I think I can give up trying to advise for change, it doesn't seem to be working.. On the other hand it looks like Symfony is going to use 7.0 or 7.1 for it's v4 to come out later this year, so hopefully that will shake things up a bit and make more libraries also realize they can bump to PHP 7.

### PHP Requirements - Recent Master - May 2017 (+/- diff from Current Master November 2016)

In response to Nikita's comment below I ran the requirements numbers for packages that had some sort of commit activity over the last year. This excludes all stale/done packages and looks much more encouraging, but the difference points are probably overly large because they compare to the old numbers which included everything, therefore take those with a pinch of salt, and in the next six months update I'll have more trusty numbers.

<table> <tbody> <tr><td style="width: 40px">5.2</td><td>1.52% (-0.83)</td></tr> <tr><td>5.3</td><td>23.15% (-18.1)</td></tr> <tr><td>5.4</td><td>24.41% (-5.71)</td></tr> <tr><td>5.5</td><td>23.7% (+6.72)</td></tr> <tr><td>5.6</td><td>16.81% (+10.59)</td></tr> <tr><td>7.0</td><td>8.73% (+5.65)</td></tr> <tr><td>7.1</td><td>1.67% (+1.67)</td></tr> </tbody></table>