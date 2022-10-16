const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount(s1, s2) {
  let sum = 0;
  let arrS2 = s2.split('')
  for (let i in s1) {
    if (arrS2.includes(s1[i])) {
      sum++
      arrS2.splice(arrS2.indexOf(s1[i]), 1);
    } else {
      sum = sum;
    }
  }
  return sum;
}

module.exports = {
  getCommonCharacterCount
};
