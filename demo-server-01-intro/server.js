const http = require('http');
const url = require('url');
const qs = require('querystring');

// Création d'un web serveur
const server = http.createServer((request, response) => {
    // request  => Incoming Message
    // response => Server Response
    if(request.url === '/favicon.ico') {
        return;
    }

    const urlInfo = url.parse(request.url);
    console.log(urlInfo);

    const qsInfo = qs.parse(urlInfo.query)
    console.log(qsInfo);

    // Demo de l'envoie d'une réponse
    // - Définition du header
    response.writeHead(200, {"Content-Type": "text/html"});

    // - Ajout de contenu dans la reponse
    response.write('<!DOCTYPE html><html lang="fr"><body>Hello World !</body></html>');

    // - Envoie de la réponse au client
    response.end();
});

// Démarrage du web server sur le port 8080
server.listen(8080, () => {
    console.log('Web server start on port 8080');
});
