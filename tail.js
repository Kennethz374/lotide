const tail = function(data) {
  data.slice(0); //slice doesn't not change length of the array
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

const words = ["Yo Yo", "Lighthouse", "Labs"];
tail(words); // no need to capture the return value since we are not checking it
console.log(assertEqual(words.length, 3));

///data length fail come back ///