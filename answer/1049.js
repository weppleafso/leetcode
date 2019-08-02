/**
 * @param {number[]} stones
 * @return {number}
 */
var lastStoneWeightII = function(stones) {
    let i = 3;
    while(stones.length > 1){
        stones.sort(function(a,b){
            return b - a;
        });
        let temp =[];
        for(let i = 0,len = stones.length;i<len;i+=2){
            temp.push(stones[i] - stones[i+1])
        }
        if(stones.length % 2 === 1){
            temp.push(stones[stones.length-1]);
        }
        console.log(temp);
        stones = temp;
        i--;
        if(i<0){
            break;
        }
    }
    return stones[0];
};
console.log(lastStoneWeightII([1,1,2,4,7,8]));