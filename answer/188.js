/**
 * @param {number} k
 * @param {number[]} prices
 * @return {number}
 */

var maxProfit = function(k, prices) {
    if(k < 2){
        return 0;
    }
    let list = [];
    let maxDay = prices.length;
    if(k > maxDay/2){
        k = Math.ceil(maxDay/2);
    }
    for(let i = 0;i<maxDay;i++){
        list.push([]);
        for(let j = 0;j<k;j++){
            list[i].push([]);
        }
    }
};

console.log(maxProfit(2,[2,4,1]));