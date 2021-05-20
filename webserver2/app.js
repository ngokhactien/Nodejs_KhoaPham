var express = require("express");
const { resourceUsage } = require("process");
var app = express();
var server = require("http").createServer(app);
server.listen(4444);

app.get("/tien" , (req , res) => {
    // res.send("  <font style='color: pink;'>hello tiến </font>") 
    res.sendFile(__dirname + "/index.html")
})

app.get("/tinhtong/:so1/:so2" , (req , res) => {
    // res.send("  <font style='color: pink;'>hello tiến </font>")  // đọc văn bản 
    // res.sendFile(__dirname + "/index.html")    // đọc file html web
    var n = req.params.so1 ;
    so1 = parseInt(n);
    var m = req.params.so2 ;
    so2 = parseInt(m);
    
    res.send("<h1 style = 'color : red'> Kết quả : "   + so1 + " + "  + so2    + " = " + (so1 + so2 ) + "</h1>")
    
})