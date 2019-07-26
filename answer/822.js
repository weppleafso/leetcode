/**
 * @param {number[]} fronts
 * @param {number[]} backs
 * @return {number}
 */
var flipgame = function (fronts, backs) {
    let dic = {};
    for(let i = 0,len = fronts.length;i<len;i++){
        if(fronts[i] === backs[i]){
            dic[fronts[i]] = true
        }
    }

    let min = 20001;
    for(let i = 0,len = fronts.length;i<len;i++){
        let num = fronts[i];

        if(!dic[num]){
            if(num < min){
                min = num;
            }
        }

        num = backs[i];
        if(!dic[num]){
            if(num < min){
                min = num;
            }
        }
    }

    return min > 20000?0:min;
};



flipgame([1,4,4,4,7],[1,3,4,1,3])
