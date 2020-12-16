/* Utilisation du Process */
/**************************/
process.stdout.write('Hello World\n');
//console.log('Hello World');


// Ecriture dans la console (Attention, pas de saut de ligne !!!)
process.stdout.write('Entrer votre nom : ');


// Abonnement a l'evenement à la lecture console (Attent du 'entrer' du user)
process.stdin.on('readable', () => {

    // Lecture de la saisie de l'utilisateur
    const buffer = process.stdin.read();
    const name = buffer.toString('utf8');

    console.log(buffer);
    console.log(name);
})