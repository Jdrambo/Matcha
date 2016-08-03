const EventEmitter = require('events');

let myEvent = new EventEmitter();

myEvent.on('playSound', function(){
    console.log('Le son est allumé');
});
           
myEvent.emit('playSound');

/*const http = require('http');
const fs = require('fs');
let url = require('url');
const hostname = '127.0.0.1';
const port = 8080;

const server = http.createServer((req, res) => {
    fs.readFile('index.html', 'utf-8', (err, data) => {
        if (err){
            // S'il y a une erreur à la lecture du fichier index.html on lit le fichier 404.html
            fs.readFile('404.html', 'utf-8', (err, data) => {
                if (err){
                    // S'il y a une erreur à la lecture du fichier 404.html alors on envoie une erreur 500
                    res.writeHead(500, {'ContentType': 'text/html; charset=utf-8'});
                    res.end(`Oups ! il y a un problème avec le serveur`);
                }
                else {
                    res.writeHead(404, {'ContentType': 'text/html; charset=utf-8'});
                    res.end(data);
                }
            });
           
        }
        else{
            let query = url.parse(req.url, true).query;
            let name = query.name === undefined ? 'anonyme' : query.name;
            res.writeHead(200, {'ContentType': 'text/html; charset=utf-8'});
            data = data.replace('{{name}}', name);
            res.write(data);
            res.end();
        }
    })
})


server.listen(port, hostname, () => {
	console.log(`Bienvenue sur le serveur de Jdrambo
Server running at http://${hostname}:${port}/`);
})*/