define(['../dep/mustache.min', './randomPerson'], function (mustache, randomPerson) {
    var myPool = function() {
        this.template = document.getElementById('myPool-template').innerHTML;
        this.personsObj = {
            myPool: []
        };
        this.num = 4;
    };
    myPool.prototype.generatePool = function () {
        for (var i = 0; i < this.num; i ++) {
            var _person = randomPerson.genarate();
            this.personsObj.myPool.push (_person);
        }    
    };
    myPool.prototype.render = function () {
        var output = mustache.render(this.template, this.personsObj);
        document.getElementById('my-pool').innerHTML = output;    
    };
    return new myPool();
})