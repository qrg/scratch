'use strict';

require('babel-register');

import assert from 'power-assert';
import fizzBuzz from './fizz-buzz';

const answer30 = [
  1, 2, 'Fizz', 4, 'Buzz', 'Fizz', 7, 8, 'Fizz', 'Buzz',
  11, 'Fizz', 13, 14, 'FizzBuzz', 16, 17, 'Fizz', 19, 'Buzz',
  'Fizz', 22, 23, 'Fizz', 'Buzz', 26, 'Fizz', 28, 29, 'FizzBuzz'
];

describe('fizzBuzz', () => {
  describe('fizzBuzz(30)', () => {
    it('should be equal answer30', () => {
      assert(fizzBuzz(30).join() === answer30.join());
    });
  });
});
