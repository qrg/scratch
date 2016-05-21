'use strict';

require('babel-register');

import assert from 'power-assert';
import fib from './fib';

const count = 1000;

console.time('fib');
for (let i = 0; i <= count; i++) {
  fib(i);
}
console.timeEnd('fib');

console.time('fib-with-memo');
for (let i = count; i >= 0; i--) {
  fib(i);
}
console.timeEnd('fib-with-memo');

describe('fib', () => {
  describe('fib(0)', () => {
    it('should be 0', () => {
      assert(fib(0) === 0);
    });
  });
  describe('fib(1)', () => {
    it('should be 1', () => {
      assert(fib(1) === 1);
    });
  });
  describe('fib(2)', () => {
    it('should be 1', () => {
      assert(fib(1) === 1);
    });
  });
  describe('fib(38)', () => {
    it('should be 39,088,169', () => {
      assert(fib(38) === 39088169);
    });
  });
});
