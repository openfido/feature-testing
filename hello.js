const path = require('path');
const fs = require('fs');

process.argv.forEach(function (val, index, array) {
    console.log(index + ': ' + val);
    fs.readdir(val, function (err, files) {
        //handling error
        if (err) {
            return console.log('Unable to scan directory: ' + err);
        } 
        //listing all files using forEach
        files.forEach(function (file) {
            // Do whatever you want to do with the file
            console.log(file); 
        });
    });
  });

((inputs,outputs,options) => {
    process.stdout.write("Helloooo, console!/n");
    console.log(inputs, outputs, options);
    return "Hello, console";
})();