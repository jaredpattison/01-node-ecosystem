'use strict';

const arithmetic = require('../lib/arithmetic.js');
let faker = require('faker');

let firstRandom = faker.random.number();

let secondRandom = faker.random.number();

describe('arithmetic module', () => {

  it ('requires numeric input', () => {
    let expected = null;
    let sum = arithmetic.add('word', 3);
    expect(sum).toEqual(expected);
  });

  it('can add 2 numbers', () => {
    let expected = firstRandom + secondRandom;
    let sum = arithmetic.add(firstRandom, secondRandom);
    expect(sum).toEqual(expected);
  });

  it ('requires numeric input', () => {
    let expected = null;
    let subtract = arithmetic.subtract('word', 3);
    expect(subtract).toEqual(expected);
  });

  it('can add 2 numbers', () => {
    let expected = firstRandom - secondRandom;
    let subtract = arithmetic.subtract(firstRandom, secondRandom);
    expect(subtract).toEqual(expected);
  });

  it ('requires numeric input', () => {
    let expected = null;
    let multiply = arithmetic.multiply('word', 3);
    expect(multiply).toEqual(expected);
  });

  it('can multiply 2 numbers', () => {
    let expected = firstRandom * secondRandom;
    let multiply = arithmetic.multiply(firstRandom, secondRandom);
    expect(multiply).toEqual(expected);
  });

  it ('requires numeric input', () => {
    let expected = null;
    let divide = arithmetic.divide('word', 3);
    expect(divide).toEqual(expected);
  });

  it ('can divide 2 numbers', () => {
    let expected = firstRandom / secondRandom;
    let divide = arithmetic.divide(firstRandom, secondRandom);
    expect(divide).toEqual(expected);
  });
});