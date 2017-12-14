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
// blogList
// const blogList = require('../blogData/blogList');

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
