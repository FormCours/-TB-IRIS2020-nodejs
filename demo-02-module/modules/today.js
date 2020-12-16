const today = {

    getTime: () => {
        const now = new Date();
        return now.toLocaleTimeString('fr-fr');
    },

    getDate: () => {
        const now = new Date();
        return now.toLocaleDateString('fr-fr');
    }

}

module.exports = today;