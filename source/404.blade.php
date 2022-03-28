---
permalink: 404.html
---
@extends('_layouts.main')

@php
    $page->type = '404';
@endphp

@section('body')
    <div class="flex flex-col items-center mt-32">
        <p><img src="/assets/images/under-construction.gif" /></p>

        <h1 class="text-3xl">Page not found.</h1>

        <hr class="block w-full max-w-sm mx-auto border my-8">

        <p class="text-xl">
            This is not the page you are looking for.
        </p>
    </div>
@endsection
