const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  let arr = n.toString();
  let test = [];
  let result;
  result = arr.split('');
  result[0] = null;
  result = +result.join('');
  for (let i = 1; i < arr.length; i++) {
    test = arr.split('');
    test[i] = null;
    test = +test.join('');
    console.log(test, 'test')
    console.log(result, 'result')
    if (test > result) {
      result = test;
    }
  }
  return result
}

module.exports = {
  deleteDigit
};
