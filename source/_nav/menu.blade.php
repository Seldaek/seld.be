<nav class="hidden lg:flex items-center justify-end text-lg">
    <a title="{{ $page->siteName }} Blog" href="/notes"
        class="ml-6 text-gray-700 hover:text-blue-600 dark:text-green-500 dark:hover:text-green-400 {{ $page->isActive('/notes') ? 'active text-blue-600 dark:text-green-300' : '' }}">
        Blog
    </a>

    <a title="{{ $page->siteName }} About" href="/about"
        class="ml-6 text-gray-700 hover:text-blue-600 dark:text-green-500 dark:hover:text-green-400 {{ $page->isActive('/about') ? 'active text-blue-600 dark:text-green-300' : '' }}">
        About
    </a>

    <a title="{{ $page->siteName }} Atom Feed" href="/feed.atom"
        class="ml-6 text-gray-700 hover:text-blue-600 dark:text-green-500 dark:hover:text-green-400">
        Feed
    </a>
</nav>
