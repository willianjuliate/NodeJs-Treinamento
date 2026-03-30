const http = require('http');
const url = require('url')

http.createServer((request, response) => {
    
    const parseURL = url.parse(request.url, true);
    const pathName = parseURL.pathname;
    const queryParams = parseURL.query;
    
    if (pathName === '/favicon.ico') {
        response.writeHead(404)
        response.end();
        return;
    }

    console.log(queryParams)
    
    if (request.method === 'GET') {
        response.writeHead(200, {'content-type': 'text/plain; charset=utf-8'})
        response.write(`Olá, seja bem-vindo ${queryParams.name} ${queryParams.lastname}`);
        response.end();
    }

}).listen(8080);

console.log('http://localhost:8080')