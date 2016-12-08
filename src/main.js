'use strict';

require('!style!css!less!./less/normalize.less');
require('!style!css!quick-steady-theme/index.css');
require('../node_modules/font-awesome/css/font-awesome.min.css');

// polyfills
let PromisePolyfill = require('promise-polyfill');
if (!window.Promise) window.Promise = PromisePolyfill;
require('whatwg-fetch');

let {
    n
} = require('kabanery');

let {
    router, queryPager
} = require('kabanery-spa');

let renderArticleList = require('./page/index'),
    renderArticle = require('./page/article'),
    renderMe = require('./page/me');

document.body.appendChild(n('div id="pager"'));

let {
    forward, redirect, reload
} = router(queryPager({
    'index': {
        render: renderArticleList,
        title: 'article list'
    },
    'article': {
        render: renderArticle,
        title: 'article'
    },
    'me': {
        render: renderMe,
        title: 'me'
    }
}, 'index'), {
    forward,
    redirect,
    reload
});

forward(window.location.href);
