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
  let discardNext = '--discard-next';
  let discardPrev = '--discard-prev';
  let doubleNext = '--double-next';
  let doublePrev = '--double-prev';

  if (!Array.isArray(arr)) {
    throw new Error('\'arr\' parameter must be an instance of the Array!')
    // return '\'arr\' parameter must be an instance of the Array!'
    
  }

  if (arr.indexOf(doubleNext) >= 0) {
    let doubleNextNumber = arr.indexOf(doubleNext);
    arr.splice(doubleNextNumber + 1, 0, arr[doubleNextNumber + 1]);
    delete arr[doubleNextNumber];
  }
  
  if (arr.indexOf(doublePrev) >= 0) {
    let doublePrevNumber = arr.indexOf(doublePrev);
    arr.splice(doublePrevNumber, 0, arr[doublePrevNumber - 1]);
    delete arr[doublePrevNumber + 1];
  }

  if (arr.indexOf(discardNext) >= 0) {
    let discardNextNumber = arr.indexOf(discardNext);
    delete arr[discardNextNumber + 1];
    delete arr[discardNextNumber];
  }
  
  if (arr.indexOf(discardPrev) >= 0) {
    let discardPrevNumber = arr.indexOf(discardPrev);
    delete arr[discardPrevNumber - 1];
    delete arr[discardPrevNumber];
  }
  
  
  
  return arr.filter(Boolean)
}

module.exports = {
  transform
};
