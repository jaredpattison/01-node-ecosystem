'use strict';

const arithmetic = require('../lib/arithmetic.js');

describe('arithmetic module', () => {

  it ('requires numeric input', () => {
    let expected = null;
    let sum = arithmetic.add('word', 3);
    expect(sum).toEqual(expected);
  });

  it('can add 2 numbers', () => {
    let expected = 2;
    let sum = arithmetic.add(1, 1);
    expect(sum).toEqual(expected);
  });

  it ('requires numeric input', () => {
    let expected = null;
    let sum = arithmetic.subtract('word', 3);
    expect(sum).toEqual(expected);
  });

  it('can add 2 numbers', () => {
    let expected = 0;
    let sum = arithmetic.subtract(1, 1);
    expect(sum).toEqual(expected);
  });

});