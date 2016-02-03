var http = require("http");
var server = http.createServer(function(req, res) {
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.write("Hello World");
    res.end();

    // also
    // res.end("Hello World");
});

server.listen(process.env.PORT, process.env.IP);
