const abs = require('../abs');
const assert = require('chai').assert;
describe('Unique Array',function(){
    it('Function Shuld Return An Array',function(){
        assert.equal(Object.prototype.toString.call(abs([1,-12,3,-11])).toLowerCase(), '[object array]');
    });
    it('Function Shuld Return A Positive Array',function(){
        assert.deepEqual(abs([1,-2,-1,-5]),[1,2,1,5]);
    });
    it('Function Shuld Return A Positive Array',function(){
        assert.deepEqual(abs([1,-2,-1,-5,{},[]]),[1,2,1,5,{},[]]);
    });
    it('Function Shuld Return A Type Error',function(){
        assert.equal(abs(),'TypeError: abs() expects an array parameter');
    });
})