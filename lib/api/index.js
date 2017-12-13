'use strict';

const querystring = require('querystring');

module.exports = {
    runApi: (url) => {
        if (articleMap[url]) return articleMap[url];

        let options = {
            mode: 'cors',
            cache: 'default',
            method: 'GET',
            credentials: 'same-origin'
        };

        return fetch(url, options).catch(() => {
            throw new Error('network problem, please try to reload page.');
        }).then((data) => {
            if (data.status !== 200 && data.status !== 304 && data.status !== 301) {
                throw new Error('network problem, please try to reload page.');
            }
            return data.text();
        }).then((str) => {
            articleMap[url] = str;
            return str;
        });
    },

    apiMap: {
        getArticle: () => {
            let qs = querystring.parse(window.location.search.substring(1));
            return `/lib/blogData/articles/${qs.docId}`;
        }
    }
};

const articleMap = {};
