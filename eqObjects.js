// //get object keys,
// //compare object length
// //loop through the key array,

// const ab = { a: "1", b: "2", c: "3"};
// const ba = { b: "2", a: "1", c: "3" };
// const cd2 = { c: "1", d: ["2", 3, 4] };
// const cd = { c: "1", d: ["2", 3] };
// const dc = { d: ["2", 3], c: "1" };

// const eqArrays = function(Arr1, Arr2) {
//   if (Arr1.length !== Arr2.length) {
//     return false;
//   } else {
//     for (let i = 0; i <= Arr1.length -1; i++)
//     if (Arr1[i] !== Arr2[i]) {
//     return false;
//   } else {}
//   return true;
//   }
// };
// // let obj1Key = Object.keys(ab);
// // let obj2Key = Object.keys(ba);

// //  if (obj1Key.length !== obj2Key.length) {
// //    return false;
// //  } else {
// //    for (keys of obj1Key) {
// //      if(obj1Key[keys] !== obj2Key[keys]) {
// //        return false
// //      }
// //    }
// //    return true

// //  };
const eqArrays = require('./eqArrays');

const eqObjects = function (obj1,obj2) {
  let obj1Keys = Object.keys(obj1);
  let obj2Keys = Object.keys(obj2);
  if (obj1Keys.length !== obj2Keys.length) {
    return false;
  } else {
    for (let key of obj1Keys) {
      if (Array.isArray(obj1[key]) && Array.isArray(obj2[key])) {
        if (eqArrays(obj1[key], obj2[key]) === false) {
        return false;
      }    
    } else if (obj1[key] !== obj2[key]) {
      return false;
      
    }
    
  }return true;
  }
};
module.exports = eqObjects;
