'use strict';

let gulp = require('gulp');
let spawnp = require('spawnp');
let marked = require('marked');
let del = require('del');

marked.setOptions({
    renderer: new marked.Renderer(),
    gfm: true,
    tables: true,
    breaks: false,
    pedantic: false,
    sanitize: false,
    smartLists: true,
    smartypants: false
});

gulp.task('default', () => {
    return del([__dirname + '/assets/**']).then(() => {
        return Promise.all([
            spawnp('./node_modules/.bin/webpack --watch', [], {
                cwd: __dirname,
                stdio: 'inherit'
            }),
            spawnp('./node_modules/.bin/webpack-dev-server', [], {
                cwd: __dirname,
                stdio: 'inherit'
            })
        ]);
    });
});

gulp.task('build-articles', () => {
    let tokens = marked.lexer('I and using __markdown__');
});
