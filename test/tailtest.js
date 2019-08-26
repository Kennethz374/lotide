// const assertEqual = require('../assertEqual');
// const tail = require('../tail');

// console.log(assertEqual("Lighthouse Labs", "Bootcamp"));
// console.log(assertEqual("w", "w"));

// console.log(assertEqual(tail([1,4]), 5));
// console.log(assertEqual(tail(["I", "Hello", "do"]), ["Hello", "do"]));

// const words = ["Yo Yo", "Lighthouse", "Labs"];
// tail(words); // no need to capture the return value since we are not checking it
// console.log(assertEqual(words.length, 3));
const assert = require('chai').assert;
const tail   = require('../tail');

describe("#tail", () => {
  it("returns ['Hello', 'do'] when enter ['I','Hello','do']", () => {
    assert.deepEqual(tail(['I','Hello', 'do']), ['Hello','do']);
  });
  it("returns ['Hello', 'do'] when enter ['KKKK','Hello','do']", () => {
    assert.deepEqual(tail(['KKKKK','Hello', 'do']), ['Hello','do']);
  });

});