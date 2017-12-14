/*eslint-disable*/
article({
    title: 'When and how to use dynamic programming',
    date: '2017-10-11',
    author: 'Arre',
    introduction: 'Dynamic programming is a common method used to solve problems which contain optimal substructure. This article focused on the moment to use dynamic programming and make a summary. Find out when and how to write dynamic programming the key goal.'
}, [
    paraTitle('Look back - Concept'),

    n('p', 'Like divide-and-conquer, dynamic programming (DP) is another method which consider to compose subproblems results into a big problem result. When we say composing subproblems which means we can use recursion technology to solve it. But sometimes, subproblems will be calculate mutiple times in recursion, because of the overlapping subproblems. To avoid this, we can use memorization or tabulation.'),
    n('p', 'Another classical situation to use DP is the optimal substructure.'),
    code(`Assume a problem is P, |P| is the scale of the problem. 
f(P) is a max/min result to handle problem P. 
We can represent optimal substructure like this:
(consider the max situation)

f(P) = Max(h1(f(P1)), h2(f(P2)), ..., hr(f(Pr))), r >= 0

P1, P2, ..., Pr are sub problems of P, |P1| < |P|, |P2| < |P|, ..., |Pr| < |P|.
h1, h2, ..., hr are some help function.
`),

    n('p', 'No matter what, on consideration of engineering, we can say in DP: '),
    list([
        'We can get the problem result by composing sub problems results.',
        'In recursion tree, there may are some same sub problems.'
    ]),

    paraTitle('Look back - General method to solve DP problem'),
    n('p', 'Standard methods are:'),
    list([
        'Memoization. Since there are repeated sub problems, we just need to use a map to record sub problems result, and use it before we calculate a sub problem.',
        'Tabulation. Another thought to solve this kind of problem is use a table (one-dimensional, two-dimensional, ...). Every kind of scale of problem result can be found at table, so we just need to use results in table to calculate new scale result to fill the table.'
    ]),

    paraTitle('Notations to represent DP'),
    n('p', 'In order to discuss this problem more consistently, we need a unformally way to represent DP.'),

    n('h4', 'input notation'),
    n('p', 'We use P to stand for input of the problem. When we say scale of problem, it equals scale of input. We use ψ to stand for the domain of P in a specific problem.'),

    n('h4', 'input identity'),
    n('p', 'How to judge two input that are same or not. It\'s a way to judge two problem that are same or not. Different data structure may have different way to do that. In here, we just use notation Id(P) to represent identity of P.'),
    code(`Id: ψ ⤖ Y`),

    n('h4', 'target function'),
    n('p', 'Our goal in progamming is to solve the problem to get result, we call this procedure as target function. In here, we use F to notate target function.'),

    n('h4', 'scale of input'),
    code(`Scale of P is a tuple, like (N1, N2, ..., Nk), k >= 1
Ni is a integer stands for scale weight in dimension i. i = 1, 2, ..., k.
Notate |P| = (N1, N2, ..., Nk), D(P) = k`),
    n('p', 'Scale used to measure how big input is. Commonly, scale of input integer n is n. The input is an array, the scale may be the length of the array.'),
    n('p', 'Examples for scale of input:'),
    list([
        'Fibonacci number, f(n). Scale of the input is (n)',
        'LCS (longest common sequence), LCS(A[0...n-1], B[0...m-1]). Scale of the input is (n, m)'
    ]),
    n('p', 'An important thing about scale is how to compare two scales'),
    code(`We got problem P1 and P2, if there are comparable: 
D(P1) = D(P2).

|P1| = |P2| is equivalent to:
(i)  D(P1) = D(P2)
(ii) let |P1| = (N1, N2, ..., Nk), |P2| = (N1\`, N2\`, ..., Nk\`), for all Ni = Ni\`, i = 1, 2, ..., k

|P1| >= |P2| is equivalent to:
(i)  D(P1) = D(P2)
(ii) let |P1| = (N1, N2, ..., Nk), |P2| = (N1\`, N2\`, ..., Nk\`), for all Ni >= Ni\`, i = 1, 2, ..., k

|P1| > |P2| is equivalent to:
(i)  |P1| >= |P2|
(ii) let |P1| = (N1, N2, ..., Nk), |P2| = (N1\`, N2\`, ..., Nk\`), exists Ni > Ni\`, i = 1, 2, ..., k

We can define |P1| <= |P2|, |P1| < |P2| in the same way.
`),

    n('h4', 'sub input'),
    n('p', 'In here, sub input equals sub problem. Assume P` is a sub input of P, we can know P` come from P and P` has a smaller scale. So for a specific sub input P`, we need to know two stuff:'),
    list([
        'How to get P` from P',
        'The scale of P`'
    ]),
    code(`Assume input P\` is a sub problem of P, it must satisfied:
 (i)   P\` ϵ ψ.
 (ii)  |P\`| < |P|
 (iii) P\` = η(P), which means we construct P\` from P. η: ψ → ψ

 We use P\` < P to notate that P\` is a sub input of P. (Don't get confused with |P\`| < |P|.)
`),

    n('h4', 'DP problem notation'),
    code(`If input P with target function F can be resolved like this:
F(P) = some values,  if |P| is small enough
    |  H(F(P1), F(P2), ..., F(Pr)), Pi < P, i=1,2,...,r

We also know how to construct P1, P2, ..., Pr from P.

Pi = ηi(P), i = 1,2,3,...,r

We say this is a DP problem.

H function is composition method, which consider how to compose sub inputs results into a bigger input result.
`),

    n('p', 'Now, we will analysis the two methods to solve DP.'),

    paraTitle('Recursion with memorization method'),
    code(`// We defined a map used to store sub inputs results
function F(P, map) {
    if(P are some small enough inputs) {
        resolve smale input value directly, assign to variable value;
        return value;
    }

    // at first we check if we calculate this problem
    if(map[Id(P)]) { // found in cache, O(1)
        return map[Id(P)];
    }

    // do the recursion
    // construct sub inputs
    P1, P2, ..., Pr
    value = H(F(P1), F(P2), ..., F(Pr));

    map[Id(P)] = value; // memory it
    return value;
}
         
         `),

    paraTitle('Tabulation method'),
    n('h4', 'Scale & Input identical assumption'),
    n('p', 'To use tabulation method, we need a assumption, which is:'),
    code(`Scale & Input identical assumption: input P1, p2, if |P1| = |P2|, then P1 = P2.

In another word, we could just define the identity of P is it's scale.

Id(P) = |P|.
`),

    paraTitle('When to use DP'),
    n('p', 'Let\'s return to our main topic when to use DP. The answer is:'),
    list([
        'We can construct DP problem by using recursion function, like we mentioned before.',
        'Overlapping sub problems.',
        'Problem satisfies Scale & Input identical assumption'
    ]),

    n('p', 'If our problem is simple enough or we already have a better solution, of cource, we do not need to use DP. But if our problem has obvious recursive characteristics, we can try this method. If we have overlapping sub problems, we definitely can use this method. And there is another situation, if we do not have a solution for our problem, recursion is absolute good choice to give it a shot. After we wrote the recursion equation, we can then analysis about optimal substructure and overlapping sub problems to decide to use DP or not.'),

    n('p', 'If we try to use this method, the steps to construct DP problem are:'),
    list(
        [
            'Define the scale of your input',
            'Try to reduce input to some sub inputs. We may need to enumerate some sub problems by dimensions. For example, we can enumerate sub inputs of input (n,m) to (n-1,m) (n, m-1), (n-1,m-1).',
            'Try to find a way to compose sub inputs results.',
            'If we reached here, we can say DP is an option. Then we just need to figure out some boundy for small inputs. And choose memorization or tabulation.'
        ]
    )
]);
