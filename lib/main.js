define(function (require) {
    //var persons = [];
    //var Mustache = require('../dep/mustache.min');
    var myPool = require('./myPool');
    myPool.generatePool();
    myPool.render();
    
})