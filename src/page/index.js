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
                    n('div href="single://?page=me"', {
                        style: {
                            lineHeight: 40,
                            paddingLeft: 5,
                            paddingRight: 5
                        }
                    }, 'me')
                ]
            }),

            n('form', [
                n('img src="/img/ddchen.jpg"', {
                    style: {
                        width: 100
                    }
                }),
                n('h4', 'ddchen'),

                n('p', [
                    n('span class="fa fa-github"', {
                        style: {
                            paddingRight: 10
                        }
                    }),
                    n('a href="https://github.com/LoveKino" target="blank"', {
                        style: {
                            color: '#4078c0'
                        }
                    }, 'https://github.com/LoveKino')
                ])
            ]),

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
