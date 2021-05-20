var http = require("http");
http.createServer( (req , res) =>{
    res.writeHead(200 , {"content-Type":"text/html"} );
    res.end("Ngo Khac <i style='color:red ;' > tien </i>.vn");
}).listen(7777);

