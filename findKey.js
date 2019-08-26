// let data = {
//   "Blue Hill": { stars: 1 },
//   "Akaleri":   { stars: 3 },
//   "noma":      { stars: 2 },
//   "elBulli":   { stars: 3 },
//   "Ora":       { stars: 2 },
//   "Akelarre":  { stars: 3 }
// };


const findKey = function (obj, callback) {
  let r = "";
  for (let property in obj) {
      if (callback(obj[property])) {
         r += `${property} \n`;

      }
    }
    return r;
};
// const result = findKey(data, x => x.stars === 2);

module.exports = findKey;



//
// const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
// const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];

// const takeUntil = function (data, callback) {
//   let index = 0;
//   for (let element of data) {
//     if (callback(element)) {
//     return element;
//   }
//   }
// };
// const results = takeUntil(data1, x => x < 0); //callback func
// console.log(results);