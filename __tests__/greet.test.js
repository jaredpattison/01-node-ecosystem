'use strict';

const greet = require('../lib/greet.js');
const faker = require('faker');

let nameRandom = faker.name.firstName();

describe('greet module', () => {
  
  it ('requires a string', () => {
    let expected = null;
    let greeting = greet(3);
    expect(greeting).toEqual(expected);
  });

  it ('returns hello <string>', () => {
    let expected = `hello ${nameRandom}`;
    let greeting = greet(`${nameRandom}`);
    expect(greeting).toEqual(expected);
  });
});

