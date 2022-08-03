---
extends: _layouts.post
section: content
title: "Narrowing types for static analysis"
date: 2022-08-03 14:30:00
description: "Lessons learned migrating big old codebases to strict PHPStan configs"
featured: false
categories: [php]
---
I have spent the last year moving a few big old codebases, including Composer, to PHPStan's level 8. Here are a few lessons I think I have learned in the process.

### Baseline + strict static analysis is the way to go

I was for a while skeptical about using the baseline feature as it seemed to me like shoving all type errors under the rug, never to be looked at again. 

I still believe there is some truth to this, and going back and fixing things does take a conscious effort. Yet after having gone full strict (level 8 + phpstan-strict-rules + phpstan-deprecation-rules at least) on a few projects I think it is well worth it.

It lets you move much quicker to a point where all new code is at least checked strictly for errors, so you can stop piling up technical debt **right now**. As such I would highly recommend using a baseline to increase strictness.

### Fix essential types as soon as possible

The main struggle with a strict config + baseline approach is if you have deeply broken types in PHPDoc. Including nullability information for example wasn't so common 5-10 years ago. And maybe you changed data types entirely and forgot to update docblocks.

This can lead you to see many bogus error reports in static analysis when new code using these broken types is being analyzed. Every time you have to waste time figuring out whether this issue really needs fixing or not, and possibly decide to add it to the baseline as well.

Therefore spending some time fixing your most essential classes/types that are used throughout the project as early as possible makes a lot of sense and will save you time down the line. You can skip loading the baseline and analyze specific files to identify and fix issues in those areas that afford the greatest return on investment.

### Broad input types, narrow output types

Being too strict on input (param types) means you can sometimes waste the consumers' time validating things which maybe don't need to be. Of course you do want to be strict enough that you don't cause bugs so this point is definitely one for the "it depends" category.

Being too loose on output (return type) means you will definitely waste consumers' time as they have to narrow down the types again before being able to use them.

As most APIs have more consumers than implementors, defining your API boundaries to accept broad types and return narrow types saves time overall.

This is perhaps more true for open source libraries which have even more consumers, but I think it also applies more generally to every function in every application.

### Split up functions to avoid returning union types

Nullable return values is probably the most common kind of union type, and getting a `Foo|null` back is usually a huge pain as you will have to check for nullability before using it.

If possible at all it is usually better to offer multiple APIs doing the same but one of them enforcing that the returned type is `Foo`.

One concrete example of this in Composer would be the former `BaseCommand::getComposer` method, which is used throughout most commands to retrieve a `Composer\Composer` instance. However it quickly became obvious we sometimes were OK not getting an instance back, so a `bool $required = true` parameter was added, and when you set it to false it would change the return type to `Composer\Composer|null`.

This is quite a mess, and while PHPStan nowadays allows you to express the return value with `@return ($required is true ? Composer : Composer|null)` I would still not recommend doing this if you can avoid it.

The approach I took was to [split it up in two functions](https://github.com/composer/composer/blob/d1f36f43c16750e0644020c9682dc028524cdfe9/src/Composer/Command/BaseCommand.php#L87-L132), `tryComposer` (which can return null) and requireComposer (which will throw if it cannot give you a Composer instance). It allows most code to get a narrower return type and the few points where we do want to consider the null value can use `tryComposer` which mirrors the [`BackedEnum::tryFrom`](https://www.php.net/manual/en/backedenum.tryfrom.php) method to give you what you want *or null*. It also has the added benefit of leading to more readable code on the consumer side, as tryComposer hints at what it does much more than a `$required` parameter set to false.

Note that I would probably have named `requireComposer` `getComposer` if it wasn't for BC requirements here, as the method already existed with different semantics. It is now deprecated though.