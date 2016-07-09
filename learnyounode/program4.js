var fs = require('fs');
var path = process.argv[2];
fs.readFile(path, "utf8", function doneReading(err, data) {
    console.log(data.split('\n').length-1);
});
