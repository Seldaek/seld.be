---
extends: _layouts.post
section: content
title: "Composer hosting improvements"
date: 2015-05-04 12:01:50
description: "Over the last two weekends I proceeded to upgrade the infrastructure behind packagist.org and getcomposer.org. There is now a lot more bandwidth and the DNS hosting was also migrated to DNSMadeEasy which should make it more stable on that front. All in all this should result in faster composer updates which is great! I also took the chance to do a ..."
featured: false
categories: [news, php]
---
Over the last two weekends I proceeded to upgrade the infrastructure behind [packagist.org](https://packagist.org) and [getcomposer.org](https://getcomposer.org). There is now a lot more bandwidth and the DNS hosting was also migrated to DNSMadeEasy which should make it more stable on that front.

All in all this should result in faster composer updates which is great! I also took the chance to do a few upgrades on the config, which now includes the latest PHP/nginx versions as well as [OCSP stapling](http://en.wikipedia.org/wiki/OCSP_stapling) directives. While looking at logs I also noticed the composer installer was not using gzip compression so I fixed that and now installing composer itself should be a bit faster too if you have the zip extension enabled.

While the whole change happened without packagist downtime, there were a few minor issues early last week with the composer homepage. Today I had to re-enable http (i.e. no-TLS) access to packagist.org as people are still relying on accessing it without the openssl extension. This is not great but the travis 5.3.3 builds are missing openssl so it's not realistic to require it, hopefully in a year or two when 5.3 is a thing of the past we can go full-TLS.

Also note that the GitHub hooks updating packages on packagist are also using http and not https so the hooks using the default domain (http://packagist.org - I sent them a PR to update it to https by default) were not properly updated in the last ~24hours. I am really sorry I missed that but there is not much I can do at this point except wait until next time a hook fires and those affected packages finally get updated.

Please [get in touch on github](https://github.com/composer/composer/issues) if you spot anything else out of the ordinary (except faster updates;).

And finally a quick shout-out to our sponsors, if you haven't checked [Toran Proxy](https://toranproxy.com/) out yet please do so as it allows me to pay for the hardware as well as get some time off work to focus on open source without it always being unpaid leave. Many thanks to all existing Toran customers for their support!