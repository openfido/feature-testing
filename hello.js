const path = require('path');
const fs = require('fs');

let args = process.argv.slice(2);

args.forEach(function (val, index, array) {
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
            fs.readFile(`${val}/${file}`, (err, data) => {
                if (err) throw err;
                console.log(data);
                const str = String.fromCharCode.apply(null, new Uint16Array(data));
                console.log(str);
                var urlRegex = /(https?:\/\/[^\s]+)/g;
                const array = [...str.matchAll(urlRegex)];
                console.log(array);
              }); 
        });
    });
  });

((inputs,outputs,options) => {
    process.stdout.write("Helloooo, console!\n");
    console.log(inputs, outputs, options);
    return "Hello, console";
})();