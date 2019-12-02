module.exports.main = function(input) {
  const arr = input.split(/\r?\n/);
  let sum = 0;
  arr.forEach(el => {
    if (el) {
      sum += Math.floor(el / 3) - 2;
    }
  });
  return sum;
};
