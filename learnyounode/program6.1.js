function filterLS(dir, ext, callback) {
    var fs = require('fs');
    var path = require('path');
    var retval = []
    fs.readdir(dir, function(err, list) {
        if (err) {
            return callback(err);
        } else {
            list.forEach(function(file) {
                if (path.extname(file) == '.' + ext) {
                    retval.push(file);
                }
            })
        }
        callback(null, retval);
    });
}

module.exports = filterLS
