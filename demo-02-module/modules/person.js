class Person {

    constructor(firstname, lastname) {
        this._firstname = firstname;
        this._lastname = lastname;
    }

    // Encapsulation
    get firstname() {
        return this._firstname;
    }
    set firstname(value) {
        this._firstname = value;
    }

    get lastname() {
        return this._lastname.toUpperCase();
    }
    set lastname(value) {
        this._lastname = value;
    }

    get fullname() {
        return this.firstname + ' ' + this.lastname;
    }

    sayHello = () => {
        console.log(this.fullname + ' dit bonjour !');
    }
}

module.exports = Person;