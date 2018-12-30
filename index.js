'use strict';

const greet = require('./lib/greet.js');
const math = require('./lib/arithmetic.js');
console.log(greet('Frank'));
console.log(math.add(1,3)); // 4
console.log(math.subtract(1,3)); // -2
