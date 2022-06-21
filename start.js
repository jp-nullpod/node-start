let m1 = require('./module1');
let _ = require('lodash');

console.log(m1);

console.log(m1.a);

let arr = ['jp', 'bob', 'sam'];
let char = 'x';
let s = _.join(arr, char);
console.log(s);