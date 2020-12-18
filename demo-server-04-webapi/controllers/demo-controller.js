// Controller de WebAPI Restful

const logger = require("../utils/logger");

module.exports = {

    find: (req, res) => {
        const data = {
            firstname: 'Zaza',
            lastname: 'Vanderquack'
        };
        logger.debug('Réponse demo GET');

        res.send(JSON.stringify(data));
    },

    insert: (req, res) => {
        const {body} = req;
        logger.debug('Réponse demo Insert', body);

        res.sendStatus(204);
    }
}