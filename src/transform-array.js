const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
function transform(arr) {
  if (!Array.isArray(arr)) {
    throw new Error("'arr' parameter must be an instance of the Array!");
  }
  let oldArr = arr.slice();
  let newArr = [];
  for (let i = 0; i < oldArr.length; i++) {
    switch (oldArr[i]) {
      case '--discard-prev':
        if (oldArr[i - 1]) {
          newArr.pop();
          oldArr[i - 1] = null;
        }
        break;

      case '--discard-next':
        if (oldArr[i + 1]) {
          oldArr[i + 1] = null;
        }
        break;

      case '--double-prev':
        if (oldArr[i - 1]) {
          newArr.push(oldArr[i - 1]);
        }
        break;

      case '--double-next':
        if (oldArr[i + 1]) {
          newArr.push(oldArr[i + 1]);
        }
        break;
      default:
        if (oldArr[i]) {
          newArr.push(oldArr[i]);
        }
    }
  }
  return newArr;
}

module.exports = {
  transform
};
