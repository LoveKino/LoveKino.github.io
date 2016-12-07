'use strict';

let {
    n, view
} = require('kabanery');

let header = require('kabanery-header');

let querystring = require('querystring');

let Loading = require('kabanery-modal/lib/loading');

let {
    delay
} = require('jsenhance');

require('!style!css!github-markdown-css/github-markdown.css');

let cache = {};

let getArticle = (articleUrl) => {
    if (cache[articleUrl]) {
        return Promise.resolve(cache[articleUrl]);
    } else {
        return fetch(articleUrl, {
            method: 'GET'
        }).then((response) => {
            return response.text();
        }).then((ret) => {
            cache[articleUrl] = ret;
            return delay(500).then(() => {
                return ret;
            });
        });
    }
};

/**
 * display article list
 *
 * TODO cache articles
 */
module.exports = () => {
    let qs = querystring.parse(window.location.href.split('?')[1]);

    let PageView = view(({
        loading,
        text
    }, {
        update
    }) => {
        let articleUrl = `/resources/articles/${qs.article}`;

        let updateText = (ret) => {
            text = ret;
            loading = false;
            update();
        };

        getArticle(articleUrl).then(updateText);

        return () => n('div', {
            style: {
                backgroundColor: 'white',
                minHeight: '100%'
            }
        }, [
            header({
                back: '?page=index'
            }),
            text ? n('div class="markdown-body"', {
                style: {
                    boxSizing: 'border-box',
                    minWidth: 200,
                    maxWidth: 980,
                    margin: '0 auto',
                    padding: 45
                }
            }, [
                getTextNode(text)
            ]) : null,
            loading ? Loading({
                disappear: false
            }) : null
        ]);
    });

    return PageView({
        loading: true,
        text: ''
    });
};

let getTextNode = (text) => {
    let textNode = n('div');
    textNode.innerHTML = text;
    return textNode;
};
