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

// blogList
const blogList = require('../blogData/blogList');

module.exports = SimplePager(lumineView((_, ctx) => {
    return n(Vn, [
        n(FunctionBar, {
            title: 'Arre\'s blog',
            leftLogos: []
        }),

        n(Hn, [
            blogList.map(({
                name,
                date,
                brief,
                docId
            }) => {
                return n(Card, {
                    title: name,
                    style: {
                        container: {
                            cursor: 'pointer',
                            width: 300,
                            margin: 8,
                            height: 250
                        }
                    },
                    onsignal: onSignalType('click', () => {
                        ctx.notify(Signal('route', `?page=article&docId=${docId}`));
                    })
                }, [
                    n('div style="color:gray;font-size:14px"', date),
                    n('div', brief)
                ]);
            })
        ])
    ]);
}, {
    defaultProps: {}
}));
