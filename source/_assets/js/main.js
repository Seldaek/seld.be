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
if (darkMode.matches) {
    enableDarkMode();
} else {
    disableDarkMode();
}

darkMode.onchange = (e) => {
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

document.querySelectorAll('.toggle-dark').forEach((el) => {
    el.addEventListener('click', function (e) {
        e.preventDefault();
        if (document.documentElement.classList.contains('dark')) {
            disableDarkMode();
        } else {
            enableDarkMode();
        }
    }, true);
});

Vue.config.productionTip = false;

new Vue({
    components: {
        Search,
    },
}).$mount('#vue-search');
