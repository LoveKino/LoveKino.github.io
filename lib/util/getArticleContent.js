/*eslint-disable*/
'use strict';

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
} = require('../blogData/articles/articler')();

module.exports = (text) => {
    return eval(text);
};
