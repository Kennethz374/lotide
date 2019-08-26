const middle = require('../middle');
const assertArraysEqual = require('../assertArraysEqual');


console.log(assertArraysEqual(middle([1,2,4,5,6]),[4]));
console.log(assertArraysEqual(middle([1,2,3,4,5,6,7]),[4]));
console.log(assertArraysEqual(middle(["1", "2", "3"]), ["2"]));
console.log(assertArraysEqual(middle(["1", "2", "3","4"]), ["2","3"]));
