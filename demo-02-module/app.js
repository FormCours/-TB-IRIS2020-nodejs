const today = require('./modules/today');

const time1 = today.getTime();
console.log(time1);

//----------------------------------------------------------

const {getTime, getDate} = require('./modules/today');

const time2 = getTime();
console.log(time2);

//----------------------------------------------------------

const hello = require('./modules/literal');

console.log(typeof(hello));
console.log(hello);

//----------------------------------------------------------

const fct = require('./modules/fct');

fct('TechnoBel !');

//----------------------------------------------------------

const Person = require('./modules/person');

const zaza = new Person('Zaza', 'Vanderquack');

console.log(zaza.firstname + ' ' +zaza.lastname);

zaza.firstname = 'test';

console.log(zaza.fullname);
zaza.sayHello()