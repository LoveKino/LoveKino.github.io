'use strict';

let n = require('kabanery-lumine/lib/util/n');

let {
    paraTitle,
    list,
    lr,
    article
} = require('./articler')();

module.exports = article({
    title: 'performance analysis between recursive and stack-base none-recursive simulation',
    date: '2017-09-09',
    author: 'Arre',
    introduction: 'In the bottom, recursive is running on the stack in memory. It\'s a top-down way to ergodic question tree. We can simulate it by using a stack to do the DFT (Depth First Traversal). How about the performance between them, what kind of conclusions we can get?'
}, [
    paraTitle('Experiment content'),
    n('p', 'We prepare two simple programs. One uses recursive method, the other uses stack-base simulation. To avoid problem like tail recursion optimization, we choose a binary tree traversal problem.'),

    paraTitle('Experiment 1'),
    n('h4', 'experiment environment'),
    n('p', 'node v8.1.4, macOS Sierra, 8GB 1600 MHZ, 1.1 GHZ Intel Core M'),

    n('h4', 'recursion version code (js)'),
    n('pre', `var recursiveTree = (tree) => {
    if (!tree) return 0;
    recursiveTree(tree.left);
    recursiveTree(tree.right);
};
`),

    n('h4', 'stack-base simulation code (js)'),
    n('pre', `var iterateTree = (tree) => {
    var stack = [];
    stack[0] = tree;
    var topIndex = 0;
    while (topIndex >= 0) {
        var item = stack[topIndex--]; //pop

        if (item.left) {
            stack[++topIndex] = item.left; // push
        }
        if (item.right) {
            stack[++topIndex] = item.right; // push
        }
    }
};
`),

    n('h4', 'test tree'),
    n('pre', `function TreeNode(val) {
    this.val = val;
    this.left = this.right = null;
}

let n = new TreeNode(0);
let n1 = new TreeNode(1);
let n2 = new TreeNode(2);
let n3 = new TreeNode(3);
n.left = n1;
n.right= n2;

n1.left = n3;
`),
    n('p style="font-size:14px"', '(For a more reliable result of experiment, we should try a lot of different test tree. There only enumerate one.)'),

    n('h4', 'comparison result'),
    n('pre', `stack iteration x 84,084 ops/sec ±6.83% (58 runs sampled)
recursion x 78,480 ops/sec ±8.48% (59 runs sampled)
Fastest is stack iteration,recursion`),
    n('p', 'They are so close, we can think they are the same fast.'),

    n('h4', 'conclusion'),
    n('p', 'In js, recursion and stack-base simulation are almost same fast. But obviously, in stack-base simulation code, the efficient of stack is the key point to performance. Js is a kind of black-box in this situation, so we will continue this experiment but with some lower-level language like c++. And our concern will focus on stack.'),

    paraTitle('Experiment 2'),
    n('p', 'We use std::vector to simulate stack.'),
    n('h4', 'experiment environment'),
    n('p', 'g++ Apple LLVM version 8.1.0 (clang-802.0.42), macOS Sierra, 8GB 1600 MHZ, 1.1 GHZ Intel Core M'),

    n('h4', 'recursion version code (c++)'),
    n('pre', `int recursiveSum(Node *root) {
  if (root == NULL)
    return 0;
  return recursiveSum(root->left) + recursiveSum(root->right) + root->val;
}
`),

    n('h4', 'stack-base simulation code (c++)'),
    n('pre', `int stackIterateSum(Node *root) {
  vector<Node *> stack;
  stack.push_back(root);
  int sum = 0;

  while (stack.size()) {
    Node *top = stack.back();
    stack.pop_back();
    sum += top->val;

    if (top->right != NULL) {
      stack.push_back(top->right);
    }

    if (top->left != NULL) {
      stack.push_back(top->left);
    }
  }

  return sum;
}`),

    n('h4', 'test tree'),
    n('pre', `struct Node {
  int val;
  Node *left;
  Node *right;
};

Node a = {10, NULL, NULL};
Node b = {8, NULL, NULL};
Node c = {8, NULL, NULL};
a.left = &b;
a.right = &c;
`),

    n('h4', 'comparison result'),
    n('p', 'Stack-base simulation spends almost 7x time of recursion. In other word, recursion\'s speed is 7x of stack-base simulation.'),

    n('h4', 'conclusion'),
    n('p', 'If we simply use std::vector as stack, out stack-base simulation program will be slow.'),
    n('strong', 'The question is can we write stack-base simulation code which fast than recursion.'),

    paraTitle('Experiment 3'),
    n('p', 'Let\'s just change the stack-base simulation code from experiment 2. This time we use array, and we allocate memory at first (once).'),

    n('h4', 'stack-base simulation code (c++)'),
    n('p', 'We use array to simulate stack, we know the stack depth is less than 100, so, we simply allocate 100 size for array.'),
    n('pre', `int stackIterateSum(Node *root) {
  Node * stack[100];
  stack[0] = root;
  int stackIndex = 0;
  int sum = 0;

  while (stackIndex >= 0) {
    Node *top = stack[stackIndex--];
    sum += top->val;

    if (top->right != NULL) {
      stack[++stackIndex] = top->right;
    }

    if (top->left != NULL) {
      stack[++stackIndex] = top->left;
    }
  }

  return sum;
}
`),
    n('h4', 'comparison result'),
    n('p', 'This time, stack-base simulation is faster, and the speed is 3.6x of recursion.'),

    paraTitle('Conclusion'),
    list([
        'In js, stack-base simulation and recursion is the same fast. (array simulates stack)',
        'The key point to make stack-base simulation fater than recursion is to find a better stack for you problem.',
        'In lower-level language which can control memeory, if we know the depth of recursion, we can use an array to simulate stack. We allocate memery at first (this trick will avoid multiple times memory allocating). This kind of stack-simulation will be fast. If we want to rewrite a recursion code for better performance, we can use this trick.'
    ])
]);
