'use strict';

let marked = require('marked');

let {
    reduce
} = require('bolzano');

const KEY_START_LINE = /^\<\!--\^(.*?)--\>$/;
const KEY_END_LINE = /^\<\!--\$(.*?)--\>$/;

let getStartKey = (token) => {
    if (token.type !== 'html') return null;
    let ret = token.text.trim().match(KEY_START_LINE);
    if (!ret) return null;
    return ret[1].trim();
};

let getEndKey = (token) => {
    if (token.type !== 'html') return null;
    let ret = token.text.trim().match(KEY_END_LINE);
    if (!ret) return null;
    return ret[1].trim();
};

module.exports = (mdText) => {
    let tokens = marked.lexer(mdText);

    let wordMap = {};

    let keyContents = reduce(tokens, (prev, token) => {
        let word = getStartKey(token);
        if (word) {
            wordMap[word] = [];
        } else {
            let end = getEndKey(token);
            if (end) {
                let midTokens = wordMap[end];
                if (!midTokens) {
                    throw new Error(`end word ${end} is alone. Near ${token.text}.`);
                }
                prev[end] = midTokens;
                delete wordMap[end];
            } else {
                for (let name in wordMap) {
                    wordMap[name].push(token);
                }
            }
        }

        return prev;
    }, {});

    let articleAbbr = reduce(keyContents, (prev, midTokens, name) => {
        midTokens = midTokens.slice(0);
        midTokens.links = {};
        prev[name] = reduce(midTokens, (prev, token) => {
            return prev + (token.text || '');
        }, '');
        return prev;
    }, {});

    return {
        articleAbbr,
        html: marked.parser(tokens)
    };
};
