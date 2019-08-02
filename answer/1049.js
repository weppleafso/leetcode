/**
 * @param {number[]} stones
 * @return {number}
 */
var lastStoneWeightII = function(stones) {
    stones.sort(function(a,b){
        return a - b;
    });
    while(stones.length > 1){
        let big = stones.pop();
        let small = stones.pop();
        let add = big - small;
        //使用二分查找插入
        stones.push(add);
        let end = stones.length - 1;
        while(true){
            let pre = end-1;
            // stones
        }

    }
    return stones[0];
};
console.log(lastStoneWeightII([123,1,5,2,4,7,8]));