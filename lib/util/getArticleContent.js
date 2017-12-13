/*eslint-disable*/
'use strict';

const articler = require('../blogData/articles/articler');

module.exports = (text) => {
    const {
        paraTitle,
        introductionPara,
        list,
        lr,
        article,
        articleTitle,
        code,
        emphasize,
        n
    } = articler();
    return eval(text);
};
