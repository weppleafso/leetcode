/**
 * @param {number[]} stones
 * @return {number[]}
 */
var numMovesStonesII = function (stones) {
    stones.sort(function (a, b) {
        return a - b;
    });
    let list = [];
    for (let i = 0, len = stones.length - 1; i < len; i++) {
        list.push(stones[i + 1] - stones[i]);
    }
    let min = 10000000001;
    let min2 = 10000000001;
    let limit = 10000000000;
    let total = 0;
    let count = 0;
    let tempList = [];
    for (let i = 0; i < list.length; i++) {
        let range = list[i];
        if (range > 1) {
            total += range - 1;
            min = Math.min(min, range);
            tempList.push(range - 1);
        }
    }
    let stepMin = 10000000001;
    let index = -1;
    let empty = 0;
    for(let i = 0,len = this.stones.length;i<len;i++){
        let count = 0;
        let num = this.stones[i];
        let end = num + len - 1;
        while(num < end){
            num += list[i+count];
            count++;
        }
        if(count < stepMin){
            stepMin = count;
            index = i;
            empty = num - this.stones[i] - list[i+count-1];
        }
        
    }
    if(index !== -1){
        stepMin = 
    }
    else{
        stepMin = 0;
    }


    let stepMax = total;
    if (total > min) {
        stepMax -= (min - 1);
    }

    return [stepMin, stepMax];
};
console.log(numMovesStonesII([8, 7, 6, 5, 1000000000]));
// 1 2 3 9 11 16
// 1 3 4 9 11 16
// 1 4 6 min = 1
// 1 4 9 min = 2
// 1 4 6 9 min = 1
// 1 4 6 10 min = 1
// 1 4 8 12 min = 2
// 1 7 1000 1002 min = 2
// 1 3 5 7 9 min = 2
// 1 3 5 6 7 min = 1
// 1 3 7 9 11  min = 2 1->8 11->6 36789
// 1 3 7 10 12  min = 2 1->11 3->9 7 9 10 11 12
// 1 3 7 10 11 min = 2
// 1 3 5 7 9 11 min = 3
// 1 4 7 10 13 16 min = 3 

// 1 4 7 10 13 16 19 19->9 1->11 16->12 4->8 7 8 9 10 11 12 13 min= 4
// 1 2 4 6 100 min = 2