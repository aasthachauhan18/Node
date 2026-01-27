// let http = require("http");
// import http from "http"
const http = require('http');
const fs = require('fs')
const path = require('path');
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
        const filePath = path.join(__dirname,'pages','Home.html');

        fs.readFile(filePath, (err,data) => {
            if(err){
                res.writeHead(500, {'content-type' : 'text/html'});
                return res.end('<h1>500 - server error');
            }
            res.writeHead(200 , {'content-type' : 'text/html'});
            res.end(data);
        });

        // res.end("Home page");
    } else if (req.url==="/about") {
         const filePath = path.join(__dirname,'pages','About.html');

        fs.readFile(filePath, (err,data) => {
            if(err){
                res.writeHead(500, {'content-type' : 'text/html'});
                return res.end('<h1>500 - server error');
            }
            res.writeHead(200 , {'content-type' : 'text/html'});
            res.end(data);
        });
        // res.end("<h1>Hello</h1>")
        // res.end("test")
    } 
    // else if (req.url === "/json") {
    //     const data = {
    //         name:"Node Server",
    //         status:"Running"
    //     };
    //     res.setHeader("Content-type","applocation/json");
    //     res.end(JSON.stringify(data));
    // }
    else{
        res.statusCode = 404;
        res.end("Page not found");
    }
    // res.end("Request logged");
    // res.end("This is the example of node.js web-based application\n");
}).listen(5000, () => console.log("server started at localhost:5000"))



