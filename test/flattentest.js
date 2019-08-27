const assert = require('chai').assert;
const flatten = require('../flatten');

describe("#flatten", () => {
  it("returns [1,2,3,4,5,6] for [[1,2,3,4,5],[6]]", () => {
    assert.deepEqual(flatten([[1,2,3,4,5],[6]]), [1,2,3,4,5,6]);
  });
  it("returns [1,2,3,4,5] for [[1,2],[3,4,5]]", () => {
    assert.deepEqual(flatten([[1,2],[3,4,5]]), [1,2,3,4,5]); 
  });
  it("returns [3,4,5,6,7,8] for [[3],[4],[5],[6],[7],8]", () => {
    assert.deepEqual(flatten([[3],[4],[5],[6],[7],8]), [3,4,5,6,7,8]); 
  });
  it("returns [1,2,3,4,5] for [1,2,[3],4,[5]]", () => {
    assert.deepEqual(flatten([1,2,[3],4,[5]]), [1,2,3,4,5]); 
  });

});
// console.log(assertArraysEqual(eqArrays([1, 2, 3], [1, 2, 3]), true));
// console.log(assertArraysEqual(eqArrays([1, 2, 3], [3, 2, 1]), false));
// console.log(assertArraysEqual(eqArrays(["1", "2", "3"], ["1", "2", "3"]), true));
// console.log(assertArraysEqual(eqArrays(["1", "2", "3"], ["1", "2", 3]), false));