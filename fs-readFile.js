/**
 * author: cikai
 * 
 * fs.readFile()读取文件系统为异步
 * 所以下面代码先输出的是err
 * fs.readFileSync(filename, [encoding])是 fs.readFile 同步的版本
 * 如果有错误发生，fs 将会抛出异常，需要使用 try 和 catch 捕捉并处理异常
 * 
 * */

var fs = require('fs');

// 输出（未指定编码）: 
// <Buffer 6e 6f 64 65 2e 6a 73 e6 96 87 e4 bb b6 e7 b3 bb e7 bb 9f e6 b5 8b e8 af 95>
fs.readFile('content.txt', function(err, data) {
    if (err) {
        console.error(err);
    } else {
        console.log(data);
    }
}); 

// 输出（指定编码）:
// node.js文件系统测试
fs.readFile('content.txt', 'utf-8', function(err, data) {
    if (err) {
        console.error(err);
    } else {
        console.log(data);
    }
}); 

// 文件不存在，输出err
fs.readFile('no-such-file.txt', 'utf-8', function(err, data) {
    if (err) {
        console.error(err);
    } else {
        console.log(data);
    }
});