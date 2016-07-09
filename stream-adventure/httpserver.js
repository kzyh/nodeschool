var http = require('http');
var fs = require('fs');
var map = require('through2-map');

var stream = map(write, end);

function write(buffer, encoding, next) {
    this.push(buffer.toString().toUpperCase());
}

function end () {
    done();
}

var server = http.createServer(function (req, res) {
    if (req.method === 'POST') {
        req.pipe(stream).pipe(res);
    }
});
server.listen(process.argv[2]);
