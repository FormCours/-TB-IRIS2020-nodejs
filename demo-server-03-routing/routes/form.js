const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    const formulaire = `<form method="POST">
        <label>
            Message : 
            <input type="text" name="message" />
        </label>
        <input type="submit" />
        <input type="reset" />
    </form>`

    res.status(200).send(formulaire);
})


router.post('/', (req, res) => {
    const {message} = req.body;
    console.log('Msg : ' + message);

    res.send(`<div>
        <h1>Message envoyé !</h1>
    </div>`)
})



module.exports = router;