'use strict';

const querystring = require('querystring');

const resourceMap = {};

module.exports = {
    runApi: (url) => {
        if (resourceMap[url]) return resourceMap[url];

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
            resourceMap[url] = str;
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
