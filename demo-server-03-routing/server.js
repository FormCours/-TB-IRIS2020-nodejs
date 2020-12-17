const express = require('express');
const bodyParser = require('body-parser');
const config = require('./config/server.json');

// Création du serveur
const app = express();

// Gestion du body via le middleware 'body-parser'
app.use(bodyParser.urlencoded({extended: true}));

// Ajouter les routes
const homeRouter = require('./routes/home');
const formRouter = require('./routes/form');
const demoRouter = require('./routes/demo');
app.use('/home', homeRouter);
app.use('/form', formRouter);
app.use('/demo', demoRouter);

// Demarrage du serveur
app.listen(config.port, () => {
    console.log(`Server listen on port ${config.port}`);
})