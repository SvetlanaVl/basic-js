const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  if (str.lenght === 0) {
    return ''
  }
  let result = [];
  for (let i = 0; i < str.length; i++) {
    let num = 1;
    while (str[i] === str[i + 1]) {
      num++;
      i++;
    }
    if(num === 1) {
      result.push('' + str[i])
    } else {
      result.push(num + str[i])
    }
  }
  return result.join('');
}

module.exports = {
  encodeLine
};
