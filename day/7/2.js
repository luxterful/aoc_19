const inputs = [5, 6, 7, 8, 9];
var day5_2 = require("../5/2.js");

module.exports.main = function(input) {
  let prog = input
    .trim()
    .split(",")
    .map(x => parseInt(x));

  //const all_combi = perm(inputs);
  const all_combi = [[9, 8, 7, 6, 5]];
  let all_signals = [];
  for (let i = 0; i < all_combi.length; i++) {
    let signal_in = 0;
    let programs = [[...prog], [...prog], [...prog], [...prog], [...prog]];

    let inp = [
      [all_combi[i][0]],
      [all_combi[i][1]],
      [all_combi[i][2]],
      [all_combi[i][3]],
      [all_combi[i][4]]
    ];

    do {
      for (let n = 0; n < all_combi[i].length; n++) {
        inp[n].push(signal_in);
        signal_in = day5_2.intProgInterpreter(programs[n], inp[n]).output[0];
      }
    } while (inp[4]);

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
