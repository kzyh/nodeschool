var fs = require('fs');
var path = require('path');

fs.readdir(process.argv[2], function doneReading(err, list) {
    for (var x in list) {
        if (path.extname(list[x]) === '.' + process.argv[3]) {
            console.log(list[x]);
        }
    }
});
