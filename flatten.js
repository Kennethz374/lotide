// FUNCTION IMPLEMENTATION
const assertArraysEqual = function(actual, expected) {
  if (actual === expected) {
    return `\✅✅✅Assertion Passed both Arrays are identical`;
  } else {
    return `\🛑🛑🛑 Assertion failed they are not identical arrays`;
  }
};

const eqArrays = function(Arr1, Arr2) {
  let value = "";
  for (let i = 0; i <= Arr1.length -1; i++)
  if (Arr1[i] !== Arr2[i]) {
    return false;
  } else {
    boolean = true;
  }
  return boolean;
};
const flatten = function (Arrays) {
  let newArray = [];
    for (let i = 0; i <= Arrays.length - 1; i++) {
      if (Array.isArray(Arrays[i]) !== true) {
        newArray.push(Arrays[i]);
      } else if (Array.isArray(Arrays[i]) === true) {
        for (let s = 0; s <= Arrays[i].length - 1; s++) {
          newArray.push(Arrays[i][s]);
        }
      }
        } return newArray
   };
  
console.log(flatten([1,2,3,[4,5,7]]));

console.log(assertArraysEqual(eqArrays([1, 2, 3], [1, 2, 3]), true));
console.log(assertArraysEqual(eqArrays([1, 2, 3], [3, 2, 1]), false));
console.log(assertArraysEqual(eqArrays(["1", "2", "3"], ["1", "2", "3"]), true));
console.log(assertArraysEqual(eqArrays(["1", "2", "3"], ["1", "2", 3]), false));