var http = require('http');

var urls = []
for (var i = 2; i < process.argv.length; i++) {
    urls[i-2] = process.argv[i];
}
var retval = [];
var count = 0;

function getData(listOfURL) {
    listOfURL.forEach(function(x, i) {
        http.get(x, function(response) {
            var full = ''
            response.setEncoding('utf8');
            response.on('error', console.error);
            response.on('data', function(data) {
                full += data;
            })
            response.on('end', function() {
                count++;
                retval[i] = full;
                if (count == listOfURL.length) {
                    print();
                }
            })
        }).on('error', console.error);
    })
};

function print() {
    retval.forEach(function(x) {
        console.log(x);
    })
}

getData(urls);
