<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
        <meta http-equiv="x-ua-compatible" content="ie=edge">
        <meta name="description" content="{{ $page->description ?? $page->siteDescription }}">

        <meta property="og:title" content="{{ $page->title ? $page->title . ' | ' : '' }}{{ $page->siteName }}"/>
        <meta property="og:type" content="{{ $page->type ?? 'website' }}" />
        <meta property="og:url" content="{{ $page->getUrl() }}"/>
        <meta property="og:description" content="{{ $page->description ?? $page->siteDescription }}" />

        <title>{{ $page->title ?  $page->title . ' | ' : '' }}{{ $page->siteName }}</title>

        <link rel="home" href="{{ $page->baseUrl }}">
        <link rel="icon" href="/favicon.ico">
        <link rel="me" href="https://mastodon.social/@seldaek">
        <link href="/feed.atom" type="application/atom+xml" rel="alternate" title="{{ $page->siteName }} Atom Feed">

        @if ($page->production)
            <script async src="https://www.googletagmanager.com/gtag/js?id=G-QGN4JJEDTM"></script>
            <script>
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-QGN4JJEDTM');
            </script>
        @endif

        <!-- TODO self-host this -->
        <link href="https://fonts.googleapis.com/css?family=Nunito+Sans:300,300i,400,400i,700,700i,800,800i" rel="stylesheet">
        <link rel="stylesheet" href="{{ mix('css/main.css', 'assets/build') }}">
    </head>

    <body @class([
        'flex flex-col justify-between min-h-screen text-gray-800 dark:text-green-500 leading-normal font-sans dark:font-mono',
        'bg-gray-100 dark:bg-gray-800' => $page->type !== '404',
        'bg-white dark:bg-gray-800' => $page->type === '404',
    ])>
        <header class="flex items-center shadow bg-white dark:bg-gray-900 border-b dark:border-green-300 h-24 py-4" role="banner">
            <div class="container flex items-center max-w-4xl mx-auto px-4 lg:px-8">
                <div class="flex items-center">
                    <a href="/" title="{{ $page->siteName }} home" class="inline-flex items-center">
                        <h1 class="text-lg md:text-2xl text-blue-800 dark:text-green-400 font-semibold hover:text-blue-600 dark:hover:text-green-200 my-0">{{ $page->siteName }}</h1>
                    </a>
                </div>

                <div id="vue-search" class="flex flex-1 justify-end items-center">
                    <search></search>

                    @include('_nav.menu')

                    @include('_nav.menu-toggle')
                </div>
            </div>
        </header>

        @include('_nav.menu-responsive')

        <main role="main" class="flex-auto w-full container max-w-4xl mx-auto bg-white dark:bg-black mt-6 p-6">
            @yield('body')
        </main>

        <footer class="bg-white dark:bg-gray-900 text-center text-sm mt-12 py-4" role="contentinfo">
            <ul class="flex flex-col md:flex-row justify-center">
                <li class="list-none md:mr-2">
                    <a href="https://twitter.com/seldaek">Twitter</a>
                </li>
                <li class="list-none md:mr-2">
                    <a href="mailto:j.boggiano@seld.be">E-Mail</a>
                </li>
                <li class="list-none md:mr-2">
                    <a href="https://github.com/Seldaek">GitHub</a>
                </li>
                <li class="list-none md:mr-2">
                    <a href="/wishlist">Wishlist</a>
                </li>
                <li class="list-none">
                    All content &copy; Jordi Boggiano 2006-{{ date('Y') }}.
                </li>
            </ul>
        </footer>

        <script src="{{ mix('js/main.js', 'assets/build') }}"></script>

        @stack('scripts')
    </body>
</html>
