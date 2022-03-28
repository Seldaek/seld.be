---
extends: _layouts.post
section: content
title: "My view of PHP version adoption"
date: 2014-11-14 16:00:00
description: "PHP 5.3 has been out of maintenance for about three months now and it seems like it's time for the community to move on at last. Drupal8 will target 5.4. Symfony announced the results of a poll about which PHP version Symfony3 should target. And Pascal Martin released today an update on his PHP usage stats based on scanning server headers...."
featured: false
categories: [news, php]
---
PHP 5.3 has been out of maintenance for about three months now and it seems like it's time for the community to move on at last. Drupal8 will target 5.4. Symfony [announced the results](http://symfony.com/blog/symfony-3-0-the-roadmap) of a poll about which PHP version Symfony3 should target (TL;DR: 5.5 and 5.6 are preferred). And Pascal Martin released yesterday an update on his [PHP usage stats](http://blog.pascal-martin.fr/post/php-versions-stats-2014-10-en) based on scanning server headers.

Pascal's number are interesting but I believe they have a bias towards older PHP versions. I would argue that people configuring their servers properly are also those that tend to keep up to date with newer versions, and part of the best practices is to avoid publishing the software versions you are using (i.e. disable expose\_php in php.ini). If I am correct here that means early adopters are mis-represented in those numbers.

In any case, I do have another biased dataset to present so here it comes! I looked in the [packagist.org](https://packagist.org) logs of the last fifty days for `GET /packages.json` which represents a composer update done by someone. Since Composer sends the PHP version it is running with in its `User-Agent` header, I can use that to see which PHP versions people are using Composer with. Of course this data set is probably biased towards development machine and CI servers and as such it should also be taken with a grain of salt.

PHP usage statistics
--------------------

I have two datasets, from November 2013 and today, which shows the progression of various versions. Any version below 3% usage has been removed to keep things readable.

### November 2013

<table> <tr> <td style="width: 90px">All versions</td> <td></td> <td></td> <td style="width: 30px"></td> <td style="width: 70px">Grouped</td> <td></td> <td></td> </tr> <tr> <td>Total</td> <td>4112760 </td> <td>100.00%</td> <td></td> <td>Total</td> <td>4112760 </td> <td>100.00%</td> </tr> <tr> <td>PHP 5.3.10</td> <td>490350</td> <td>11.92%</td> <td></td> <td>PHP 5.4</td> <td>2069021</td> <td>50.31%</td> </tr> <tr> <td>PHP 5.3.3</td> <td>419871</td> <td>10.21%</td> <td></td> <td>PHP 5.3</td> <td>1533073</td> <td>37.28%</td> </tr> <tr> <td>PHP 5.4.20</td> <td>387450</td> <td>9.42%</td> <td></td> <td>PHP 5.5</td> <td>510596</td> <td>12.41%</td> </tr> <tr> <td>PHP 5.4.4</td> <td>274741</td> <td>6.68%</td> <td></td> <td></td> <td></td> <td></td> </tr> <tr> <td>PHP 5.4.9</td> <td>198343</td> <td>4.82%</td> <td></td> <td></td> <td></td> <td></td> </tr> <tr> <td>PHP 5.4.16</td> <td>180150</td> <td>4.38%</td> <td></td> <td></td> <td></td> <td></td> </tr> <tr> <td>PHP 5.4.19</td> <td>167416</td> <td>4.07%</td> <td></td> <td></td> <td></td> <td></td> </tr> <tr> <td>PHP 5.5.3</td> <td>166317</td> <td>4.04%</td> <td></td> <td></td> <td></td> <td></td> </tr> <tr> <td>PHP 5.4.17</td> <td>160754</td> <td>3.91%</td> <td></td> <td></td> <td></td> <td></td> </tr> <tr> <td>PHP 5.4.21</td> <td>144939</td> <td>3.52%</td> <td></td> <td></td> <td></td> <td></td> </tr> <tr> <td>PHP 5.3.26</td> <td>131497</td> <td>3.20%</td> <td></td> <td></td> <td></td> <td></td> </tr> </table>

### November 2014

<table> <tr> <td style="width: 90px">All versions</td> <td></td> <td></td> <td style="width: 30px"></td> <td style="width: 70px">Grouped</td> <td></td> <td></td> </tr> <tr> <td>Total</td> <td>11556916 </td> <td>100.00%</td> <td></td> <td>Total</td> <td>11556916 </td> <td>100.00%</td> </tr> <tr> <td>PHP 5.5.9</td> <td>2475970</td> <td>21.42%</td> <td></td> <td>PHP 5.5</td> <td>5647892</td> <td>48.87%</td> </tr> <tr> <td>PHP 5.4.4</td> <td>1022498</td> <td>8.85%</td> <td></td> <td>PHP 5.4</td> <td>3305929</td> <td>28.61%</td> </tr> <tr> <td>PHP 5.5.17</td> <td>678997</td> <td>5.88%</td> <td></td> <td>PHP 5.3</td> <td>1716653</td> <td>14.85%</td> </tr> <tr> <td>PHP 5.5.16</td> <td>529227</td> <td>4.58%</td> <td></td> <td>PHP 5.6</td> <td>886260</td> <td>7.67%</td> </tr> <tr> <td>PHP 5.3.3</td> <td>509101</td> <td>4.41%</td> <td></td> <td></td> <td></td> <td></td> </tr> <tr> <td>PHP 5.3.10</td> <td>479750</td> <td>4.15%</td> <td></td> <td></td> <td></td> <td></td> </tr> <tr> <td>PHP 5.6.0</td> <td>391633</td> <td>3.39%</td> <td></td> <td></td> <td></td> <td></td> </tr> </table>

A few observations: 5.3 really is on the way out, 5.5 is now the major platform, 5.6 adoption is lagging behind last year's 5.5 adoption a little bit which is unfortunate but can perhaps be explained by the fact Ubuntu 14.04 ships with 5.5.9

PHP requirements in Packages
----------------------------

A second dataset I looked at is which versions are required by all the PHP packages present on packagist. I split it in two groups: those that required a given version **at any point** and those that require it in their **current master version**.

### PHP Requirements - Anytime - November 2014

<table> <tbody><tr> <td style="width: 40px">5.2</td> <td style="width: 45px">1204</td> <td>4.23%</td> </tr> <tr> <td>5.3</td> <td>20780</td> <td>72.94%</td> </tr> <tr> <td>5.4</td> <td>7953</td> <td>27.92%</td> </tr> <tr> <td>5.5</td> <td>641</td> <td>2.25%</td> </tr> <tr> <td>5.6</td> <td>44</td> <td>0.15%</td> </tr> </tbody></table>

### PHP Requirements - Current Master - November 2014

<table> <tbody><tr> <td style="width: 40px">5.2</td> <td style="width: 45px">1019</td> <td>3.58%</td> </tr> <tr> <td>5.3</td> <td>19334</td> <td>67.86%</td> </tr> <tr> <td>5.4</td> <td>7523</td> <td>26.41%</td> </tr> <tr> <td>5.5</td> <td>573</td> <td>2.01%</td> </tr> <tr> <td>5.6</td> <td>41</td> <td>0.14%</td> </tr> </tbody></table>

A few observations: almost 7% of packages that required 5.3 and 15% of those requiring 5.2 gave these up for higher requirements, that's pretty low but it's a start. 5.4 is getting a good foothold but 5.5/5.6 features are hardly used by OSS packages.

Conclusions
-----------

Again these numbers need to be taken with a grain of salt, but looking at the ecosystem from this perspective I would say PHP 5.3 can be safely dropped by most libraries and 5.5 sounds like a promising target!