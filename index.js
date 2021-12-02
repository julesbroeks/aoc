// config //
let overrideDay = null; // set to number to overwrite default (today)

// imports //
let fs = require('fs');
let logic = require("./logic/day-" + overrideDay ?? new Date().getDate());


let input = null;
let filename = "input/day-" + (overrideDay ?? new Date().getDate()) + ".txt";

fs.readFile(filename, 'utf8', function(err, data) {
  if (err) throw err;
  input = data;
  console.log('Succesfully loaded: ' + filename);
  logic.start(input, overrideDay ?? new Date().getDate());
});
