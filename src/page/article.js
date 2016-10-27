'use strict';

let {
    n, view
} = require('kabanery');

let header = require('kabanery-header');

let querystring = require('querystring');

let Loading = require('kabanery-modal/lib/loading');

/**
 * display article list
 */
module.exports = () => {
    let qs = querystring.parse(window.location.href.split('?')[1]);

    let PageView = view(({
        loading,
        text
    }, {
        update
    }) => {
        fetch(`/resources/articles/${qs.article}`, {
            method: 'GET'
        }).then((response) => {
            return response.text();
        }).then((ret) => {
            text = ret;
            loading = false;
            // TODO loading disappear animation
            update();
        });

        return () => n('div', [
            header({
                back: '?page=articleList'
            }),
            text ? n('div', [getTextNode(text)]) : null,
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
