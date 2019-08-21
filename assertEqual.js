// FUNCTION IMPLEMENTATION
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    return `✅✅✅ Assertion Passed ${actual} equal ${expected}`;
  } else {
    return `🛑🛑🛑 Assertion Failed ${actual} Not equal ${expected}`;
  }
};

// TEST CODE//

console.log(assertEqual("Lighthouse Labs", "Bootcamp"));
console.log(assertEqual(1, "1"));