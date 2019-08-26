const without = function(source, itemsToRemove) {
  let arr = [];
  
  for (let i = 0; i <= source.length - 1; i++) {
      if (itemsToRemove.includes(source[i]) === false) {
        arr.push(source[i]);
      } 
    
  }return arr
};
module.exports = without;