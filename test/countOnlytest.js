const assert = require('chai').assert;
const countOnly = require('../countOnly');

describe("#countOnly", () => {
  it("returns {'Fang': 2,'Jason': 1} for ['Karl','Salima','Agouhanna','Fang','Kavith','Jason','Salima','Fang','Joe']", () => {
    assert.deepEqual(countOnly(['Karl','Salima','Agouhanna','Fang','Kavith','Jason','Salima','Fang','Joe'],{ "Jason": true, "Karima": true, "Fang": true }), {'Fang': 2,'Jason': 1});
  });
});
const firstNames = [
  "Karl",
  "Salima",
  "Agouhanna",
  "Fang",
  "Kavith",
  "Jason",
  "Salima",
  "Fang",
  "Joe"
];
// const itemsToCount = { "Jason": true, "Karima": true, "Fang": true }
// const result1 = countOnly(firstNames, { "Jason": true, "Karima": true, "Fang": true });
// console.log(result1);
// // console.log(assertEqual(result1["Jason"], 1));
// // console.log(assertEqual(result1["Karima"], undefined));
// console.log(assertEqual(result1["Fang"], 2));