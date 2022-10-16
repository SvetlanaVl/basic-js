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
  }

  let arrCopy = arr.slice();
  
  for(let i = 0; i < arrCopy.length; i++) {
    if (arrCopy[i] === discardNext) {
      let discardNextNumber = arrCopy.indexOf(discardNext);
      delete arrCopy[discardNextNumber + 1];
      delete arrCopy[discardNextNumber];
    }
  
    if (arrCopy[i] === discardPrev) {
      let discardPrevNumber = arrCopy.indexOf(discardPrev);
      delete arrCopy[discardPrevNumber - 1];
      delete arrCopy[discardPrevNumber];
    }

    if (arrCopy[i] === doubleNext) {
      let doubleNextNumber = arrCopy.indexOf(doubleNext);
      arrCopy.splice(doubleNextNumber + 1, 0, arrCopy[doubleNextNumber + 1]);
      delete arrCopy[doubleNextNumber];
    }
  
    if (arrCopy[i] === doublePrev) {
      let doublePrevNumber = arrCopy.indexOf(doublePrev);
      arrCopy.splice(doublePrevNumber, 0, arrCopy[doublePrevNumber - 1]);
      delete arrCopy[doublePrevNumber + 1];
    }
  }
  
  return arrCopy.filter(Boolean)
}

module.exports = {
  transform
};
