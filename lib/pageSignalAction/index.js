'use strict';

/**
 *
 * {
 *      [pageName]: {
 *          [signalName]: [{
 *              type,       // updateState | sendRequest
 *              content,    // tree-script
 *
 *              response,    // response of sendRequest, tree-script
 *              error,       // error of sendRequest, tree-script
 *              variableMap: {}
 *          }]
 *      }
 * }
 *
 * source tree data in tree-script
 *     updateState: {signal, viewState, localStorage}
 *     response: {response, viewState, localStorage}
 *     error: {errorMsg, error, viewState, localStorage}
 *
 * Special signals:
 *      kabanery_page_render // when this page rendered
 *
 * tree-script: https://github.com/LoveKino/tree-script
 */
const error = '.props.loading.show=false;.props.notice.show=true;.props.notice.text=.errorMsg;';

module.exports = {
    indexPage: {
        'route': 'forward(.signal.data)'
    },
    article: {
        'route': 'forward(.signal.data)',
        'kabanery_page_render': ['.props.loading.show=true', {
            type: 'sendRequest',
            content: 'getArticle(.props)',
            response: '.props.loading.show=false;.props.article=.response;',
            error
        }]
    }
};
