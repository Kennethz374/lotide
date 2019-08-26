
const eqArrays = function(Arr1, Arr2) {
  
  for (let i = 0; i <= Arr1.length -1; i++)
  if (Arr1[i] !== Arr2[i]) {
    return false;
  } else {}
  return true;
};
module.exports = eqArrays;

