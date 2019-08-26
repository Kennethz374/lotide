
const eqArrays = require('./eqArrays');

  const assertArraysEqual = function(arr1, arr2) {
    if (eqArrays(arr1,arr2) === true) {
      return `✅✅✅ Assertion Passed ${arr1} is identical to ${arr2}`
    } else {
      return `🛑🛑🛑 Assertion Failed ${arr1} is Not identical to ${arr2}`
    }
  };
 

module.exports = assertArraysEqual;


