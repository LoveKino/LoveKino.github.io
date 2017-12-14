/*eslint-disable*/
article({
    title: 'flexible UI test restraints design',
    date: '2017-09-27',
    author: 'Arre',
    introduction: 'UI changes day by day, how to define the correct state of UI became a problem. If the restraints we designed are too strong, they will be useless, because we have to change them everyday. If the restraints we designed are too weak, they won\'t be able to guard the UI.'
}, [
    paraTitle('Problems'),
    list([
        'How to measure a UI\'s state? After all, UI contains a lot of information, and can be different in different devices.',
        'The frequency of modifying UI is high. (Not absolutly, but for some products like user-level products, may change fast)'
    ]),

    paraTitle('Thought'),
    list([
        'Break down the information of UI into some dimensions.',
        'Design an approach to balance accuracy and flexibility for each dimension.',
        'The parameter of the dimension must be easy to set and adjust.'
    ]),

    n('p', 'This article provides a simple approach based on the two thoughts. It mainly considers to add position, content and style restraints to UI.'),

    paraTitle('Position restraint - Grid method'),
    n('p', 'Divide page into m * n matrix. For a specific UI, it will be located in an area, which can be represented by pair of coordinates (x1, y1), (x2, y2). For example:'),
    lr(
        n('img src="./img/position_restraint_demo.png"'),
        list([
            'step1: divide screen into 4 * 4 parts.',
            'step2: we can describe there is a button in area (0,0)-(0,0).'
        ]),
        300
    ),

    n('h4', 'flexibility'),
    n('p', 'The flexibility of grid method is at m and n, which we used to divide the page. If we set m and n small, the position information will be rough. If we set m and n big, the position information will be precision.'),

    n('p', 'In some simple situations:'),
    list([
        'We can define rough rate like 1.5 to calculate the m and the n for a specific UI.',
        'In a 2 * 2 grids, we can simply to say a button located in left-top or right-top or left-bottom or right-bottom.'
    ]),

    n('h4', 'usablility'),

    n('p', 'The grid method is easy to set and adjust, we can use vision to make desicion. We can increase the grid from 1 * 1 until we think it is ok.'),

    n('h4', 'combinators'),
    n('p', 'We can compose the relationship between area and UI element with some simple combinators.'),
    list([
        lr('In', 'UI element is in area A.', 60),
        lr('Not in', 'UI element is not in area A.', 60),
        lr('And', 'UI element is in area A and area B.', 60),
        lr('Or', 'UI element is in area A or area B.', 60)
    ]),

    paraTitle('Content restraint'),
    n('img src="./img/content_restraint_demo.png"'),
    n('p', 'The content of UI element is the main meaning that the UI try to delivery. The content of button is "test", that may imply when we click the button, it will run some test stuff.'),

    n('h4', 'content extractor'),
    n('div', 'A content extractor is a combinator used to extract content from some UI element’s dimensions.'),

    n('p', 'common dimensions'),
    list([
        'textContent',
        'image url',
        'textContent',
        'content of css pseudo-class in web scene',
        'the combination of all children’s content'
    ]),

    n('h4', 'combinator'),
    list([
        lr('Match', 'eg: UI element’s image url matches content A.'),
        lr('Not match', 'eg: UI element’s text content not matches content A.')
    ]),

    paraTitle('Style restraint'),
    n('p', 'The style of UI elements.'),

    n('h4', 'common styles'),
    list([
        'font size',
        'color',
        'background-color'
    ]),

    n('h4', 'combinator'),
    list([
        lr('Match', 'eg: UI element’s style matches content A.'),
        lr('Not match', 'eg: UI element’s style not matches content A.')
    ]),

    paraTitle('Other restraint'),
    n('p', 'Like tagName, attributes etc.'),

    paraTitle('Description UI by using restraints'),
    n('p', 'Using restraint rules to describe a UI element. Specify position area, content matching, style matching.'),
    n('p', 'Eg: There exists a UI element, located at area (0, 0)-(0, 0) in (5 * 6) grid, contains content “test”, has border, background color is white.'),

    paraTitle('Algorithm to solve the description'),
    n('p', 'Filter all elements according to the UI restraints description. What’s left are the target elements.')
]);
