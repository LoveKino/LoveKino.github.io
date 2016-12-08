'use strict';

let {
    n, view
} = require('kabanery');

let header = require('kabanery-header');

module.exports = () => {
    let PageView = view(() => {
        return () => n('div', {
            style: {
                backgroundColor: 'white',
                minHeight: '100%'
            }
        }, [
            header({
                back: '?page=index'
            })
        ]);
    });

    return PageView({});
};
