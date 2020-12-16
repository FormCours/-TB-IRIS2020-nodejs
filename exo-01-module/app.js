const readline = require('readline');
const {toChristmas, toBirthdate, toHolidays} = require('./modules/days-counter');

const reader = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const message = `Obtenir le nombre de jours avant...
    1) Noël
    2) Anniversaire
    3) Vacances d'été
    0) Quitter

> `;

reader.question(message, (response) => {
    const choice = parseInt(response);
    
    let nbDay;
    switch(choice) {
        case 1:
            nbDay = toChristmas();
            if(nbDay > 0) {
                reader.write(`Noël est dans ${nbDay} jour(s)`);
            }
            else {
                reader.write(`Joyeux Noël ☺`);
            }
            reader.close();
            break
        
        case 2:
            reader.question('Quel est le jour de votre anniversaire: ', date => {
                reader.question('Quel est le mois de votre anniversaire: ', month => {

                    nbDay = toBirthdate(month, date);
                    if(nbDay > 0) {
                        reader.write(`Votre anniversaire est dans ${nbDay} jour(s)`);
                    }
                    else {
                        reader.write(`Bon anniversaire vieux :p`);
                    } 
                    reader.close();
                })
            })
            break
        
        case 3:
            nbDay = toHolidays();
            if(nbDay > 0) {
                reader.write(`Les vacances sont dans ${nbDay} jour(s)`);
            }
            else {
                reader.write(`Les enfants sont en vacances ;)`);
            }
            reader.close();
            break

        default:
            reader.write(`Bah... Au revoir`);
            reader.close();
            break;
    }
});