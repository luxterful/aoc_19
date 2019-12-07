const inputs = [0, 1, 2, 3, 4];
var day5_2 = require("../5/2.js");

module.exports.main = function(input) {
  let prog = input
    .trim()
    .split(",")
    .map(x => parseInt(x));

  const all_combi = perm(inputs);
  let all_signals = [];
  for (let i = 0; i < all_combi.length; i++) {
    let signal_in = 0;
    for (let n = 0; n < all_combi[i].length; n++) {
      signal_in = day5_2.intProgInterpreter(
        [...prog],
        [all_combi[i][n], signal_in]
      ).output[0];
    }
    all_signals.push(signal_in);
  }
  return all_signals.sort(function(a, b) {
    return b - a;
  });
};

// this function was stolen from stackoverflow
const perm = a => {
  if (a.length) {
    return a.reduce(
      (r, v, i) => [
        ...r,
        ...perm([...a.slice(0, i), ...a.slice(i + 1)]).map(x => [v, ...x])
      ],
      []
    );
  } else {
    return [[]];
  }
};
