'use strict';

let {
    n, view
} = require('kabanery');

let {
    map
} = require('bolzano');

let header = require('kabanery-header');

let articles = require('../../resources/articles.json');

/**
 * display article list
 */
module.exports = () => {
    let PageView = view(() => {
        return n('div', [
            header({
                rightLogos: [
                    n('div', {
                        style: {
                            lineHeight: 40,
                            paddingLeft: 5,
                            paddingRight: 5
                        }
                    }, 'me')
                ]
            }),

            n('div', {
                style: {
                    marginTop: 30
                }
            }, [
                map(articles, ({
                    title,
                    path,
                    date,
                    digest
                }) => {
                    return n(`div class="card" href="single://?page=article&article=${path}"`, {
                        style: {
                            width: '40%',
                            cursor: 'pointer'
                        }
                    }, [
                        n('h3', title),
                        n('label', {
                            style: {
                                color: 'gray'
                            }
                        }, date),
                        n('div', {
                            style: {
                                marginTop: 10
                            }
                        }, digest)
                    ]);
                })
            ])
        ]);
    });

    return PageView({});
};
