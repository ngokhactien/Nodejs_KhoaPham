var http = require("http");
var fs = require("fs");
http.createServer((req , res)=>{
    res.writeHead(200 , { "content-Type":"caplication/json"});
    var obj = {
        ho  : 'ngô' ,
        Tên : 'Tiến' ,
        sdt : 1987 
    } ;
    res.end(JSON.stringify(obj)) ; 
}).listen(4124);