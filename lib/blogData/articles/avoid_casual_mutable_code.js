/* eslint-disable*/
article({
    title: 'Avoid casual mutable code',
    date: '2017-08-11',
    author: 'Arre',
    introduction: 'In javascript, we write mutable code a lot. Even if we did not realize that. In this article, we make a example of bab case of mutable code. Sometimes it\'s just a bad habit we need to change.'
}, [
    paraTitle('What is mutable variable?'),
    n('p', 'In code, if a variable\'s value can be changed, then this variable is a mutable variable. If we did change the value of a variable in a line, we could just call this line a mutable code line. For example:'),
    code(`let a = 10;  // we defined a mutable variable a
a = 20; // we changed the value of a.`),
    n('p', 'In this example, we defined a variable a, and change it\'s value after that.'),
    n('p', 'It\'s common in javascript to change a variable\'s value. Sometimes, it is necessary to keep code simple and clean. Let\'s make a example:'),
    paraTitle('Sometimes, mutable variable is a good choice.'),
    n('p', 'problem: print a tree data level by level'),
    code(`Example, we got tree

          3
     2         1
  4    5     6    7

We want to print the tree level by level:
3
2,1
4,5,6,7
`),
    code(`function PrintTree(t) {
  let level = [t];

  while(level.length) {
     const levelStr = level.map((item) => item.value).join(',');
     console.log(levelStr); // print current level string

     // change current level
     level = level.reduce((prev, item) => {
        // add current item's children to next level
        if (item.left) prev.push(item.left);
        if (item.right) prev.push(item.right);
        return prev;
     }, []);
  }
}`),

    n('p', 'In this example, we defined level as a mutable variable, but give us a super convenient. If we try to make level immutable, the code will not be so clean.'),

    n('p', 'So why we should try to avoid casual mutable code, even if javascript is just a single thread language.'),
    n('p', 'Let\'s make a bad common example.'),

    paraTitle('Bad mutable variable example'),
    n('p', 'problem: write curry function.'),
    n('a href="https://en.wikipedia.org/wiki/Currying" target="_blank"', 'Curry'),
    code(`const curry = (fn) => {
    const length = fn.length;
    if (!length || length === 1) return fn;

    return curryFun(fn, [], length);
};

const curryFun = (fn, vs, restLen) => {
    if (restLen <= 0) return fn(...vs); // accept enough params

    return (...args) => {
        vs = vs.concat(args);
        const nextLen = restLen - args.length;

        return curryFun(fn, vs, nextLen);
    };
};
`),

    n('p', 'This implementation is wrong! And somehow it can passes some cases. Let\'s make a bad case by using this curry function.'),
    code(`var add = curry(function(a, b, c) {
  return a + b + c;
});
add(1)(2)(3); // 6
add(2)(3)(4); // 6 not 9!
`),
    n('p', 'This case failed, add(2)(3)(4) supposed to be 9 not 6. let\'s try to find out why.'),

    n('p', 'The problem is this line:'),
    code('vs = vs.concat(args);'),
    n('p', 'In the whole program, we just change variable vs. And vs will be passed by closure (because closure called the curryFun too, and pass the same vs variable). So in this code we just shared vs and we changed it. The change would be valid for all closures which shared vs. That means when we called add(2)(3)(4), the vs parameter is not empty.'),

    paraTitle('Correct immutable version'),
    n('p', 'Just need to correct "vs = vs.concat(args);". We correct it by produce a new array "const nextVs = vs.concat(args);"'),
    code(`const curry = (fn) => {
    const length = fn.length;
    if (!length || length === 1) return fn;

    return curryFun(fn, [], length);
};

const curryFun = (fn, vs, restLen) => {
    if (restLen <= 0) return fn(...vs); // accept enough params

    return (...args) => {
        const nextVs = vs.concat(args); // do not change vs.
        const nextLen = restLen - args.length;

        return curryFun(fn, nextVs, nextLen);
    };
};
`)
]);
    
const hignFun = (fn, vs, restLen) => {
    ......
    return (...args) => {
        const nextVs = vs.concat(args); // do not change vs.
    OR
        vs = vs.concat(args); // change vs.
        ......
    };
};
