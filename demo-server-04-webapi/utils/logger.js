const fs = require('fs'); // A partir de Node v14, possibilité d'utiliser "fs/promises"
const path = require('path');

const getFormattedTime = () => {
    const now = new Date();
    const options = { day: '2-digit', month: '2-digit', year: 'numeric', hour: '2-digit', minute: '2-digit', second: '2-digit'};
    return now.toLocaleString('fr-FR', options);
}

const logDir = `logs`;
const logfile = `history.log`;

const saveInFile = (data) => {
    const directory = path.join(logDir);
    const file = path.join(logDir, logfile);

    fs.mkdirSync(directory, {recursive: true});
    fs.appendFileSync(file, data + '\n', {flag: 'a', encoding: 'utf-8'});
}

const logger = {
    debug: (msg, data = undefined) => {
        const dataString = data ? JSON.stringify(data) : '';
        const value = `${getFormattedTime()} => DEBUG: ${msg} ${dataString}`;
        
        console.debug(value);
    },

    info: (msg) => {
        const value = `${getFormattedTime()} => INFO: ${msg}`;
        saveInFile(value);
        console.info(value);
    },

    error: (msg, error) => {
        const errorString = error ? JSON.stringify(error) : '';
        const value = `${getFormattedTime()} => ERROR: ${msg} ${errorString}`;
        saveInFile(value);
        console.error(value);
    }
}

module.exports = logger;