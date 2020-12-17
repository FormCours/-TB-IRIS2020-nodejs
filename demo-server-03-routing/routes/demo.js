const express = require('express');
const router = express.Router();

const ejs = require('ejs');
const fs = require('fs');

// Utilisation du moteur de template "ejs"

router.get('/', (req, res) => {
    const data = {
        date : (new Date()).toLocaleDateString('fr-BE', {
            day: '2-digit',
            month: 'long',
            year: 'numeric'
        })
    }
    console.log(data);

    const page = fs.readFileSync(`${__dirname}\\..\\views\\index.ejs`, 'utf-8');
    const rendu = ejs.render(page, data);

    res.status(200).send(rendu);
})


module.exports = router;