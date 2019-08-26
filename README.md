# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @kennethz374/lotide`

**Require it:**

`const _ = require('@kennethz374f/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:


* `head(Array)`: it only show the first element of the array.
* `tail(Array)`: it slices out the first element of the array
* `middle(Array)`: get the middle element in a array; if array length is even, it will return the middle two element of the array. if the array length is odd it will return the middle element of the array;if the array length is less than 2, it will return undefined, 
* `assertArraysEqual(actualArr,ExpectedArr)`: comparing whehter the acutal array and the expected array are identical, then print out a pass or fail message.
* `eqArrays(Array1, Array2)`: comparing whether two arrays are identical
* `assertEqual(actual, expected)`: comparing whether the actual value and the expected value are identical,then print out a pass or fail message.
* `countLetters(String)`: count the total appearance of each letter and return an object with letter : times of occurance.
* `countOnly(obj1, obj2)`: obj1 is the source and obj2 are the items that you want to count. it will return an object contains item name and numbe of its occurance;
* `eqObjects(obj1,obj2)`: to determine whether two objects are identical

* `findKey(obj1,callback)`: figure out the property name, can use callback to modified condition
* `findKeyByValue(obj,value)`: figure out the property name, given the value of property
* `flatten(Array)`:  an array with other arrays inside, it can flatten it into a single-level array.
* `letterPositions(String)`: when enter a string, it will return an object that shows the positon of each letter
* `map(array,calback)`: map will loop through each element of the array and make modification with the callback function.
* `takeUntil(array,callback)`: takeUntil will keep collecting items from a provided array until the callback provided returns a truthy value.
* `without(ArrOfSrc,ArrOfRemove)`: This function should take in a source array and a itemsToRemove array. It should return a new array with only those elements from source that are not present in the itemsToRemove array
* `assertObjectsEqual(actualObj,ExpectedObj)`: compare whether the acutal object and the expected object are identical, then print out a pass or fail message.

