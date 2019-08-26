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
// //


// const sentence =[1,2,3,4,5,6,7,8,9]
// const words = ['ground', 'control', 'to', 'major', 'tom'];
const eqArrays = require('./eqArrays');
const assertArraysEqual = require('./assertArraysEqual');

const map = function(array,callback){
  const results = [];
  for (let item of array) {
    results.push(callback(item));
  }
  return results;
};
// const results = map(words, word => word[0]);
// const results1 = map(sentence, num => num * 2);

module.exports = map;


// console.log(results);
// console.log(results1);

//visit map

// console.log(assertArraysEqual(results, ["g","c","t","m","t"]));//return pass
// console.log(assertArraysEqual(results1, [2,4,6,8,10,12,14,16,18]));//return pass
