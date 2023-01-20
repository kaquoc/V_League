

const http = require('http');
const PORT = 3000;

//jQuery for traversing DOM
const cheerio = require('cheerio');

const server = http.createServer((req, res) =>{
    res.statusCode = 200;
    res.setHeader("Content-Type","text/plain");
    res.end("Hello World");
})

server.listen(PORT, () => {
    console.log('server running at Port: ${PORT}/');
})