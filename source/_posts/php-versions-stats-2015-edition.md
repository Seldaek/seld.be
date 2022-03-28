---
extends: _layouts.post
section: content
title: "PHP Versions Stats - 2015 Edition"
date: 2015-11-23 13:09:18
description: "It's that time of the year again, where I figure it's time to update my yearly data on PHP version usage. Last year's post showed 5.5 as the main winner and 5.3 declining rapidly. Let's see what 2015 brought. A quick note on methodology, because all these stats are imperfect as they just sample some subset of the PHP user base. I look in the packag..."
featured: false
categories: [php]
---
It's that time of the year again, where I figure it's time to update my yearly data on PHP version usage. [Last year's post](http://seld.be/notes/my-view-of-php-version-adoption) showed 5.5 as the main winner and 5.3 declining rapidly. Let's see what 2015 brought.

A quick note on methodology, because all these stats are imperfect as they just sample some subset of the PHP user base. I look in the [packagist.org](https://packagist.org) logs of the last 28 days for `GET /packages.json` which represents a composer update done by someone. Composer sends the PHP version it is running with in its `User-Agent` header, so I can use that to see which PHP versions people are using Composer with. Of course this data set is probably biased towards development machines and CI servers and as such it should also be taken with a grain of salt.

PHP usage statistics
--------------------

I have two datasets, from November 2014 and today, which shows the progression of various versions. Any version below 3% usage has been removed to keep things readable.

### November 2014

<table> <tr> <td style="width: 90px">All versions</td> <td></td> <td></td> <td style="width: 30px"></td> <td style="width: 70px">Grouped</td> <td></td> <td></td> </tr> <tr> <td>Total</td> <td>11556916 </td> <td>100.00%</td> <td></td> <td>Total</td> <td>11556916 </td> <td>100.00%</td> </tr> <tr> <td>PHP 5.5.9</td> <td>2475970</td> <td>21.42%</td> <td></td> <td>PHP 5.5</td> <td>5647892</td> <td>48.87%</td> </tr> <tr> <td>PHP 5.4.4</td> <td>1022498</td> <td>8.85%</td> <td></td> <td>PHP 5.4</td> <td>3305929</td> <td>28.61%</td> </tr> <tr> <td>PHP 5.5.17</td> <td>678997</td> <td>5.88%</td> <td></td> <td>PHP 5.3</td> <td>1716653</td> <td>14.85%</td> </tr> <tr> <td>PHP 5.5.16</td> <td>529227</td> <td>4.58%</td> <td></td> <td>PHP 5.6</td> <td>886260</td> <td>7.67%</td> </tr> <tr> <td>PHP 5.3.3</td> <td>509101</td> <td>4.41%</td> <td></td> <td></td> <td></td> <td></td> </tr> <tr> <td>PHP 5.3.10</td> <td>479750</td> <td>4.15%</td> <td></td> <td></td> <td></td> <td></td> </tr> <tr> <td>PHP 5.6.0</td> <td>391633</td> <td>3.39%</td> <td></td> <td></td> <td></td> <td></td> </tr> </table>

### November 2015

<table> <tr> <td style="width: 90px">All versions</td> <td></td> <td></td> <td style="width: 30px"></td> <td style="width: 70px">Grouped</td> <td></td> <td></td> </tr> <tr> <td>Total</td> <td>14539303 </td> <td>100.00%</td> <td></td> <td>Total</td> <td>14539303 </td> <td>100.00%</td> </tr> <tr> <td>PHP 5.5.9</td> <td>4307667</td> <td>29.63%</td> <td></td> <td>PHP 5.5</td> <td>7368033</td> <td>50.68%</td> </tr> <tr> <td>PHP 5.6.14</td> <td>818735</td> <td>5.63%</td> <td></td> <td>PHP 5.6</td> <td>3211919</td> <td>22.09%</td> </tr> <tr> <td>PHP 5.3.3</td> <td>669327</td> <td>4.60%</td> <td></td> <td>PHP 5.4</td> <td>2305984</td> <td>15.86%</td> </tr> <tr> <td>PHP 5.4.45</td> <td>573003</td> <td>3.94%</td> <td></td> <td>PHP 5.3</td> <td>1439061</td> <td>9.90%</td> </tr> <tr> <td>PHP 5.6.13</td> <td>492995</td> <td>3.39%</td> <td></td> <td>PHP 7.0</td> <td>169411</td> <td>1.17%</td> </tr> </table>

And here are pretty pies thanks to [Ashley Hindle](https://twitter.com/ashleyhindle/status/668807906972860416) ![](//seld.be/images/composer-2015.png)

A few observations: 5.3 lost 5% which is good but now I guess we are on a long tail decline of Ubuntu 12.04 machines, plus a lot of libs still test against it on Travis which might bias the numbers a bit. 5.5 is still the major platform with a stable 50%, and 5.6 adoption gained 15% that were lost by 5.4. We also see 7.0 appearing slowly, mostly I assume from travis builds again.

PHP requirements in Packages
----------------------------

The second dataset is which versions are required by all the PHP packages present on packagist. I only check the require statement in their current master version to see what the latest is.

### PHP Requirements - Current Master - November 2015 (+/- diff from November 2014)

<table> <tbody><tr> <td style="width: 40px">5.2</td> <td style="width: 45px">1367</td> <td>2.78% (-0.8%)</td> </tr> <tr> <td>5.3</td> <td>25376</td> <td>51.69% (-16.17%)</td> </tr> <tr> <td>5.4</td> <td>16418</td> <td>33.45% (+7.04%)</td> </tr> <tr> <td>5.5</td> <td>5002</td> <td>10.19% (+8.18%)</td> </tr> <tr> <td>5.6</td> <td>826</td> <td>1.68% (+1.54%)</td> </tr> <tr> <td>7.0</td> <td>99</td> <td>0.2% (+0.2%)</td> </tr> </tbody></table>

A few observations: 5.3 lost quite a bit of ground but it seems to go to both 5.4 and 5.5. Given that 5.4 usage is going down quite a bit I think it's safe to go from 5.3 to 5.5 directly if you are going to bump the version requirement, or I'd even argue for 5.6 as it's usage is going up quite strongly and Ubuntu 16.04 should help that as well.

I think php 7 should be required more as well as it comes with quite a few nifty features, I would say it is a good target for a new major version of any lib, but more on that in another post.