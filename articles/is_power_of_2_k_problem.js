/*eslint-disable*/

article({
    title: 'Is power of 2 ^ k problem',
    date: '2017-09-06',
    author: 'Arre',
    introduction: 'We know n is a integer in 32-bit (or 64-bit) system. There is an old trick we judge n is power of 2 or 4. Today, we will try to find out a general solution for "is power of 2 ^ k".'
}, [
    paraTitle('Represent of integer'),
    n('p', 'In the bottom of computer, integer is a bounch of 0 1. In this problem, we do not consider negtive situation, so the number can equal to the binary form. And we assume a integer is 32-bit long. For example:'),
    list([
        '1 = 0000 0000 0000 0000 0000 0000 0000 0001',
        '2 = 0000 0000 0000 0000 0000 0000 0000 0010',
        '3 = 0000 0000 0000 0000 0000 0000 0000 0011'
    ]),

    paraTitle('Is power of 2'),
    n('p', [
        n('h4', 'If n is power of 2, it means there will only have one 1 in n\' binary representation. If n is 0, obviously n is not power of 2. Otherwise we can use binary operation n & (n - 1) = 0.'),
        n('div', 'We need to proof, if n & (n - 1), there will only be one 1 in n\'s binary representation. Because n > 0, so n must got at least one 1 in n\' binary reprentation. So we can represent n like: "E10...0", it means after 1 there are r (r>=0) 0s, E is a bunch of 0 1. The n - 1 will be "E01...1". Then we do n & (n - 1), we will got "(E & E)00...0". Because n & (n - 1) = 0, so E & E must be 0, so E = 0...0, it means, for n there is only one 1 in it\'s binary representation.'),
        n('div', 'For Example: n = 2 ^ 7 = 0000 0000 0000 0000 0000 0000 1000 0000'),
        code(`
    0000 0000 0000 0000 0000 0000 1000 0000 
  -                                       1
  -----------------------------------------
    0000 0000 0000 0000 0000 0000 0111 1111

    0000 0000 0000 0000 0000 0000 1000 0000
  & 0000 0000 0000 0000 0000 0000 0111 1111
  -----------------------------------------
    0000 0000 0000 0000 0000 0000 0000 0000
`)
    ]),

    paraTitle('Is power of 2 ^ 2'),
    n('p', [
        n('div', 'some examples'),
        list([
            '4 ^ 0 = 0000 0000 0000 0000 0000 0000 0000 0001',
            '4 ^ 1 = 0000 0000 0000 0000 0000 0000 0000 0100',
            '4 ^ 2 = 0000 0000 0000 0000 0000 0000 0001 0000',
            '4 ^ 3 = 0000 0000 0000 0000 0000 0000 0100 0000'
        ]),

        n('div', 'We can conclude at least three points from examples:'),
        list([
            'There is and only is one 1 in binary representation. (If n is power of 2 ^ 2, n will be the power of 2. So the conlusion before still stands.)',
            'The minimum n is 1, the only 1 in binary representation is at position index 0.',
            '4 ^ m compared to 4 ^ (m - 1), the 1 moved two postion to the left. (Obvisouly, 4 ^ m = 4 ^ (m -1) << 2)'
        ]),

        n('div', 'So, all possible position for the only 1, can be enumerated, in this case, the odd postion.'),

        code('0101 0101 0101 0101 0101 0101 0101 0101'),

        n('div', 'So we got a problem, how to detect the only 1\'s position? We can use:'),
        n('h4', 'n & mask = n'),
        n('div', 'The mask makes all possible positions of the only 1 in integer 1, the others 0. So when n & mask, if the only 1 in n matched a 1 in mask will still be 1, others be 0. If the only 1 in n do not matched a 1 in mask, will be 0.'),

        n('div', 'We can give the conclustion:'),

        n('h4', 'n > 0, n is power of 2 ^ 2, is equivalent to n & (n - 1) = 0 and n & 0x55555555 = n')
    ]),

    paraTitle('Is power of 2 ^ k, k > 1.'),
    n('p', [
        n('h4', 'More generally, how about n is power of 2 ^ k problem.'),
        n('div', 'From dicussion before, we can conclude that: n > 0, n is power of 2 ^ k, is equivalent to n & (n - 1) = 0 and n & mask = n.'),
        n('h4', 'How to find the mask?'),

        n('div', 'Like discussed before, mask stands for all possible positions of the only 1.'),

        n('div', '(2 ^ k) ^ m = (2 ^ k) ^ (m - 1) << k, it means, when m increase 1, the only 1 in binary representation will move k postion to the left. And (2 ^ k) ^ 0 = 1, the start position is at index 0. We can present the possible 1s:'),
        code(`
                ... 1 ... ... 1 ... 1 ... 1 ... 1
                [32/k]*k     3k    2k     k     0
`),
        n('div', 'The last position for the only 1 is [32/k]*k'),

        n('div', 'At last, we can give the conclution this way:'),

        n('h4', 'n is power of 2 ^ k, is equivalent to n & (n - 1) = 0 and n & mask = n, and mask is: '),
        code(`
                ... 1 ... ... 1 ... 1 ... 1 ... 1
                [32/k]*k     3k    2k     k     0
`)
    ])
]);
