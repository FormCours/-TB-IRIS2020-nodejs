const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {

    res.send('Page d\'Accueil');
})

router.get('/about', (req, res) => {

    res.send('Page About');
})

module.exports = router;