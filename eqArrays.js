
const eqArrays = function(Arr1, Arr2) {
  if (Array.isArray(Arr1) && Array.isArray(Arr2)) {
    if (Arr1.length !== Arr2.length) {
    return false;
    } else {
    for (let i = 0; i <= Arr1.length -1; i++)
    if (Arr1[i] !== Arr2[i]) {
      return false;
    } else {}
    return true;
  }
} 
return false
};
module.exports = eqArrays;

