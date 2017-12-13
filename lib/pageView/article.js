'use strict';

let SimplePager = require('kabanery-lumine/lib/page/simplePager');
let lumineView = require('kabanery-lumine/lib/util/lumineView');
let n = require('kabanery-lumine/lib/util/n');
let {
    onSignalType
} = require('kabanery-lumine/lib/util/signal');
let querystring = require('querystring');

// layouts
let Vn = require('kabanery-lumine/lib/view/layout/vn');
// views
let FunctionBar = require('kabanery-lumine/lib/view/header/functionBar');

let articles = require('../blogData/articles');
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

module.exports = SimplePager(lumineView(() => {
    let qs = querystring.parse(window.location.search.substring(1));
    let article = articles[qs.docId];

    let blog = blogList.find(({
        docId
    }) => docId === qs.docId);

    return n(Vn, [
        n(FunctionBar, {
            title: blog.name,
            leftLogos: [
                n('div', '<')
            ],
            onsignal: onSignalType('click', (signal) => {
                if (signal.data.sourceType === 'leftLogos') {
                    if (signal.data.index === 0) {
                        window.location.href = '?page=indexPage';
                    }
                }
            })

        }),

        n('div', {
            style: {
                padding: 8
            }
        }, [article])
    ]);
}, {
    defaultProps: {}
}));
