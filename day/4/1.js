module.exports.main = function(input) {
  let [low, high] = input.split("-");
  low = parseInt(low);
  high = parseInt(high);

  let pw_counter = 0;
  for (let pw = low; pw < high; pw++) {
    if (check_pw(pw)) {
      pw_counter++;
    }
  }
  return pw_counter;
};

const check_pw = pw => {
  const pw_arr = pw.toString().split("");

  const pw_arr_cp = Array.from(pw_arr);
  if (pw_arr_cp.sort().toString() != pw_arr.toString()) {
    return false;
  }

  for (let i = 0; i < pw_arr.length - 1; i++) {
    if (pw_arr[i] == pw_arr[i + 1]) {
      console.log(pw_arr);
      return true;
    }
  }

  return false;
};
