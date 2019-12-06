module.exports.main = function (input) {
  input = input.split(",");

  input[1] = 12;
  input[2] = 2;

  for (let i = 0; ; i += 4) {
    if (input[i] == 1) {
      input[input[i + 3]] = input[input[i + 1]] + input[input[i + 2]];
    } else if (input[i] == 2) {
      input[input[i + 3]] = input[input[i + 1]] * input[input[i + 2]];
    } else if (input[i] == 99) {
      return input[0];
    } else {
      console.log("sth went wrong bljad");
      return;
    }
  }
};
