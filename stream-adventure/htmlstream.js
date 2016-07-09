var trumpet = require('trumpet');
var map = require("through2");

function write(buffer, encoding, next) {
    this.push(buffer.toString().toUpperCase());
}

function end () {
    done();
}

var tr = trumpet();
process.stdin.pipe(tr).pipe(process.stdout);

var stream = tr.select('.loud').createStream();
stream.pipe(map(write, end)).pipe(stream);
