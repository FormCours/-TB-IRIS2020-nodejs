const readline = require('readline');


// Initialisation l'objet "reader" d'interaction avec la console
const reader = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});


// Ecriture multi-ligne
reader.write(`Second exemple du reader
    Nous allons vous poser une question...
Bonne chance
`);


// Interaction avec l'utilisateur 
reader.question('Quel est votre année de naissance : ', (response) => {
    const birthdateYear = parseInt(response);
    const currentYear = (new Date()).getFullYear()

    const age = currentYear - birthdateYear;
    console.log(`Vous être (peut-etre) agé de ${age} an${age > 1 ? 's' : ''}`);

    
    // Fermeture de l'objet "reader"
    reader.close();
});
