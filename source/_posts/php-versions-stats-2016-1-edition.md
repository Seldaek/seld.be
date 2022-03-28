---
extends: _layouts.post
section: content
title: "PHP Versions Stats - 2016.1 Edition"
date: 2016-06-06 18:29:44
description: "Last year I posted stats about PHP versions, and the year before as well, both time in November. However this year I can't wait for November as I am curious to explore the PHP7 uptake! A quick note on methodology, because all these stats are imperfect as they just sample some subset of the PHP user base. I look in the packagist.org logs of the last..."
featured: false
categories: [php]
---
[Last year I posted](https://seld.be/notes/php-versions-stats-2015-edition) stats about PHP versions, and the year before as well, both time in November. However this year I can't wait for November as I am curious to explore the PHP7 uptake!

A quick note on methodology, because all these stats are imperfect as they just sample some subset of the PHP user base. I look in the [packagist.org](https://packagist.org) logs of the last 28 days for Composer installs done by someone. Composer sends the PHP version it is running with in its `User-Agent` header, so I can use that to see which PHP versions people are using Composer with.

PHP usage statistics
--------------------

I have two datasets, from November 2015 and today, which shows the progression of various versions. Note that the previous dataset was checking for Composer updates only, while the new one includes installs as well.

### November 2015

<table> <tr> <td style="width: 90px">All versions</td> <td></td> <td style="width: 30px"></td> <td style="width: 70px">Grouped</td> <td></td> </tr> <tr> <td>PHP 5.5.9</td> <td>29.63%</td> <td></td> <td>PHP 5.5</td> <td>50.68%</td> </tr> <tr> <td>PHP 5.6.14</td> <td>5.63%</td> <td></td> <td>PHP 5.6</td> <td>22.09%</td> </tr> <tr> <td>PHP 5.3.3</td> <td>4.60%</td> <td></td> <td>PHP 5.4</td> <td>15.86%</td> </tr> <tr> <td>PHP 5.4.45</td> <td>3.94%</td> <td></td> <td>PHP 5.3</td> <td>9.90%</td> </tr> <tr> <td>PHP 5.6.13</td> <td>3.39%</td> <td></td> <td>PHP 7.0</td> <td>1.17%</td> </tr> </table>

### May 2016

<table> <tr> <td style="width: 90px">All versions</td> <td></td> <td style="width: 30px"></td> <td style="width: 70px">Grouped</td> <td></td> </tr> <tr> <td>PHP 5.5.9</td> <td>11.87%</td> <td></td> <td>PHP 5.6</td> <td>39.67%</td> </tr> <tr> <td>PHP 7.0.6</td> <td>10.39%</td> <td></td> <td>PHP 5.5</td> <td>29.56%</td> </tr> <tr> <td>PHP 5.6.20</td> <td>8.41%</td> <td></td> <td>PHP 7.0</td> <td>20.24%</td> </tr> <tr> <td>PHP 5.6.21</td> <td>7.69%</td> <td></td> <td>PHP 5.4</td> <td>7.64%</td> </tr> <tr> <td>PHP 5.6.19</td> <td>4.71%</td> <td></td> <td>PHP 5.3</td> <td>2.43%</td> </tr> </table>

 ![](//seld.be/images/composer-2016-01.png)A few observations: 5.3 dropped to almost nothing which is great news! 5.4 is also down by almost 10% and is definitely on the way out. 5.5 is still big but less so, while 5.6 got a huge boost to become the main version. The big surprise is that we have 20% of PHP7 already! That is great news only six months after this major release came out.

PHP requirements in Packages
----------------------------

The second dataset is which versions are required by all the PHP packages present on packagist. I only check the require statement in their current master version to see what the latest is.

### PHP Requirements - Current Master - May 2016 (+/- diff from November 2015)

<table> <tbody><tr> <td style="width: 40px">5.2</td> <td>2.51% (-0.3)</td> </tr> <tr> <td>5.3</td> <td>45.26% (-6.43)</td> </tr> <tr> <td>5.4</td> <td>31.69% (-1.76)</td> </tr> <tr> <td>5.5</td> <td>15.48% (+5.29)</td> </tr> <tr> <td>5.6</td> <td>3.52% (+1.84)</td> </tr> <tr> <td>7.0</td> <td>1.54% (+1.34)</td> </tr> </tbody></table>

A few observations: 5.3/5.4 are declining slowly, 5.5 is taking the bulk of it though which makes me a bit sad :) I wish there was more love for 7 now that it shipped in Ubuntu 16.04.

All in all, it seems like package requires are way behind actual version usage, so I would like to encourage everyone to be a bit more aggressive in bumping PHP requirements when tagging new major releases of their libs. Don't forget that the old code does not go away, it's still there to be used by people using legacy PHP versions.