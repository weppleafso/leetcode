/**
 * @param {number} n
 * @return {number}
 */
var getMoneyAmount = function (n) {
    let list = [];
    for(let i =0;i<n;i++){
        list[i] = [];
        list[i][i] = 0;
        if(i<n-1){
            list[i][i+1] = i+1;
        }
    }
    for(let range = 2;range<n;range++){
        let len = n - range;
        
        for(let i =0;i<len;i++){
            let min = Infinity;
            for(let index = 1;index<range;index++){
                let k = index + i;
                let num = k+1;
                let ret = num + Math.max(list[i][k-1],list[k+1][i+range]);
                min = Math.min(min,ret);
            }
            list[i][i+range] = min;
        }
        
    }
    return list[0][n-1];
};
console.log(getMoneyAmount(8));

