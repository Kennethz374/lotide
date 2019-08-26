const tail = function(data) {
  data.slice(0); //slice doesn't not change length of the array
  return data;
};

module.exports = tail;

