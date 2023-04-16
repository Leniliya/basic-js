const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
function sortByHeight(arr) {
  let arr1 = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === -1) {
      continue
    } else {
      arr1.push(arr[i]);
      arr[i] = null;
    }
  }
  arr1.sort((a, b) => a - b);
  next: for (let j = 0; j < arr1.length; j++) {
    for (let i = 0; i < arr.length; i++) {
      console.log(arr[i], arr1[j])
      if (arr[i] == null) {
        arr[i] = arr1[j];
        continue next;
      }
    }
  }
  return arr;
}

module.exports = {
  sortByHeight
};
