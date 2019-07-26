//解题思路 T(n) = min(T(n-1) + M(n-1) * N(n),T(n-2) + M(n-2) * max(N(n-1),N(n)) + N(n) * N(n-1));
/**
 * @param {number[]} arr
 * @return {number}
 */
var mctFromLeafValues = function (arr) {
    let map = [];
    let mapMax = [];
    let len = arr.length;
    for (let i = 0; i < len; i++) {
        map[i] = [];
        mapMax[i] = [];
        map[i][i] = 0;
        mapMax[i][i] = arr[i];
        if(i<arr.length - 1){
            map[i][i+1] = arr[i] * arr[i+1];
            mapMax[i][i+1] = Math.max(arr[i],arr[i+1]);
        }

    }
    
    for (let range = 2; range < len; range++) {
        let len2 = len - range;
        for (let j = 0; j < len2; j++) {
            let maxCount = Math.pow(2,31);
            let k = j+range;
            mapMax[j][k] = Math.max(mapMax[j][k-1],arr[k]);
            for(let n = 0;n<range;n++){
                maxCount = Math.min(maxCount,map[j][j+n] + mapMax[j][j+n] * mapMax[j+n+1][k] + map[j+n+1][k])
            }
            map[j][k] = maxCount;
            
        }
    }
    return map[0][len - 1];
};
let num = mctFromLeafValues([6, 2, 4,6]);
console.log(num);