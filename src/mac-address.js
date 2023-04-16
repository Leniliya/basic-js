const { NotImplementedError } = require('../extensions/index.js');

/**
 * The MAC-48 address is six groups of two hexadecimal digits (0 to 9 or A to F),
 * separated by hyphens.
 *
 * Your task is to check by given string inputString
 * whether it's a MAC-48 address or not.
 *
 * @param {Number} inputString
 * @return {Boolean}
 *
 * @example
 * For 00-1B-63-84-45-E6, the output should be true.
 *
 */
function isMAC48Address(n) {
  let arr = n.split('-');
  let isHexaxdemical = (str) => {
    let first = str.toString().codePointAt();
    let second = str.toString().codePointAt();
    if (first >= 48 && first <= 70) {
      if (second >= 48 && second <= 70) {
        return true
      }
    }
    return false
  }
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].length !== 2) {
      return false
    }
    if (!isHexaxdemical(arr[i])) {
      return false
    }
  }
  return true
}
module.exports = {
  isMAC48Address
};
