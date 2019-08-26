// let bestTVShowsByGenre = { 
//   sci_fi: "The Expanse",
//   comedy: "Brooklyn Nine-Nine",
//   drama:  "The Wire"
// };

const findKeyByValue = function (obj, value) {
  for (let keyName in obj) {
    if (obj[keyName] !== true) {
      if (obj[keyName] === value) {
        return keyName;
      }
    }
  }
};
module.exports = findKeyByValue;
// console.log(findKeyByValue(bestTVShowsByGenre, "The Wire"));
