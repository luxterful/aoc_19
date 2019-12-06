#!/usr/bin/env node
const argv = require("yargs").argv;
const fs = require("fs");
const configfile = ".aocdownloader.conf";
const cache_dir = "./.input_cache";
const colors = require("colors");
const day = argv.day;
const part = argv.part;

if (!fs.existsSync(cache_dir)) {
  fs.mkdirSync(cache_dir);
}

if (day < 1 || day > 25) {
  console.log("argument 'day' not in range");
  process.exit(1);
}
const file_path = `${cache_dir}/${day}`;

if (!fs.existsSync(file_path)) {
  console.log(`inputfile for day ${day} not in cache. try to download.`);

  if (!fs.existsSync(configfile)) {
    console.log(`no config file found!`);
    var readline = require("readline-sync");
    const session_cookie = readline.question("Please input session cookie: ");

    fs.writeFileSync(
      configfile,
      JSON.stringify({ session_cookie: session_cookie }),
      "utf-8",
      function (err) {
        if (err) {
          console.log("An error occured while writing JSON Object to File.");
          return console.log(err);
        }
        console.log("config file has been saved.");
      }
    );
  }

  const session_cookie = JSON.parse(fs.readFileSync(configfile, "utf8"))
    .session_cookie;
  const url = `https://adventofcode.com/2019/day/${day}/input`;

  var request = require("sync-request");
  var res = request("GET", url, {
    headers: {
      Cookie: `session=${session_cookie};`
    }
  });

  fs.writeFileSync(file_path, res.getBody());
}

let data = fs.readFileSync(file_path, "utf8");

const script_path = `./day/${day}/${part}.js`;
if (fs.existsSync(script_path)) {
  const result = require(script_path).main(data);
  console.log(colors.grey("Returnvalue: ") + colors.yellow(result));
} else {
  console.log(`script ${script_path} not found`);
}
