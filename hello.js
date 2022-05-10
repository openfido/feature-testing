process.argv.forEach(function (val, index, array) {
    console.log(index + ': ' + val);
  });

((inputs,outputs,options) => {
    process.stdout.write("Helloooo, console!/n");
    console.log(inputs, outputs, options);
    return "Hello, console";
})();

