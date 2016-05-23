'use strict';

require('babel-register');

import assert from 'power-assert';

// http://www.2ality.com/2016/05/six-nifty-es6-tricks.html
import enforceParamFn from './enforce-param-fn';

describe('enforceParamFn', () => {
  describe('enforceParamFn() with no parameters', () => {
    it('should throw Error', () => {
      assert.throws(() => { enforceParamFn(); });
    });
  });
  describe('enforceParamFn(1) with any parameters', () => {
    it('should not throw Error', () => {
      assert.doesNotThrow(() => { enforceParamFn(1); });
    });
  });
});
