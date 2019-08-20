// FUNCTION IMPLEMENTATION
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    return `\uD83D\uDE00 \uD83D\uDE00 Assertion Passed ${actual} equal ${expected}`;
  } else {
    return `\uD83D\uDE00 \uD83D\uDE00 Assertion failed ${actual} Not equal ${expected}`;
  }
};

// TEST CODE//

console.log(assertEqual("Lighthouse Labs", "Bootcamp"));
console.log(assertEqual("w", "w"));