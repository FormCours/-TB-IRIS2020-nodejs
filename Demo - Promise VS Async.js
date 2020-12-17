// On a les fonctions suivantes qui renvoie une promesse :

// getSchool()
// getSections("school id")
// getStudents("section id")

/*******************************************************************************************/

// - Utilisation des promesses
// Promise 1
getSchool()
    .then((school) => {

        // Promise 2
        getSections(school)
        .then(sections => {
            for (const s of sections) {

                // Promise 3
                getStudents(s.id)
                    .then(students => {
                        const total = students.reduce((t, st) => t + st.year_result, 0)
                        const avg = total / students.lenght
    
                        console.log(`Moyenne de la section ${avg}`);
                    })
            }
        })
    })


// - Utilisation des async / await
(async () => {
    const school = await getSchool();
    const sections = await getSections(school);

    for(s in sections) {
        const students = await getStudents(s.id);

        const total = students.reduce((t, st) => t + st.year_result, 0)
        const avg = total / students.lenght

        console.log(`Moyenne de la section ${avg}`);
    }
})();