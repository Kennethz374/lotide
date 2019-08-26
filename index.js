const head   = require('./head');
const tail   = require('./tail');
const middle = require('./middle');
const assertArraysEqual = require('./assertArraysEqual');
const eqArrays = require('./eqArrays');
const assertEqual = require('./assertEqual');
const countLetters = require('./countLetters');
const countOnly = require('./countOnly');
const eqObjects = require('./eqObjects');
const findKey = require('./findKey');
const findKeyByValue = require('./findKeyByValue');
const letterPositions = require('./letterPositions');
const map = require('./map');
const takeUntil = require('./takeUntil');
const without = require('./without');
const flatten = require('./flatten');
const assertObjectsEqual = require('./assertObjectsEqual');



module.exports = {
  head:   head,
  tail:   tail,
  middle: middle,
  assertArraysEqual: assertArraysEqual,
  eqArrays: eqArrays,
  assertEqual:assertEqual,
  countLetters:countLetters,
  countOnly:countOnly,
  eqObjects:eqObjects,
  findKey:findKey,
  findKeyByValue:findKeyByValue,
  flatten:flatten,
  letterPositions:letterPositions,
  map:map,
  takeUntil:takeUntil,
  without:without,
  assertObjectsEqual:assertObjectsEqual
};