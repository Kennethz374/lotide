const countPosition = function(sen) {
  let words = sen.replace(/ /g, "");
  let modifiedToLC = words.toLowerCase();
  let results = {};
  let i = 0;
for (let letter of modifiedToLC) {
  
  // if (results[letter]) {
  //   results[letter] = []
  // }
  
  // results[letter].push(i);
  
  if (results[letter]) {
    results[letter].push(i);
  } else {
    // results[letter] === undefined
    results[letter] = [i];
    // results[letter] === [i]
  }
  i++;
} return results;
};
let data = "this is a Stupid Testing Code for This";
console.log(countPosition(data));