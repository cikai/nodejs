var http = require('http')
var opt = {
    host: '64.233.162.83',
    port: '80',
    method: 'POST',
    path: 'http://www.google.com',
    headers: {
    
    }
}

var opt2 = {
    host: '61.135.169.125',
    port: '443',
    method: 'POST',
    path: 'https://www.baidu.com',
    headers: {
    
    }
}

var body = '';
var req = http.request(opt, function(res) {
    console.log("Got response: " + res.statusCode);
    res.on('data', function(d) {
        body += d;
    }).on('end', function() {
        console.log(res.headers)
        console.log(body)
    });
}).on('error', function(e) {
    console.log("Got error: " + e.message);
})

req.end();

var server = http.createServer(function (req, res) {
	res.writeHead(200, {'Content-Type': 'text/html'});
	res.end(body);
});

server.listen(process.env.PORT, process.env.IP);
