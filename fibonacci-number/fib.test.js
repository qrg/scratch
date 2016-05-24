'use strict';

require('babel-register');

import test from 'ava';
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

const MAP = new Map([
  [0, 0],
  [1, 1],
  [2, 1],
  [3, 2],
  [4, 3],
  [5, 5],
  [6, 8],
  [7, 13],
  [8, 21],
  [9, 34],
  [10, 55],
  [38, 39088169]
]);

MAP.forEach((value, key) => {
  test(`fib(${key}) should be ${value}`, t => {
    t.is(fib(key), value);
  });
});
