const fs = require('fs');

// Lecture d'un fichier
fs.readFile('./datas/todo.txt', (error, data) => {
    console.log('> Lecture du fichier');

    if(error) {
        console.error(error);
        return;
    }

    console.log('Contenu du fichier :');
    console.log(typeof(data));
    console.log(data);
    //console.log(data.toString('utf-8'));

    console.log('---\n');
});

fs.readFile('./datas/todo.txt', {encoding: 'utf-8'}, (error, data) => {
    console.log('> Lecture du fichier (Conversion vers "utf-8")');

    if(error) {
        console.error(error);
        return;
    }

    console.log('Contenu du fichier :');
    console.log(typeof(data));
    console.log(data);

    console.log('---\n');
});

// Pour info => Ecrire un nombre dans une base autre que 10
const octet = 0o660 
const binaire = 0b110110000
const hexa = 0x1B6

// Ecriture d'un fichier
const contenu = `Hello World ${(new Date()).toLocaleTimeString()}\n`;
const optionWrite = {encoding: 'utf-8', flag: 'a', mode:0o666};
fs.writeFile('./datas/nouveau.txt', contenu, optionWrite, (error) => {
    console.log('> Ecriture du fichier');

    if(error) {
        console.error(error);
    }
    else {
        console.log('Ecriture OK');
    }
    console.log('---\n');
});

// Obtenir les metadatas
fs.stat('./datas/todo.txt', (error, stat) => {
    console.log('> Obtenir les metadatas du fichier');

    if(error) {
        console.error(error);
        return;
    }

    if(stat.isFile()) {
        console.log('C\'est un fichier');        
        console.log('Mode : ' + stat.mode.toString(8));
        console.log('Taille : ' + stat.size + ' octets');
        console.log('Time : ' + stat.ctime);
    }
    else if(stat.isDirectory()) {
        console.log('C\'est un dossier');        
    }

    console.log('---\n');
});


// Ouvrir un fichier
const filename = './datas/todo.txt'
fs.open(filename, 'r', (error, fd) => {
    console.log('> Ouverture du fichier');

    if(error) {
        console.error(error);
        return;
    }

    console.log('Debut de la lecture des données...\n');

    const sizeFile = fs.statSync(filename).size;
    const buffer = Buffer.alloc(sizeFile);
    
    const lengthRead = 16;
    let nbBytesTotal = 0; 

    for (let offest = 0; offest < sizeFile; offest += lengthRead) {

        const length = (offest + lengthRead > sizeFile) ? sizeFile - offest : lengthRead;

        fs.read(fd, buffer, offest, length, offest, (error, nbBytes) => {
            if(error) {
                console.error(error);
                return;
            }

            console.log(`Bytes lu : ${offest} à ${offest + length}`);
            nbBytesTotal += nbBytes;

            if(nbBytesTotal == sizeFile) {

                // Fermeture du fichier
                fs.close(fd, (error) => {
                    if(error) {
                        console.error(error);
                        return;
                    }

                    // Lecture du resultat quand le buffer est complet 
                    const data = buffer.toString('utf-8');
                    console.log('\n' + data);

                    console.log('---\n');
                });

            }
        });
    }
});