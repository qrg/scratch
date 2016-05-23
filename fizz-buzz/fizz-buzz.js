'use strict';

const isFizz = (num) => { return num % 3 === 0; };
const izBuzz = (num) => { return num % 5 === 0; };
const isFizzBuzz = (num) => { return isFizz(num) && izBuzz(num); };
const sayFizzBuzz = (num) => {
  if (isFizzBuzz(num)) return 'FizzBuzz';
  if (isFizz(num)) return 'Fizz';
  if (izBuzz(num)) return 'Buzz';
  return num;
};

export default function fizzBuzz(count = 30) {
  const results = [];
  for (let i = 1; i <= count; i++) {
    results.push(sayFizzBuzz(i));
  }
  return results;
}
