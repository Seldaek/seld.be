<nav id="js-nav-menu" class="w-auto px-2 pt-6 pb-2 bg-gray-200 dark:bg-gray-700 shadow hidden lg:hidden">
    <ul class="my-0">
        <li class="pl-4 list-none">
            <a
                title="{{ $page->siteName }} Blog"
                href="/notes"
                class="block mt-0 mb-4 text-sm no-underline {{ $page->isActive('/notes') ? 'active text-blue-500 dark:text-green-100' : 'text-gray-800 hover:text-blue-500 dark:text-green-300 dark:hover:text-green-100' }}"
            >Blog</a>
        </li>
        <li class="pl-4 list-none">
            <a
                title="{{ $page->siteName }} About"
                href="/about"
                class="block mt-0 mb-4 text-sm no-underline {{ $page->isActive('/about') ? 'active text-blue-500 dark:text-green-100' : 'text-gray-800 hover:text-blue-500 dark:text-green-300 dark:hover:text-green-100' }}"
            >About</a>
        </li>
        <li class="pl-4 list-none">
            <a
                title="{{ $page->siteName }} Atom Feed"
                href="/feed.atom"
                class="block mt-0 mb-4 text-sm no-underline text-gray-800 hover:text-blue-500 dark:text-green-300 dark:hover:text-green-100"
            >Contact</a>
        </li>
    </ul>
</nav>
