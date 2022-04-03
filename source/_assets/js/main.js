window.axios = require('axios');
import Vue from 'vue';
import Search from './components/Search.vue';
import hljs from 'highlight.js/lib/core';

// Syntax highlighting
hljs.registerLanguage('bash', require('highlight.js/lib/languages/bash'));
hljs.registerLanguage('css', require('highlight.js/lib/languages/css'));
hljs.registerLanguage('html', require('highlight.js/lib/languages/xml'));
hljs.registerLanguage('javascript', require('highlight.js/lib/languages/javascript'));
hljs.registerLanguage('json', require('highlight.js/lib/languages/json'));
hljs.registerLanguage('markdown', require('highlight.js/lib/languages/markdown'));
hljs.registerLanguage('php', require('highlight.js/lib/languages/php'));
hljs.registerLanguage('scss', require('highlight.js/lib/languages/scss'));
hljs.registerLanguage('yaml', require('highlight.js/lib/languages/yaml'));

document.querySelectorAll('pre code').forEach((block) => {
    hljs.highlightBlock(block);
});

var darkMode = window.matchMedia('(prefers-color-scheme: dark)');

if (localStorage.theme === 'dark' || (!('theme' in localStorage) && darkMode.matches)) {
    enableDarkMode();
} else {
    disableDarkMode();
}

darkMode.onchange = (e) => {
    if ('theme' in localStorage) {
        return;
    }
    if (e.matches) {
        enableDarkMode();
    } else {
        disableDarkMode();
    }
};

function enableDarkMode() {
    document.documentElement.classList.add('dark');

    let style = document.createElement('link');
    style.id = 'dracula-style'
    style.rel = 'stylesheet';
    style.href = '/assets/css/dracula.css';
    document.head.appendChild(style);
}
function disableDarkMode() {
    document.documentElement.classList.remove('dark');

    let style = document.getElementById('dracula-style');
    if (style) {
        style.parentNode.removeChild(style);
    }
}

document.body.addEventListener('click', function (e) {
    if (!e.target.classList.contains('toggle-dark')) {
        return;
    }

    e.preventDefault();
    let newModeIsDark = false;
    if (document.documentElement.classList.contains('dark')) {
        disableDarkMode();
    } else {
        enableDarkMode();
        newModeIsDark = true;
    }

    // if switching back to the system default mode, remove from local storage
    // otherwise save for later
    if (darkMode.matches === newModeIsDark) {
        localStorage.removeItem('theme')
    } else {
        localStorage.theme = newModeIsDark ? 'dark' : 'light';
    }
}, true);

Vue.config.productionTip = false;

new Vue({
    components: {
        Search,
    },
}).$mount('#vue-search');
