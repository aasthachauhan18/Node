// let http = require("http");
import http from "http"
// const server = http.createServer((req,res) =>{
//     console.log("URL: ",req.url);
//     console.log("Method :" ,req.method);
//     console.log("Headers:",req.headers);
//     res.end("Request logged");


// });
// server.listen(3000);


http.createServer((req,res) =>{
        console.log("URL: ",req.url);
    console.log("Method :" ,req.method);
    console.log("Headers:",req.headers);
    
    if (req.url === "/") {
        res.end("Home page");
    } else if (req.url==="/about") {
        res.end("<h1>Hello</h1>")
        // res.end("test")
    } else if (req.url === "/json") {
        const data = {
            name:"Node Server",
            status:"Running"
        };
        res.setHeader("Content-type","applocation/json");
        res.end(JSON.stringify(data));
    }
    else{
        res.statusCode = 404;
        res.end("Page not found");
    }
    res.end("Request logged");
    res.end("This is the example of node.js web-based application\n");
}).listen(5000, () => console.log("server started at localhost:5000"))



