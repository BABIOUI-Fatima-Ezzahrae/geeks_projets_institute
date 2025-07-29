const _ = require('lodash');

const math = require('./math.js');

const numbers = [1,2,3,4,5];
const total = _.sum(numbers);

console.log("Lodash sum of [1,2,3,4,5] : " , total);

const sum = math.add(5, 7);
const product = math.multiply(3, 4);

console.log('Custom add(5, 7):', sum);
console.log('Custom multiply(3, 4):', product);

