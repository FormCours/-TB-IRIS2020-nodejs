const readline = require('readline');


// Initialisation l'objet "reader" d'interaction avec la console
const reader = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});


// Utilisation du reader pour ecrire dans la console
reader.write('Hello la console :)');


// Fermeture de l'objet "reader"
reader.close();