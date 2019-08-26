// const eqArrays = function(Arr1, Arr2) {
  
//   for (let i = 0; i <= Arr1.length -1; i++)
//   if (Arr1[i] !== Arr2[i]) {
//     return false;
//   } else {}
//   return true;
// };

// const assertArraysEqual = function(arr1, arr2) {
//   if (eqArrays(arr1,arr2) === true) {
//     return `✅✅✅ Assertion Passed ${arr1} is identical to ${arr2}`
//   } else {
//     return `🛑🛑🛑 Assertion Failed ${arr1} is Not identical to ${arr2}`
//   }
// };

// /////////
// const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
// const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
const eqArrays = require('./eqArrays');
const assertArraysEqual = require('./assertArraysEqual');
const takeUntil = function (data, callback) {
  let index = 0;
  for (let element of data) {
    if (callback(element)) {
      let i = index;
      return data.slice(0, i);
    } else {
      index += 1;
    }
  }
}
module.exports = takeUntil;
// const results = takeUntil(data1, x => x < 0); //callback func
// console.log(results);

// const results2 = takeUntil(data2, x => x === ',');//callback func
// console.log(results2);

// //test code below
// //test code below
// console.log(assertArraysEqual(results, [1,2,5,7,2]));
// console.log(assertArraysEqual(results2, [ 'I\'ve', 'been', 'to', 'Hollywood' ]));