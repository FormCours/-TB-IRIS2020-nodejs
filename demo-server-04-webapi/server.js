const express = require('express');
const bodyParser = require('body-parser');
const logger = require('./utils/logger');

// Load le fichier de config
const config = require('./config/app.json');


// Création de l'app express JS
const app = express();


// Ajout des middlewares => S'execute avand le traitements des requetes
// - Body-parser => Gestion des data POST
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

// - Middleware custom
const tracer = (req, res, next) => {
    logger.debug(`Request ${req.path}`);
    next();
}
app.use(tracer);


// Ajout des routes
const routerApi = require('./routes/router');
app.use('/api', routerApi)


// Connection to database MongoDB
const db = require('./database');
db.on('error', (e) => {
    logger.error('Error on MongoDB', e);
})

// https://mongoosejs.com/docs/connections.html#connection-events
db.once('open', () => {
    
    // Demarrage du server
    app.listen(config.port, () => {
        logger.info('Start Server');
    })
})


