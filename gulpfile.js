'use strict';

let gulp = require('gulp');
let spawnp = require('spawnp');
let marked = require('marked');
let del = require('del');
let {
    map, compact, reverse
} = require('bolzano');
let promisify = require('promisify-node');
let fs = promisify('fs');
let {
    extname, basename
} = require('path');

let parseMd = require('./build/parseMd');

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

gulp.task('release', () => {
    return del([__dirname + '/assets/**']).then(() => {
        return spawnp('./node_modules/.bin/webpack', [], {
            cwd: __dirname,
            stdio: 'inherit'
        });
    }).then(() => {
        return spawnp([
            'git status',
            'git add .',
            `git commit -m "release-${new Date().getTime()}"`,
            'git push'
        ], [], {
            cwd: __dirname,
            stdio: 'inherit'
        });
    });
});

gulp.task('build-articles', () => {
    let articlesDir = __dirname + '/resources/src/articles';
    let outputArticlesDir = __dirname + '/resources/articles';
    let articleJsonPath = __dirname + '/resources/articles.json';

    return del([outputArticlesDir + '/*']).then(() => map(fs.readdir(articlesDir), (file) => {
        if (extname(file) !== '.md') return null;
        return fs.readFile(articlesDir + '/' + file, 'utf-8').then((content) => {
            let {
                articleAbbr, html
            } = parseMd(content);
            let fileName = basename(file, '.md') + '.html';
            articleAbbr.path = fileName;

            // save html to file
            return fs.writeFile(outputArticlesDir + '/' + fileName, html, 'utf-8').then(() => {
                return articleAbbr;
            });
        });
    }).then((ret) => Promise.all(ret))).then(compact).then(reverse).then((articleAbbrs) => {
        // write json
        return fs.writeFile(articleJsonPath, JSON.stringify(articleAbbrs, null, 4), 'utf-8');
    });
});
