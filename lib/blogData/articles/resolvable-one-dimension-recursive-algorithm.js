'use strict';

let n = require('kabanery-lumine/lib/util/n');

let {
    paraTitle,
    list,
    article,
    code
} = require('./articler')();

module.exports = article({
    title: 'Resolvable one-dimension recursive algorithm',
    date: '2017-12-09',
    author: 'Arre',
    introduction: 'In recursive algorithm, we divide our problem into some sub problems. Sub problem have a less scale than origin problem. Generally, not all recursive algorithm is resolvable. In this article, we explored resolvable conditions for one-dimension recursive algorithm.'
}, [
    paraTitle('Working on ...')
]);
