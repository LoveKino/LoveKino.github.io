'use strict';

const SimplePager = require('kabanery-lumine/lib/page/simplePager');
const {
    lumineView,
    n,
    onSignalType,
    Signal
} = require('kabanery-lumine');
// layouts
const Vn = require('kabanery-lumine/lib/view/layout/vn');
// views
const FunctionBar = require('kabanery-lumine/lib/view/header/functionBar');
const getArticleContent = require('../util/getArticleContent');

module.exports = SimplePager(lumineView(({
    props
}, ctx) => {
    const articleCnt = props.article && getArticleContent(props.article);
    return n(Vn, [
        n(FunctionBar, {
            title: 'Article',
            leftLogos: [
                n('div', '<')
            ],
            onsignal: onSignalType('click', (signal) => {
                if (signal.data.sourceType === 'leftLogos') {
                    if (signal.data.index === 0) {
                        ctx.notify(Signal('route', '?page=indexPage'));
                    }
                }
            })
        }),

        n('div', {
            style: {
                padding: 8
            }
        }, [articleCnt])
    ]);
}, {
    defaultProps: {
        article: null
    }
}));
