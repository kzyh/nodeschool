var split = require('split');
var map = require('through2-map')

var which = false;

var stream = map(write, end);

function write(buffer, encoding, next) {
    if (which) {
        this.push(buffer.toString().toUpperCase() + '\n');
        which = !which;
    } else {
        this.push(buffer.toString().toLowerCase() + '\n');
        which = !which;
    }
    next;
}

function end () {
    done();
}

process.stdin.pipe(split()).pipe(stream).pipe(process.stdout);
