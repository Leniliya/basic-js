const { NotImplementedError } = require('../extensions/index.js');

/**
 * There's a list of file, since two files cannot have equal names,
 * the one which comes later will have a suffix (k),
 * where k is the smallest integer such that the found name is not used yet.
 *
 * Return an array of names that will be given to the files.
 *
 * @param {Array} names
 * @return {Array}
 *
 * @example
 * For input ["file", "file", "image", "file(1)", "file"],
 * the output should be ["file", "file(1)", "image", "file(1)(1)", "file(2)"]
 *
 */
function renameFiles(names) {
  let result = [];
  for (let i = 0; i < names.length; i++) {
    let counter = 0;
    for (let j = 0; j < i; j++) {
      if (names[i] === result[j] || names[i] === names[j]) {
        counter++;
      }
    }
    if (counter > 0) {
      result.push(`${names[i]}(${counter})`)
    } else {
      result.push(`${names[i]}`)
    }
  }
  return result;
}

module.exports = {
  renameFiles
};
