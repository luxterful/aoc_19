const mass2fuel = mass => Math.floor(mass / 3) - 2;

var fs = require("fs");
fs.readFile("input", { encoding: "utf-8" }, function(err, data) {
  const input_arr = data.split(/\r?\n/);
  let fuel_amount = 0;
  input_arr.forEach(el => {
    let extra_mass = el;
    do {
      extra_mass = mass2fuel(extra_mass);
      if (extra_mass > 0) {
        fuel_amount += extra_mass;
      } else {
        break;
      }
    } while (true);
  });
  console.log(fuel_amount);
});
