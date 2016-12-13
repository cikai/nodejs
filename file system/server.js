var http = require("http");
var server = http.createServer();
var fs = require("fs");

server.on("request", function (req, res) {
  fs.readFile("/home/ubuntu/test/fs-operation/city.json",{encoding:'utf8',flag:'r'}, function(err, data) {
    res.writeHead(200, {"Content-Type": "application/json"});
    res.write(data);
    res.end();
  });
});

server.listen(8888);
