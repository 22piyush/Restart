const http = require("http");

const server = http.createServer((req,res) => {
    res.end("Hello World");
})

const a = server.listen(4000, () => {
    console.log("Server Running on 4000");
    
})