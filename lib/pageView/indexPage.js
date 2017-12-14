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
const blogList = require('../blogData/blogList');

module.exports = SimplePager(lumineView(({
    props
}, ctx) => {
    return n(Vn, [
        n(FunctionBar, {
            title: 'Arre\'s blog',
            leftLogos: []
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

            n(Hn, [
                blogList[props.blogsIndex] && blogList[props.blogsIndex].map(({
                    name,
                    date,
                    brief,
                    docId
                }) => {
                    return n(Card, {
                        title: name,
                        style: {
                            container: {
                                display: 'block',
                                cursor: 'pointer',
                                margin: 8,
                                height: 200
                            }
                        },
                        onsignal: onSignalType('click', () => {
                            ctx.notify(Signal('route', `?page=article&docId=${docId}`));
                        })
                    }, [
                        n('div style="color:gray;font-size:14px;margin-bottom: 10px;"', date),
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
