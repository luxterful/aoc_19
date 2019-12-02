#!/usr/bin/env node
const argv = require("yargs").argv;
var fs = require("fs");
var axios = require("axios");

const day = argv.day;
if (day < 1 || day > 25) {
  console.log("argument 'day' not in range");
  process.exit(1);
}
const file_path = `./.input_cache/${day}`;

if (!fs.existsSync(file_path)) {
  console.log(`inputfile for day ${day} not in cache. try to download.`);
  if (!fs.existsSync(".aocdownloader.conf")) {
    console.log(`no config file found!`);
    var readline = require("readline-sync");
    const session_cookie = readline.question("Please input session cookie: ");

    fs.writeFile(
      ".aocdownloader.conf",
      JSON.stringify({ session_cookie: session_cookie }),
      "utf-8",
      function(err) {
        if (err) {
          console.log("An error occured while writing JSON Object to File.");
          return console.log(err);
        }

        console.log("JSON file has been saved.");
      }
    );
    process.exit(1);
  }
  const url = `https://adventofcode.com/2019/day/${day}/input`;
}

fs.readFile(file_path, { encoding: "utf-8" }, function(err, data) {
  console.log(data);
});
