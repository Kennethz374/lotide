const flatten = function (Arrays) {
  let newArray = [];
    for (let i = 0; i <= Arrays.length - 1; i++) {
      if (Array.isArray(Arrays[i]) !== true) {
        newArray.push(Arrays[i]);
      } else if (Array.isArray(Arrays[i]) === true) {
        for (let s = 0; s <= Arrays[i].length - 1; s++) {
          newArray.push(Arrays[i][s]);
        }
      }
        } return newArray
   };
  
console.log(flatten([1,2,3,[4,5,7]]));