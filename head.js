const head = function(data) {
  return data[0];
}



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

console.log(assertEqual(head([5,6,7]), 5));
console.log(assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello"));
