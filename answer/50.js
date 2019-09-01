/**
 * @param {number} x
 * @param {number} n
 * @return {number}
 */
var myPow = function(x, n) {
    let list = [];
    if(n === 0){
        return 1;
    }
    let sign = 1;
    if(n < 0){
        sign = -1;
        n = -n;
    }
    while(n !== 1){
        list.push(n%2 === 1);
        n = Math.floor(n/2);
    }
    let ret = x;
    while(list.length > 0){
        if(list.pop()){
            ret = ret * ret * x;
        }
        else{
            ret = ret * ret;
        }
    }
    if(sign === -1){
        return 1/ret;
    }
    return ret;
};
console.log(myPow(2,-19));