module.exports.main = function(input) {
  const [l1, l2] = input.split(/\r?\n/);
  a = l1.split(",");
  b = l2.split(",");

  let dict = { "0,0": 0 };
  walk(a, dict, "a");
  walk(b, dict, "b");

  let cross = [];

  Object.keys(dict).forEach(function(key) {
    if (dict[key] == ".") {
      let [x, y] = key.split(",");
      cross.push(Math.abs(parseInt(x)) + Math.abs(parseInt(y)));
    }
  });

  return cross.sort(function(a, b) {
    return a - b;
  });
};

const walk = (arr, dict, l) => {
  let pnt = [0, 0]; // [x, y]
  for (var i = 0, len = arr.length; i < len; i++) {
    const op = arr[i].slice(0, 1);
    const val = parseInt(arr[i].slice(1));
    switch (op) {
      case "U":
        for (var s = 0; s < val; s++) {
          pnt[1]++;
          step(pnt, dict, l);
        }
        break;
      case "R":
        for (var s = 0; s < val; s++) {
          pnt[0]++;
          step(pnt, dict, l);
        }
        break;
      case "D":
        for (var s = 0; s < val; s++) {
          pnt[1]--;
          step(pnt, dict, l);
        }
        break;
      case "L":
        for (var s = 0; s < val; s++) {
          pnt[0]--;
          step(pnt, dict, l);
        }
        break;
    }
  }
};
exports.walk = walk;

const step = (pnt, dict, l) => {
  const pos = pnt_2_str(pnt);
  if (dict[pos] == l || !dict[pos]) {
    dict[pos] = l;
  } else {
    dict[pos] = ".";
  }
};

const pnt_2_str = pnt => {
  return pnt[0] + "," + pnt[1];
};
exports.pnt_2_str = pnt_2_str;
