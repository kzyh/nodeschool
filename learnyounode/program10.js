var net = require('net');

function zeroFill(time) {
	if (time < 10) {
		return "0" + time;
	}
	else {
		return time;
	}
}

function getDate() {
    var date = new Date();
    return date.getFullYear() + '-'
        + zeroFill(date.getMonth() + 1) + '-'
        + zeroFill(date.getDate()) + ' '
        + zeroFill(date.getHours()) + ':'
        + zeroFill(date.getMinutes());
}
var server = net.createServer(function (socket) {
    socket.end(getDate() + '\n');
})

server.listen(process.argv[2]);
