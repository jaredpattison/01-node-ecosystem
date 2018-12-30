'use strict';

const isString =  (string => {
  if( typeof string === 'string' ) { return true; }
});

let greet = (name => {
  if ( isString(name)) { return `hello ${name}`; }
  return null;
});

module.exports = greet;