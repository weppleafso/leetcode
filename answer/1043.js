/**
 * @param {number[]} A
 * @param {number} K
 * @return {number}
 */
var maxList = [];
var P = [];
var maxSumAfterPartitioning = function (A, K) {
    maxList.length = 0;
    P.length = 0;
    for (let i = 0, len = A.length; i < len; i++) {
        maxList.push([]);
        maxList[i][0] = A[i];
        for (let j = 1; j < K; j++) {
            if (i + j < len) {
                maxList[i][j] = Math.max(A[i + j], maxList[i][j - 1]);
            }
        }
    }
    for(let i = 0;i<K;i++){
        P[i] = maxList[0][i] * (i + 1);
    }
    return cal(A, K, A.length);
};
var cal = function (A, K, n) {
    if (P[n - 1] != null) {
        return P[n-1];
    }
    
    let sum = 0;
    for (let i = 1; i <= K; i++) {
        if (n > i) {
            let pre = maxList[n - i][i - 1] * i + cal(A, K, n - i);
            sum = Math.max(sum, pre);
        }

    }
    P[n - 1] = sum;
    return sum;
}
let ret = maxSumAfterPartitioning([1,15,7,9,2,5,10], 3);