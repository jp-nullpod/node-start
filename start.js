let m1 = require('./module1');
let _ = require('lodash');
let _m = require('moment');

console.log(m1);

console.log(m1.a);

let arr = ['jp', 'bob', 'sam'];
let char = 'x';
let s = _.join(arr, char);
console.log(s);


const nums = _.range(1, 9);
const chunks = _.chunk(nums, 3);
const right = _.takeRight(nums, 2);

console.log(nums);
console.log(chunks);
console.log(right);

console.log(`The day started ${_m().startOf('day').fromNow()}`);
console.log(`In 2 days, it will be ${_m().add(2, 'days').calendar()}`);
console.log(_m().format("[Today is] dddd"));