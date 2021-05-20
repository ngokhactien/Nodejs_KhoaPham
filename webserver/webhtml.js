var http = require("http") ;
var fs = require("fs") ;
http.createServer( (req , res) => {
    res.writeHead(200 , {"Content-Type":"text/html"});

    // đọc file rồi chả về res
    // var data = fs.readFileSync(__dirname + "/web.html" , "utf-8" ) ;
    // data = data.replace("{NAME}" , "KHACTIEN");
    // res.end(data);

    // trả thẳng vào res 
    fs.createReadStream( __dirname + "/web.html").pipe(res);
}).listen(6626);

