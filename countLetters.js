const countLetters = function(sen) {
  let words = sen.replace(/ /g, "");
  let modifiedToLC = words.toLowerCase();
  let results = {};
for (let letters of modifiedToLC) {
  if (results[letters]) {
    results[letters] += 1;
  } else {
    results[letters] = 1 ;
  }
} return results;
};
let data = "this is a Stupid Testing Code for This";
console.log(countLetters(data));