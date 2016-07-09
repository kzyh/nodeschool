var http = require('http');

http.get(process.argv[2], function(response) {
    var full = ''
    response.setEncoding('utf8');
    response.on('error', console.error);
    response.on('data', function(data) {
        full += data;
    });
    response.on('end', function() {
        console.log(full.length);
        console.log(full);
    })
}).on('error', console.error);
