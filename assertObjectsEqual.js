const ab = { a: "1", b: "2", c: "3"};
const ba = { b: "2", a: "1", c: "3" };
const cd2 = { c: "1", d: ["2", 3, 4] };
const cd = { c: "1", d: ["2", 3] };

const eqArrays = function(Arr1, Arr2) {
  if (Arr1.length !== Arr2.length) {
    return false;
  } else {
    for (let i = 0; i <= Arr1.length -1; i++)
    if (Arr1[i] !== Arr2[i]) {
    return false;
  } else {}
  return true;
  }
};

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

const assertObjectsEqual = function(obj1, obj2) {
    const inspect = require('util').inspect;
 
    if (eqObjects(obj1,obj2) === true) {
      return `✅✅✅ Assertion Passed there two Objects are the same ${inspect(obj1)} === ${inspect(obj2)}`
    } else {
      return `🛑🛑🛑 Assertion Failed these two Objects are not the same ${inspect(obj1)} !== ${inspect(obj2)}`
    }
  };

  console.log(assertObjectsEqual(ab,ba));
  console.log(assertObjectsEqual(cd,cd2));
