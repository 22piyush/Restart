const http = require('http');

const PORT = 3009;

const server = http.createServer(function listener(){



})

server.listen(PORT, function exec(){

    console.log(`Server is Running on PORT: ${PORT}`);
    
});