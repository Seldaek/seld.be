---
extends: _layouts.post
section: content
title: "PHP Versions Stats - 2018.1 Edition"
date: 2018-05-15 12:00:00
description: "It's stats o'clock! See 2014, 2015, 2016.1, 2016.2, 2017.1 and 2017.2 for previous similar posts. A quick note on methodology, because all these stats are imperfect as they just sample some subset of the PHP user base. I look in the packagist.org logs of the last month for Composer installs done by someone. Composer sends the PHP version it is runn..."
featured: true
categories: [news, php]
---
It's stats o'clock! See [2014](https://seld.be/notes/my-view-of-php-version-adoption), [2015](https://seld.be/notes/php-versions-stats-2015-edition), [2016.1](https://seld.be/notes/php-versions-stats-2016-1-edition), [2016.2](https://seld.be/notes/php-versions-stats-2016-2-edition), [2017.1](https://seld.be/notes/php-versions-stats-2017-1-edition) and [2017.2](https://seld.be/notes/php-versions-stats-2017-2-edition) for previous similar posts.

A quick note on methodology, because all these stats are imperfect as they just sample some subset of the PHP user base. I look in the [packagist.org](https://packagist.org) logs of the last month for Composer installs done by someone. Composer sends the PHP version it is running with in its `User-Agent` header, so I can use that to see which PHP versions people are using Composer with.

PHP usage statistics
--------------------

### May 2018 (+/- diff from November 2017)

<table> <tr> <td style="width: 90px">All versions</td> <td></td> <td style="width: 40px"></td> <td style="width: 70px">Grouped</td> <td style="width: 120px"></td> </tr> <tr> <td>PHP 7.2.4</td> <td>7.54%</td> <td></td> <td>PHP 7.1</td> <td>35.02% (-1.61)</td> <td style="display: inline-block; height:9px; background: #8e8ef5; width: 70px"></td> </tr> <tr> <td>PHP 7.1.16</td> <td>7.41%</td> <td></td> <td>PHP 7.0</td> <td>23.02% (-7.74)</td> <td style="display: inline-block; height:9px; background: #8e8ef5; width: 46px"></td> </tr> <tr> <td>PHP 7.0.28</td> <td>5.54%</td> <td></td> <td>PHP 7.2</td> <td>20.18% (+20.18)</td> <td style="display: inline-block; height:9px; background: #8e8ef5; width: 40px"></td> </tr> <tr> <td>PHP 7.1.15</td> <td>4.11%</td> <td></td> <td>PHP 5.6</td> <td>16.48% (-6.8)</td> <td style="display: inline-block; height:9px; background: #8e8ef5; width: 33px"></td> </tr> <tr> <td>PHP 7.2.3</td> <td>3.85%</td> <td></td> <td>PHP 5.5</td> <td>3.50% (-2.61)</td> <td style="display: inline-block; height:9px; background: #8e8ef5; width: 7px"></td> </tr> <tr> <td>PHP 7.1.14</td> <td>3.79%</td> <td></td> <td>PHP 5.4</td> <td>1.04% (-0.47)</td> <td style="display: inline-block; height:9px; background: #8e8ef5; width: 2px"></td> </tr> </table>

![](//seld.be/images/composer-2018-01.png)

A few observations: PHP 7.1 is still on top but 7.2 is closing real quick with already 1/5th of users having upgraded. That's the biggest growth rate for a newly released version since I have started collecting those stats. Ubuntu 18.04 LTS ships with 7.2 so this number will likely grow even more in the coming months. 78% of people used PHP 7+ and almost 95% were using a PHP version that is still maintained, it sounds too good to be true. PHP 5.6 and 7.0 will reach [end of life by late 2018](http://php.net/supported-versions.php) though so that's 40% of users who are in need of an upgrade if we want to keep these numbers up!

Here is the aggregate chart covering all my blog posts and the last five years.

![](//seld.be/images/composer-graph-2018-01.png)

PHP requirements in Packages
----------------------------

The second dataset is which versions are required by the PHP packages present on packagist. I only check the require statement in their current master version to see what the latest requirement is, and the dataset only includes packages that had commits in the last year to exclude all EOL'd projects as they don't update their requirements.

### PHP Requirements - Recent Master - May 2018 (+/- diff from Recent Master November 2017)

<table> <tbody> <tr><td style="width: 40px">5.2</td><td style="width: 120px">1.16% (-0.12)</td><td style="display: inline-block; height:9px; background: #8e8ef5; width: 3px"></td></tr> <tr><td>5.3</td><td>15.9% (-2.85)</td><td style="display: inline-block; height:9px; background: #8e8ef5; width: 32px"></td></tr> <tr><td>5.4</td><td>16.59% (-3.7)</td><td style="display: inline-block; height:9px; background: #8e8ef5; width: 34px"></td></tr> <tr><td>5.5</td><td>15.52% (-3.55)</td><td style="display: inline-block; height:9px; background: #8e8ef5; width: 32px"></td></tr> <tr><td>5.6</td><td>19.57% (-0.83)</td><td style="display: inline-block; height:9px; background: #8e8ef5; width: 40px"></td></tr> <tr><td>7.0</td><td>19.47% (4.62)</td><td style="display: inline-block; height:9px; background: #8e8ef5; width: 39px"></td></tr> <tr><td>7.1</td><td>11.15% (5.83)</td><td style="display: inline-block; height:9px; background: #8e8ef5; width: 23px"></td></tr> <tr><td>7.2</td><td>0.64% (0.61)</td><td style="display: inline-block; height:9px; background: #8e8ef5; width: 2px"></td></tr> </tbody></table>

This is as usual lagging behind a little but PHP 7 is finally seeing some real adoption in the OSS world which is nice.