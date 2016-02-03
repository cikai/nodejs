var http = require('http')
var opt = {
    host: '64.233.162.83',
    port: '80',
    method: 'POST',
    path: 'http://www.google.com.tw',
    headers: {
    
    }
}

var opt2 = {
    host: '61.135.169.125',
    port: '80',
    method: 'POST',
    path: 'http://www.baidu.com',
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