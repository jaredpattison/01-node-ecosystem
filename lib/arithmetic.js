'use strict';

let arithmetic = module.exports = {};

let number = function(a, b) {
  if( typeof a === 'number' && typeof b === 'number' ) { return true; }
};

arithmetic.add = function(...args) {
  if(number(args[0], args[1])) {
    return args[0] + args[1];
  } else {return null;}
};

arithmetic.subtract = function (...args) {
  if(number(args[0], args[1])) {
    return args[0] - args[1];
  } else {return null;}
};

arithmetic.multiply = function (...args) {
  if(number(args[0], args[1])) {
    return args[0] * args[1];
  } else {return null;}

};

arithmetic.divide = function (...args) {
  if(number(args[0], args[1]) && !args.includes(0)) {
    return args[0] / args[1];
  } else {return null;}
};
