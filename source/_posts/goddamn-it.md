---
extends: _layouts.post
section: content
title: "Goddamn it."
date: 2016-05-31 17:37:52
description: "It's not often that one fucks up really bad. But today is my day apparently. TL;DR: I accidentally wiped a github organization that had a few popular repos on it. How the hell did this happen? I was trying to remove a private repository, called nelmio, which incidentally has the same name as the organization it was in, so nelmio/nelmio. Then this h..."
featured: false
categories: [news]
---
It's not often that one messes up really bad. But today is my day apparently.

TL;DR: I accidentally wiped a github organization that had a few popular repos on it. But it's all fixed now.

How the heck did this happen?
-----------------------------

I was trying to remove a private repository, called nelmio, which incidentally has the same name as the organization it was in, so nelmio/nelmio. Then this happened:

- I wanted to check repo permissions so I went to https://github.com/nelmio/nelmio/settings/collaboration then followed a team link which led to https://github.com/orgs/nelmio/teams/foo
- Then I was like OK let's go back in the settings tab to delete this repo, except at this point the settings tab points to https://github.com/organizations/nelmio/settings/profile (i.e. the org settings not the repo)
- So at the end of the settings tab I see the familiar red delete button, hit it, it tells me to type the repo name (nelmio) as usual, but obviously I've done this many times so I don't read the fine print. It turns out in this case it wanted me to confirm the org name and not repo name.
- As I click "Confirm Delete" I saw that something in the message wasn't quite familiar, but then it reloaded the page and I find myself on the github home. I'm like "That's odd!", then more or less 2 seconds later this horrible feeling in my guts is confirmed, the entire org was wiped.
 
Mitigation
----------

I immediately emailed GitHub support, and am still waiting for an answer. I kinda wish there was a hotline for such cases, even if it was billed 10 bucks a minute :)

After doing so, I started re-pushing repos into a new organization ([nelmiobackup](https://github.com/nelmiobackup)). I then changed the packagist.org package URLs to point to this new org, so that at least package installs should continue working relatively normally for the time being.

I did not want to re-create a nelmio org as I thought this might hamper any recovery effort by the github support folks, but someone had the great idea to do that for me, so now that the potential damage is done and they added me as owner, I forked everything from nelmiobackup to nelmio so that it's present at the old URL for people doing installs using composer.lock files that point to the old URL.

I hope GitHub will be able to fix this, but if not apparently http://ghtorrent.org/ has a ton of github data. We'll see what can be done.

Updates
-------

Update1: GH support answered, it seems they can restore. I had to rename nelmio to nelmio-old for now to make room for the restore, so clones with old URLs will temporarily fail again.

Update2: All restored, I only have to re-create teams within the org, no biggie :) Total time was a bit over 1h from deletion, which isn't too bad in the grand scale of things.

P.S: If you feel like comparing this to the left-pad incident, this is quite different because I fucked up accidentally while the guy in question did it intentionally. I guess I can't stop you though.

P.P.S: If you want to laugh or say anything mean, please go away. I don't want to hear it right now. It is stressful enough as it is, and I am doing what I can.