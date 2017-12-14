'use strict';

const {
    SPA
} = require('kabanery-lumine/lib/page/flowPfcSPA');
const pageSignalActionMap = require('./pageSignalAction');
const pageViewMap = require('./pageView');
const {
    runApi,
    apiMap
} = require('./api');

const {
    getPageEnv
} = SPA({
    pageViewMap,
    pageSignalActionMap,
    pageOptionsMap: {
        indexPage: {
            indexPage: 'Arre blog', // TODO bug
            title: 'Arre blog'
        }
    },
    defaultPage: 'indexPage',
    runApi,
    apiMap,
    signalVariableMap: {
        forward: (url) => {
            const env = getPageEnv();
            env.forward(url);
        }
    }
});
