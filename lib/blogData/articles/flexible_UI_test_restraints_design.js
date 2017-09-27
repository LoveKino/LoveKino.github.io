'use strict';

let n = require('kabanery-lumine/lib/util/n');
let Toc = require('kabanery-lumine/lib/view/toc/toc');
let Hn = require('kabanery-lumine/lib/view/layout/hn');

let paraTitle = (name) => n(`h3 id="${name}"`, name);

module.exports = n('div', [
    n('h2 style="text-align:center"', 'flexible UI test restraints design'),
    n('div style="text-align:center;color:gray;"', '2017-09-27 Arre'),

    n(Toc, {
        toc: [{
            name: 'Introduction'
        }, {
            name: 'Problems'
        }, {
            name: 'Thought'
        }, {
            name: 'Position restraint - Grid method'
        }, {
            name: 'Content restraint'
        }, {
            name: 'Style restraint'
        }, {
            name: 'Other restraint'
        }, {
            name: 'Description UI by using restraints'
        }, {
            name: 'Algorithm to solve the description'
        }]
    }),

    paraTitle('Introduction'),
    n('p style="font-style:italic"', 'UI changes day by day, how to define the correct state of UI become a problem. If the restraints we designed are too strong, they will be useless, because we have to change them everyday. If the restraints we designed are too week, they won\'t be able to guard the UI.'),

    paraTitle('Problems'),
    n('ul', [
        n('li', 'How to measure a UI\'s state? After all, UI contains a lot of information, and can be different in difference devices.'),
        n('li', 'The frequency of modifying UI is high. (Not absolutly, but for some products like user-level products, may changed fast)')
    ]),

    paraTitle('Thought'),
    n('ul', [
        n('li', 'Break down the information of UI into some dimensions.'),
        n('li', 'Design an approach to balance accuracy and flexibility for each dimension.'),
        n('li', 'The parameter of the dimension must be easy to set and adjust.')
    ]),
    n('p', 'This article provides a simple approach based on the two thoughts. It mainly considers to add position, content and style restraints to UI.'),

    paraTitle('Position restraint - Grid method'),
    n('p', 'Divide page into m * n matrix. For a specific UI, it will be located in an area, which can be represented by pair of coordinates (x1, y1), (x2, y2). For example:'),
    n(Hn, {
        mode: 'partion',
        leftPartions: [300]
    }, [
        n('img src="./img/position_restraint_demo.png"'),
        n('ul', [
            n('li', 'step1: divide screen into 4 * 4 parts.'),
            n('li', 'step2: we can describe there is a button in area (0,0)-(0,0).')
        ])
    ]),

    n('h4', 'flexibility'),
    n('p', 'The flexibility of grid method is at m and n, which we used to divide the page. If we set m and n small, the position information will be rough. If we set m and n big, the position information will be precision.'),

    n('p', 'In some simple situations:'),
    n('ul', [
        n('li', 'We can define rough rate like 1.5 to calculate the m and the n for a specific UI.'),
        n('li', 'In a 2 * 2 grids, we can simply to say a button located in left-top or right-top or left-bottom or right-bottom.')
    ]),

    n('h4', 'usablility'),

    n('p', 'The grid method is easy to set and adjust, we can use vision to make desicion. We can increase the grid from 1 * 1 until we think it is ok.'),

    n('h4', 'combinators'),
    n('p', 'We can compose the relationship between area and UI element with some simple combinators.'),
    n('ul', [
        n('li', n(Hn, {
            mode: 'partion',
            leftPartions: [60],
            style: {
                container: {
                    display: 'inline-block'
                }
            }
        }, [
            n('strong', 'In'), 'UI element is in area A.'
        ])),
        n('li', n(Hn, {
            mode: 'partion',
            leftPartions: [60],
            style: {
                container: {
                    display: 'inline-block'
                }
            }
        }, [
            n('strong', 'Not in'),
            'UI element not is in area A.'
        ])),
        n('li', n(Hn, {
            mode: 'partion',
            leftPartions: [60],
            style: {
                container: {
                    display: 'inline-block'
                }
            }
        }, [
            n('strong', 'And'), 'UI element is in area A and area B.'
        ])),
        n('li', n(Hn, {
            mode: 'partion',
            leftPartions: [60],
            style: {
                container: {
                    display: 'inline-block'
                }
            }
        }, [
            n('strong', 'Or'), 'UI element is in area A or area B.'
        ]))
    ]),

    paraTitle('Content restraint'),
    n('img src="./img/content_restraint_demo.png"'),
    n('p', 'The content of UI element is the main meaning that the UI try to delivery. The content of button is test, that imply when we click the button, it will run some test stuff.'),

    n('h4', 'content extractor'),
    n('div', 'A content extractor is a combinator used to extract content from the UI element’s some dimensions.'),

    n('p', 'common dimensions'),
    n('ul', [
        n('li', 'textContent'),
        n('li', 'image url'),
        n('li', 'textContent'),
        n('li', 'content of css pseudo-class in web scene'),
        n('li', 'the combination of all children’s content')
    ]),

    n('h4', 'combinator'),
    n('ul', [
        n('li', n(Hn, {
            mode: 'partion',
            leftPartions: [100],
            style: {
                container: {
                    display: 'inline-block'
                }
            }
        }, [
            n('strong', 'Match'), 'eg: UI element’s image url matches content A'
        ])),
        n('li', n(Hn, {
            mode: 'partion',
            leftPartions: [100],
            style: {
                container: {
                    display: 'inline-block'
                }
            }
        }, [
            n('strong', 'Not match'), 'eg: UI element’s text content not matches content A.'
        ]))
    ]),

    paraTitle('Style restraint'),
    n('p', 'The style of UI elements.'),

    n('h4', 'common styles'),
    n('ul', [
        n('li', 'font size'),
        n('li', 'color'),
        n('li', 'background-color')
    ]),
    n('h4', 'combinator'),
    n('ul', [
        n('li', n(Hn, {
            mode: 'partion',
            leftPartions: [100],
            style: {
                container: {
                    display: 'inline-block'
                }
            }
        }, [
            n('strong', 'Match'), 'eg: UI element’s style matches content A'
        ])),
        n('li', n(Hn, {
            mode: 'partion',
            leftPartions: [100],
            style: {
                container: {
                    display: 'inline-block'
                }
            }
        }, [
            n('strong', 'Not match'), 'eg: UI element’s style not matches content A.'
        ]))
    ]),

    paraTitle('Other restraint'),
    n('p', 'Like tagName, attributes etc.'),

    paraTitle('Description UI by using restraints'),
    n('p', 'Using restraint rules to describe a UI element. Specify position area, content matching, style matching.'),
    n('p', 'Eg: There exists a UI element, located at area (0, 0)-(0, 0) in (5 * 6) grid, contains content “test”, has border, background color is white.'),

    paraTitle('Algorithm to solve the description'),
    n('p', 'Filter all elements according to the UI restraints description. What’s left are the target elements.')
]);
