'use strict';

const fibs = [0, 1];

export default function fib(n) {
  if (n < 0) return undefined;
  if (n === 0 || n === 1) return n;
  if (n === 2) return 1;
  if (fibs[n]) {
    return fibs[n];
  }

  for (let i = fibs.length - 1; i < n; i++) {
    fibs[i + 1] = fibs[i - 1] + fibs[i];
  }

  return fibs[n];
}
