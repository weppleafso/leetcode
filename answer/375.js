/**
 * @param {number} n
 * @return {number}
 */
var countNumbersWithUniqueDigits = function(n) {
    let total = 1;
    let muti = 9;
    let ten = Math.max(n,9);
    if(n > 0){
        total += muti;
    }
    for(let i = 2;i<=n;i++){
        muti *= (11 - i);
        total += muti;
    }
    return total;
};
console.log(countNumbersWithUniqueDigits(3));