let http = require("http");

http.createServer((req,res) =>{
    res.end("This is the example of node.js web-based application\n");
}).listen(5000, () => console.log("server started at localhost:5000"))