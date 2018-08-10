const assert = require('chai').assert;
const sayHello = require('../app').sayHello;
const addNum = require('../app').addNumbers;

describe('App',function(){
    it('app should return Hello',function(){
        assert.equal(sayHello(),'Hello');
    });

    it('sum should be above 5',function(){
        var result = addNum(1,1);
        assert.isAbove(result,5);
    });
});