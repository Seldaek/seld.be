---
extends: _layouts.post
section: content
title: "Making public API surfaces changes more visible in open source libraries"
date: 2026-06-04 09:30:00
description: "..."
featured: false
categories: [php]
---
While reviewing pull requests it often happened to me that I missed a new public (or even protected) method being added. A public constant slips in. A new property with a suboptimal name or type.

This is in general not a huge deal in closed source projects, but on open source libraries it is much more problematic. Once released it becomes part of the public API surface and there is then no easy way back. Changing it, renaming or removing these becomes a backwards compatibility break.

I wanted a simple solution that just highlights these in a comment on the pull requests, so that the PR author and maintainers are made aware of changes and can tag things `@internal` if that is more appropriate. So I have made a GitHub action called [composer/api-surface-check](https://github.com/composer/api-surface-check) that does exactly this in an easy to setup and configure way.

Note: It does not do very deep BC analysis and if you want strictness you may prefer using [roave/backward-compatibility-check](https://github.com/Roave/BackwardCompatibilityCheck).

You can see an example of the output you get [on this test pull request](https://github.com/composer/composer/pull/12919).
