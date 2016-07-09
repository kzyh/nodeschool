var map = require('through2-map');

var stream = map(write, end);

function write(buffer, encoding, next) {
    this.push(buffer.toString().toUpperCase());
}

function end () {
    done();
}

process.stdin.pipe(stream).pipe(process.stdout);
