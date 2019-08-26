// FUNCTION IMPLEMENTATION
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    return `✅✅✅ Assertion Passed ${actual} equal ${expected}`;
  } else {
    return `🛑🛑🛑 Assertion Failed ${actual} Not equal ${expected}`;
  }
};
module.exports = assertEqual;
// TEST CODE//

