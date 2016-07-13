const http = require('http');
const hostname = '127.0.0.1';
const port = 8080;

const server = http.createServer((req, res)=> {
	res.statusCode = 200;
	res.setHeader('ContentType', 'text/plain');
	res.end('Bonjour bienvenue sur Matcha 9:10');
});


server.listen(port, hostname, () => {
	console.log(`Server running at http://${hostname}:${port}/`);
});