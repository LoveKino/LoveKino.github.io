'use strict';

let SimplePager = require('kabanery-lumine/lib/page/simplePager');
let lumineView = require('kabanery-lumine/lib/util/lumineView');
let n = require('kabanery-lumine/lib/util/n');
let {
    syncBindWithKeyMap
} = require('kabanery-lumine/lib/view/compose/mapUI');
let {
    deliver,
    onSignalType
} = require('kabanery-lumine/lib/util/signal');
let {
    // SIGNAL CONSTANTS
} = require('../signals');

// layouts
let Hn = require('kabanery-lumine/lib/view/layout/hn');
let Vn = require('kabanery-lumine/lib/view/layout/vn');
// views
let FunctionBar = require('kabanery-lumine/lib/view/header/functionBar');
let Card = require('kabanery-lumine/lib/view/card/card');

// blogList
let blogList = require('../blogData/blogList');

/**
 *  SimplePager encapsulate notice and loading view.
 *  
 *      .notice.text
 *      .notice.show
 *      .loading.show
 */

/**
 * syncBindWithKeyMap:
 *     sync child props with parent props
 *     demo: n(Input, syncBindWithKeyMap(ctx, {[parent props]: 'value'}, {bindedProps: {}}))
 */

/**
 * deliver signal 
 *     demo: n(Button, {onsignal: onSignalType('click', deliver(ctx, SIGNAL_TYPE))}, 'save')
 */

module.exports = SimplePager(lumineView(({}, ctx) => {
    return n(Vn, [
        n(FunctionBar, {
            title: 'Arre\'s blog',
            leftLogos: [n('div', 'about me')],
            onsignal: onSignalType('click', (signal) => {
                if (signal.data.sourceType === 'leftLogos') {
                    if (signal.data.index === 0) {
                        window.location.href = './project/resume/index.html';
                    }
                }
            })
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
                        window.location.href = `?page=article&docId=${docId}`;
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
