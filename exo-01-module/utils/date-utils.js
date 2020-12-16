const ONE_DAY = 24 * 60 * 60 * 1000;

const getNextEvent = (month, date) => {
    const today = new Date();
    const monthEvent = month - 1;

    let yearEvent = today.getFullYear();
    if(today.getMonth() > monthEvent || today.getMonth() === monthEvent && today.getDate() > date) {
        yearEvent++;
    }
    const nextEvent = new Date(yearEvent, monthEvent, date);

    return nextEvent;
}

const getDaysToEvent = (eventDate) => {
    const today = new Date();
    
    // Calcul de la différence
    const diff = eventDate.getTime() - today.getTime();

    // Cas pour le jour de l'event
    if(diff < 1) {
        return 0;
    }

    // Calcul du nombre de jours
    return Math.ceil(diff / ONE_DAY);
}

const checkMonthRange = (startMonth, endMonth) => {
    const currentMonth = (new Date()).getMonth();
    return currentMonth >= (startMonth - 1) && currentMonth <= (endMonth - 1)
}

module.exports = {
    getNextEvent,
    getDaysToEvent,
    checkMonthRange
}