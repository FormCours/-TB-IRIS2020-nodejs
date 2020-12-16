const { getNextEvent, getDaysToEvent, checkMonthRange } = require("../utils/date-utils");

const daysCounter = {

    toChristmas: () => {
        // Date du prochain Noël
        const nextChristmas = getNextEvent(12, 25);
        // Obtenir le nombre de jour
        return getDaysToEvent(nextChristmas);
    },

    toBirthdate: (month, date) => {
        const nextBirthdate = getNextEvent(month, date);
        return getDaysToEvent(nextBirthdate);
    },

    toHolidays: () => {
        if(checkMonthRange(7, 8)) {
            return 0;
        }

        const nextHolidays = getNextEvent(7, 1);
        return getDaysToEvent(nextHolidays);
    }
} 

module.exports = daysCounter;