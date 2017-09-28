let n = require('kabanery-lumine/lib/util/n');
let Toc = require('kabanery-lumine/lib/view/toc/toc');
let Hn = require('kabanery-lumine/lib/view/layout/hn');

module.exports = () => {
    let paraNames = ['Introduction'];

    let article = ({
        title,
        date,
        author,
        introduction
    }, content) => {
        return n('div', [
            articleTitle(title, date, author),

            n(Toc, {
                toc: paraNames.map((name) => {
                    return {
                        name
                    };
                })
            }),

            introduction && introductionPara(introduction),

            content
        ]);
    };

    let paraTitle = (name) => {
        paraNames.push(name);
        return n(`h3 id="${name}"`, name);
    };

    let introductionPara = (cnt) => {
        return [
            n('h3 id="Introduction"', 'Introduction'),
            n('p style="font-style:italic"', cnt)
        ];
    };

    let list = (contents) => {
        return n('ul', [
            contents.map((cnt) => n('li', cnt))
        ]);
    };

    let lr = (left, right, leftLength = 100) => {
        return n(Hn, {
            mode: 'partion',
            leftPartions: [leftLength],
            style: {
                container: {
                    display: 'inline-block'
                }
            }
        }, [
            n('strong', left), right
        ]);
    };

    let articleTitle = (title, date, author) => {
        return [
            n('h2 style="text-align:center"', title),
            n('div style="text-align:center;color:gray;"', `${date} ${author}`)
        ];
    };

    return {
        paraTitle,
        introductionPara,
        list,
        lr,
        article,
        articleTitle
    };
};
