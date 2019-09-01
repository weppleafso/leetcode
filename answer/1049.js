/**
 * @param {number[]} stones
 * @return {number}
 */
var lastStoneWeightII = function(stones) {
    let total = 0;
    let half = 0;
    let len = stones.length;
    for(let i =0;i<len;i++){
        total += stones[i];
    }
    half = total/2;
    let list = [];
    for(let i = 0;i<=len;i++){
        list[i] = [0];
    }
    for(let j = 1;j<=half;j++){
        list[0][j] = 0;
        // let str = '';
        for(let i = 1;i<=len;i++){
            let num = stones[i-1];
            if(num <= j){
                list[i][j] = Math.max(list[i-1][j],list[i-1][j - num]+num);
            }
            else{
                list[i][j] = list[i-1][j];
            }
            // str += list[i][j]+',';
        }
        // console.log('j=',j,'[',str,']');
    }
    return (half - list[len][list[len].length-1]) * 2;
};
console.log(lastStoneWeightII([1,2]));
// 40-21 = 19 33 - 31 = 2 26 - 19 = 7 7 - 2 = 5 【21】 【40，】 26 - （40-21） - （33 - 31） 26 + 21 + 31 - （40 + 33）