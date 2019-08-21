// FUNCTION IMPLEMENTATION
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    return `\✅✅✅Assertion Passed both return the same value`;
  } else {
    return `\🛑🛑🛑 Assertion failed they did not return the same value`;
  }
};

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
const countOnly = function(allItems, itemsToCount) {
  const results = {};

  for(const item of allItems) {
    if (itemsToCount[item]) {
    if (results[item]) {
      results[item] += 1;
    } else {
      results[item] = 1;
    }
    }
  }

  return results;
};

const result1 = countOnly(firstNames, { "Jason": true, "Karima": true, "Fang": true });
console.log(result1);
console.log(assertEqual(result1["Jason"], 1));
console.log(assertEqual(result1["Karima"], undefined));
console.log(assertEqual(result1["Fang"], 2));