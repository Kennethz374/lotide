const middle = function (arr) {
  let newArr = [];
  if (arr.length <= 2) {
    return newArr;
  } else if (arr.length > 2 && arr.length % 2 === 0) {
    let middleIndex = arr.length / 2;
    let answer = arr.slice(middleIndex - 1, middleIndex + 1);
    return answer;
  } else if (arr.length > 2 && arr.length % 2 !== 0) {
    let middleIndex = arr.length / 2;
    let middleInt = Math.floor(middleIndex);
    let answer = arr.slice(middleInt, middleInt + 1);
    return answer;
  } 
};
module.exports = middle;

