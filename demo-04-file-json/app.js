const fs = require('fs');

// Lire des données de "configuration" depuis un Json
const config = require('./config/app-config.json');
console.log(config.source);
console.log(config.dest);
console.log(config['file-demo']);
console.log('');

// Lire un fichier "data" de type Json via le module "file system"
const readJson = (filename) => {
    return new Promise((resolve, reject) => {
        fs.readFile('./datas/' + filename, {encoding: 'utf-8'}, (error, data) => {
            if(error) {
                reject('Error on read file');
                return;
            }

            try {
                const json = JSON.parse(data);
                resolve(json);
            }
            catch (e) {
                reject('Error on parse to Json')
            }
        });
    })
}

readJson(config['file-demo'])
    .then(data => {
        console.log('Liste des personnages (then) : ');
        for (const person of data.people) {
            console.log(`${person.firstname} ${person.lastname}`);
        }
        console.log('');
    })
    .catch(e => {
        console.log(e);
    })


const fctDemo = async () => {
    const data = await readJson(config['file-demo']);

    console.log('Liste des personnages (await) : ');
    for (const person of data.people) {
        console.log(`${person.firstname} ${person.lastname}`);
    }
    console.log('');
}
fctDemo();


//---------------------------------------------------------------------------

const obj = {
    fistname: 'Felix',
    lastname: 'Malchair',
    yearResult: 19
}
const objJson = JSON.stringify(obj);
fs.writeFile('./datas/demo.json', objJson, (error) => {
    console.log('Ecriture du Json OK !');
})