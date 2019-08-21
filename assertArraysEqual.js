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

console.log(assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true));
console.log(assertEqual(eqArrays([1, 2, 3], [3, 2, 1]), false));
console.log(assertEqual(eqArrays(["1", "2", "3"], ["1", "2", "3"]), true));
console.log(assertEqual(eqArrays(["1", "2", "3"], ["1", "2", 3]), false));