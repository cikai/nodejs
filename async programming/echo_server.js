/**
 * use function 'on' to handle request
 * while server is running
 * use telnet 127.0.0.1:8888
 */

var net = require("net");

var server = net.createServer(function(socket) {
   socket.on('data', function(data) {
       socket.write(data);
   }); 
   
    // 也可以用once方法响应单次事件
    /*
    socket.once('data', function(data) {
       socket.write(data);
   }); 
   */
});

server.listen(8888);