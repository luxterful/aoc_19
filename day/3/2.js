var day1 = require("./1.js");

module.exports.main = function(input) {
  const [l1, l2] = input.split(/\r?\n/);
  a = l1.split(",");
  b = l2.split(",");

  let dict = { "0,0": 0 };
  day1.walk(a, dict, "a");
  day1.walk(b, dict, "b");

  let cross_key = [];

  Object.keys(dict).forEach(function(key) {
    if (dict[key] == ".") {
      cross_key.push(key);
    }
  });

  let all_dist = [];
  for (var i = 0, len = cross_key.length; i < len; i++) {
    all_dist.push(
      walk_to_cross(a, cross_key[i]) + walk_to_cross(b, cross_key[i])
    );
  }
  return all_dist.sort(function(a, b) {
    return a - b;
  });
};

const walk_to_cross = (arr, cross) => {
  let pnt = [0, 0]; // [x, y]
  let steps = 0;
  for (var i = 0, len = arr.length; i < len; i++) {
    const val = parseInt(arr[i].slice(1));
    const op = arr[i].slice(0, 1);
    for (var s = 0; s < val; s++) {
      switch (op) {
        case "U":
          pnt[1]++;
          break;
        case "R":
          pnt[0]++;
          break;
        case "D":
          pnt[1]--;
          break;
        case "L":
          pnt[0]--;
          break;
      }
      steps++;
      if (day1.pnt_2_str(pnt) == cross) {
        return steps;
      }
    }
  }
};
