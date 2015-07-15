define(function (require) {
    var persons = [];
    var randomPerson = require('randomPerson');
    for (var i = 0; i < 5; i ++) {
        var _person = randomPerson.genarate();
        persons.push (_person);
    }
    console.log(persons)
})