const http = require("http");

http.createServer((req, res) => {
    res.end("hello");
    console.log("yay");
}).listen(3000);