const tail = function(data) {
  data.shift();
  return data;
};


// FUNCTION IMPLEMENTATION
const assertEqual = function(actual, expected) {
  if (actual.toString() === expected.toString()) {
    return `\uD83D\uDE00 \uD83D\uDE00 Assertion Passed ${actual} equal ${expected}`;
  } else {
    return `\uD83D\uDE00 \uD83D\uDE00 Assertion failed ${actual} Not equal ${expected}`;
  }
};

// TEST CODE//

console.log(assertEqual("Lighthouse Labs", "Bootcamp"));
console.log(assertEqual("w", "w"));

console.log(assertEqual(tail([1,4]), 5));
console.log(assertEqual(tail(["I", "Hello", "do"]), ["Hello", "do"]));
