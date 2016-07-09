var filter = require('./program6.1.js');

filter(process.argv[2], process.argv[3], function (err, data) {
    if (err) {
        return console.error(err);
    }
    data.forEach(function(x) {
        console.log(x);
    })
});
