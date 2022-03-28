---
extends: _layouts.post
section: content
title: "PHP Versions Stats - 2017.2 Edition"
date: 2017-11-13 10:34:37
description: "It's stats o'clock! See 2014, 2015, 2016.1, 2016.2 and 2017.1for previous similar posts. A quick note on methodology, because all these stats are imperfect as they just sample some subset of the PHP user base. I look in the packagist.org logs of the last month for Composer installs done by someone. Composer sends the PHP version it is running with ..."
featured: true
categories: [news, php]
---
It's stats o'clock! See [2014](https://seld.be/notes/my-view-of-php-version-adoption), [2015](https://seld.be/notes/php-versions-stats-2015-edition), [2016.1](https://seld.be/notes/php-versions-stats-2016-1-edition), [2016.2](https://seld.be/notes/php-versions-stats-2016-2-edition) and [2017.1](https://seld.be/notes/php-versions-stats-2017-1-edition) for previous similar posts.

A quick note on methodology, because all these stats are imperfect as they just sample some subset of the PHP user base. I look in the [packagist.org](https://packagist.org) logs of the last month for Composer installs done by someone. Composer sends the PHP version it is running with in its `User-Agent` header, so I can use that to see which PHP versions people are using Composer with.

PHP usage statistics
--------------------

### November 2017 (+/- diff from May 2017)

<table> <tr> <td style="width: 90px">All versions</td> <td></td> <td style="width: 40px"></td> <td style="width: 70px">Grouped</td> <td style="width: 120px"></td> </tr> <tr> <td>PHP 7.1.10</td> <td>11.63%</td> <td></td> <td>PHP 7.1</td> <td>36.63% (+18.99)</td> <td style="display: inline-block; height:9px; background: #8e8ef5; width: 74px"></td> </tr> <tr> <td>PHP 7.0.22</td> <td>7.95%</td> <td></td> <td>PHP 7.0</td> <td>30.76% (-5.36)</td> <td style="display: inline-block; height:9px; background: #8e8ef5; width: 62px"></td> </tr> <tr> <td>PHP 5.6.31</td> <td>7.38%</td> <td></td> <td>PHP 5.6</td> <td>23.28% (-8.16)</td> <td style="display: inline-block; height:9px; background: #8e8ef5; width: 47px"></td> </tr> <tr> <td>PHP 5.6.30</td> <td>7.23%</td> <td></td> <td>PHP 5.5</td> <td>6.11% (-4.5)</td> <td style="display: inline-block; height:9px; background: #8e8ef5; width: 13px"></td> </tr> <tr> <td>PHP 7.0.24</td> <td>5.45%</td> <td></td> <td>PHP 5.4</td> <td>1.51% (-1.6)</td> <td style="display: inline-block; height:9px; background: #8e8ef5; width: 4px"></td> </tr> <tr> <td>PHP 7.1.11</td> <td>4.55%</td> <td></td> <td>PHP 5.3</td> <td>0.76% (-0.22)</td> <td style="display: inline-block; height:9px; background: #8e8ef5; width: 2px"></td> </tr> </table>

![](//seld.be/images/composer-2017-02.png)

A few observations: I find it quite incredible that PHP 7.1 is now the most used version, even though Ubuntu LTS does not yet ship with it. I don't know if it means people use Docker or alternative PPAs but regardless it is good news! For the first time since I started these blog posts, the version usage actually matches the order in which they were released, with the older ones having less and less usage. That's also great news. We have a total of 90% of installs done on PHP versions that are still maintained, which is awesome. If you are still on 5.6 or 7.0 though you only have one year of security fixes left so consider upgrading to 7.2 which should come out in the next week or two.

Here is the aggregate chart covering all my blog posts and the last four years.

![](//seld.be/images/composer-graph-2017-02.png)

PHP requirements in Packages
----------------------------

The second dataset is which versions are required by the PHP packages present on packagist. I only check the require statement in their current master version to see what the latest requirement is, and the dataset only includes packages that had commits in the last year to exclude all EOL'd projects as they don't update their requirements.

### PHP Requirements - Recent Master - November 2017 (+/- diff from Recent Master May 2017)

<table> <tbody> <tr><td style="width: 40px">5.2</td><td style="width: 120px">1.28% (-0.24)</td><td style="display: inline-block; height:9px; background: #8e8ef5; width: 3px"></td></tr> <tr><td>5.3</td><td>18.75% (-4.4)</td><td style="display: inline-block; height:9px; background: #8e8ef5; width: 38px"></td></tr> <tr><td>5.4</td><td>20.29% (-4.12)</td><td style="display: inline-block; height:9px; background: #8e8ef5; width: 41px"></td></tr> <tr><td>5.5</td><td>19.07% (-4.63)</td><td style="display: inline-block; height:9px; background: #8e8ef5; width: 39px"></td></tr> <tr><td>5.6</td><td>20.4% (3.59)</td><td style="display: inline-block; height:9px; background: #8e8ef5; width: 41px"></td></tr> <tr><td>7.0</td><td>14.85% (6.12)</td><td style="display: inline-block; height:9px; background: #8e8ef5; width: 30px"></td></tr> <tr><td>7.1</td><td>5.32% (3.65)</td><td style="display: inline-block; height:9px; background: #8e8ef5; width: 11px"></td></tr> <tr><td>7.2</td><td>0.03% (0.03)</td><td style="display: inline-block; height:9px; background: #8e8ef5; width: 1px"></td></tr> </tbody></table>

This moves at a decent pace with EOL'd versions slowly being abandoned. I still think it could go faster though ;) Please consider bumping to PHP 7.0 at the very least when you update your libraries.