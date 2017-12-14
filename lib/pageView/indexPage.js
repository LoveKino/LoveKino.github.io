'use strict';

const {
    lumineView,
    n,
    onSignalType,
    Signal
} = require('kabanery-lumine');
const SimplePager = require('kabanery-lumine/lib/page/simplePager');
// layouts
const Hn = require('kabanery-lumine/lib/view/layout/hn');
const Vn = require('kabanery-lumine/lib/view/layout/vn');
// views
const FunctionBar = require('kabanery-lumine/lib/view/header/functionBar');
const Card = require('kabanery-lumine/lib/view/card/card');
const LeftNav = require('../view/leftNav');

// blogList
const blogList = require('../../blogData/blogList');

module.exports = SimplePager(lumineView(({
    props
}, ctx) => {
    return n(Vn, {
        mode: 'partion',
        topPartions: [100],
    }, [
        n(FunctionBar, {
            title: n('div', [
                n('img src="/img/arre_blog_avatar.png" alt="arre"', {
                    style: {
                        width: 80,
                        backgroundColor: 'rgb(243,242,243)',
                        borderRadius: 40,
                        position: 'relative',
                        top: 10
                    }
                })
            ]),
            leftLogos: [n('img src="/img/github.png" alt="github"', {
                style: {
                    width: 30,
                    height: 30
                }
            })],
            rightLogos: [],
            style: {
                container: {
                    height: 100,
                    backgroundColor: 'white',
                    borderBottom: '1px solid rgb(239, 241, 242) !important'
                },
                title: {
                    lineHeight: 100,
                    color: 'black'
                },
                logoLeft: {
                    backgroundColor: 'white',
                    color: 'black',
                    height: 100
                },
                logoRight: {
                    backgroundColor: 'white',
                    color: 'black',
                    height: 100
                }
            },

            onsignal: onSignalType('click', (signal) => {
                if (signal.data.sourceType === 'leftLogos') {
                    if (signal.data.index === 0) {
                        window.location.href = 'https://github.com/LoveKino';
                    }
                }
            })
        }),

        n(Hn, {
            mode: 'partion',
            leftPartions: [200]
        }, [
            n(LeftNav, {
                category: props.category.map((name, index) => {
                    return `${name} (${blogList[index]? blogList[index].length: 0})`;
                }),
                currentItemPosition: props.blogsIndex,
                onsignal: onSignalType('switch', (signal) => {
                    const dataIndex = signal.data;
                    ctx.update('props.blogsIndex', dataIndex);
                })
            }),

            n(Vn, [
                blogList[props.blogsIndex] && blogList[props.blogsIndex].map(({
                    name,
                    date,
                    brief,
                    docId,
                    coverPath
                }) => {
                    return n(Card, {
                        title: name,
                        style: {
                            container: {
                                display: 'block',
                                cursor: 'pointer',
                                margin: 8
                            }
                        },
                        onsignal: onSignalType('click', () => {
                            ctx.notify(Signal('route', `?page=article&docId=${docId}`));
                        })
                    }, [
                        n('div style="color:gray;font-size:14px;"', date),
                        coverPath && n('div', {
                            style: {
                                margin: '10 0',
                                width: '100%',
                                maxHeight: 200,
                                overflow: 'hidden',
                                border: '1px solid rgb(231,231,231)',
                                borderRadius: 8
                            }
                        }, [
                            n(`img src="${coverPath}" alt="cover img"`, {
                                style: {
                                    borderRadius: 5
                                }
                            })
                        ]),

                        n('div', brief)
                    ]);
                })
            ])
        ])
    ]);
}, {
    defaultProps: {
        blogsIndex: 0,
        category: ['Agorithms', 'Testing']
    }
}));
