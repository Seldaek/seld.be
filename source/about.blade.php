---
title: About
description: A little bit about the site
---
@extends('_layouts.main')

@section('body')
    <h1>About</h1>

    <img src="/assets/img/avatar.jpg"
        alt="Jordi's head"
        class="flex rounded-full h-64 w-64 bg-contain mx-auto md:float-right my-6 md:ml-10">

    <p class="mb-6">I have been involved in web development since roughly 2000, working mostly with PHP and JavaScript, and used to do ActionScript back when it was still cool. Having delved deep into the realm of <a href="https://github.com/Seldaek">open</a> <a href="https://packagist.org/users/Seldaek/">source</a>, I am currently maintaining <a href="https://getcomposer.org">Composer</a> (the dependency manager for PHP) and <a href="https://packagist.org">Packagist.org</a> (the accompanying package registry). In parallel to all that I also try my best to lead the engineering team at <a href="https://www.teamup.com">Teamup</a>.</p>

    <p class="mb-6">Speaking of trying one's best, raising kids is a whole other level of challenge which I have the joy of tackling daily.</p>

    <p class="mb-6">My time spent on open source is sponsored by <a href="https://packagist.com">Private Packagist</a> as well as my lovely <a href="https://github.com/sponsors/Seldaek">GitHub sponsors</a>, and the odd gift from the <a href="https://seld.be/wishlist">amazon wishlist</a> which is always fun to receive.</p>
@endsection
