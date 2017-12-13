'use strict';

const {
    n, toHTML
} = require('kabanery');

const article = require('../lib/blogData/articles/avoid_casual_mutable_code');

console.log(toHTML(article));
