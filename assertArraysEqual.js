const eqArrays = function(Arr1, Arr2) {
  
  for (let i = 0; i <= Arr1.length -1; i++)
  if (Arr1[i] !== Arr2[i]) {
    return false;
  } else {}
  return true;
};

const assertArraysEqual = function(arr1, arr2) {
  if (eqArrays(arr1,arr2) === true) {
    return `✅✅✅ Assertion Passed ${arr1} is identical to ${arr2}`
  } else {
    return `🛑🛑🛑 Assertion Failed ${arr1} is Not identical to ${arr2}`
  }
};

console.log(assertArraysEqual([1, 2, 3], [1, 2, 3]));
console.log(assertArraysEqual([1, 2, 3], [3, 2, 1]));
console.log(assertArraysEqual(["1", "2", "3"], ["1", "2", "3"]));
console.log(assertArraysEqual(["1", "2", "3"], ["1", "2", 3]));
