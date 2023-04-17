const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options) {
  let string = str;
  let addArr = [];
  let arr = [];
  if ('addition' in options) {
    if ('additionRepeatTimes' in options) {
      for (let i = 0; i < options.additionRepeatTimes; i++) {
        if (options.addition === null) {
          options.addition = 'null'
        }
        addArr.push(options.addition);
      }
      string = string + addArr.join(options.additionSeparator || '|')
    } else {
      string = string + options.addition;
    }
  }
  if ('repeatTimes' in options) {
    for (let i = 0; i < options.repeatTimes; i++) {
      arr.push(string);
    }
    string = arr.join(options.separator || '+')
  }
  return string
}

module.exports = {
  repeater
};
