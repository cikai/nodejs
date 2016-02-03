var http = require('http');

var querystring = require('querystring');

var contents = querystring.stringify({
    name: 'cikai',
    email: 'cikai0923@gmail.com',
    address: 'Shenyang, Liaoning, CHINA',
});

var options = {
    host: 'cikai.me',
    path: '/index.html',
    method: 'POST',
    headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        'Content-Length' : contents.length
    }
};

var req = http.request(options, function(res) {
    res.setEncoding('utf8');
    res.on('data', function (data) {
        console.log(data);
    });
});

req.write(contents);

req.end(); 
