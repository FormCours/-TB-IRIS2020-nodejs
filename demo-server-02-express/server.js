const express = require('express');
const bodyParser = require('body-parser');

// Création d'un serveur web
const app = express();

// Ajout d'un middleware pour traiter le body des requetes POST
// - Pour les données de type "application/json"
app.use(bodyParser.json());

// - Pour les données des formulaires html => "application/x-www-form-urlencoded"
//   https://developer.mozilla.org/fr/docs/Web/HTTP/M%C3%A9thode/POST
app.use(bodyParser.urlencoded({extended: true}));

/******************************************************************************/


// Ajout d'une route vers "/" en protocole GET
app.get('/', (req, res) => {
    res.send('Hello World');
})

// Ajout d'une route avec parametre
app.get('/parametre/:clef', (req, res) => {
    console.log(req.params);
    const {clef} = req.params;
    
    res.send(`La clef est « ${clef} »`);
    // res.send('La clef est « ' + clef + ' »');
})

app.get('/parametre/chiffre/:nb([0-9]|([1-9][0-9]+))', (req, res) => {
    const nb = parseInt(req.params.nb);
    
    res.send(`Le nombre est « ${nb} »`);
});

/******************************************************************************/


// Chainnage de route
// - Une seul réponse possible !
app.get('/chaine/:id', (req, res, next) => {
    console.log('Chaine 1');

    next();
})
app.get('/chaine/:id', (req, res, next) => {
    console.log('Chaine 2');

    res.send('Test Chaine !');
    next();
})
app.get('/chaine/:id', (req, res, next) => {
    console.log('Chaine 3');

    next();
})

/******************************************************************************/


// Parametre de type « GET »
app.get('/query', (req, res) => {
    console.log(req.query);
    const {firstname, lastname} = req.query;

    res.send(`Utilisateur ${firstname} ${lastname}`);
});

// Parametre de type « POST »
app.post('/query', (req, res) => {
    console.log(req.body);
    const {firstname, lastname} = req.body; // Necessite "body-parser"

    res.send(`Utilisateur ${firstname} ${lastname}`);
});

/******************************************************************************/


// Demarrer le serveur web
app.listen(8080, () => {
    console.log('Le serveur ecoute le port 8080');
})