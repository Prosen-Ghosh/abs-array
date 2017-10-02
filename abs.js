const abs = (function(){
    'use strict';
    const fn = function(arr){
        if(Object.prototype.toString.call(arr).toLowerCase() !== '[object array]'){
            return new TypeError('abs() expects an array parameter');
        }
        return arr.map((v) => typeof v === 'number' ? (v < 0 ? v * -1 : v) : v);
    }
    return fn;
})();

if (typeof module === 'object' && module.exports) {
    module.exports = abs;
}