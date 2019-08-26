// const middle = require('../middle');
// const assertArraysEqual = require('../assertArraysEqual');


// console.log(assertArraysEqual(middle([1,2,4,5,6]),[4]));
// console.log(assertArraysEqual(middle([1,2,3,4,5,6,7]),[4]));
// console.log(assertArraysEqual(middle(["1", "2", "3"]), ["2"]));
// console.log(assertArraysEqual(middle(["1", "2", "3","4"]), ["2","3"]));

const assert = require('chai').assert;
const middle   = require('../middle');

describe("#middle", () => {
  it("returns [4] when enter [1,2,4,5,6]", () => {
    assert.deepEqual(middle([1,2,4,5,6]), [4]);
  });
  it("returns ['1', '2', '3'] when enter ['2']", () => {
    assert.deepEqual(middle(['1', '2', '3']), ['2']);
  });

});