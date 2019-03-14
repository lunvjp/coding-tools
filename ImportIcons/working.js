/**
 * Steps
 * - Get all filenames in current folder.
 * - Write some code
 * - Create new file with code like below
 */

var path = require('path');
var fs = require('fs');
//
/* Config stuff */
const outputFileName = 'index.js';
//
var files = fs.readdirSync('./');
const get_name = (string) => {
  return string.split('.')[0];
}

// Get current file name
const currentFileName = __filename.split(/[\\/]/).pop();

// Read
let output = '';
files.forEach(function (item, index) {

  //
  if (item !== currentFileName && item !== outputFileName) {
    var name = get_name(item);
    output += `export * from "./${name}";\n`;
  }
  //
})

// Write
fs.writeFile(`./${outputFileName}`, output, function(err) {
  if(err) {
    return console.log(err);
  }

  console.log("The file was saved!");
});

/*
export * from 'ThingA';
export * from 'ThingB';
export * from 'ThingC';
 */
