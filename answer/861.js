/**
 * @param {number[][]} A
 * @return {number}
 */
var matrixScore = function (A) {
    let m = A.length;
    let n = A[0].length;
    for (let i = 0; i < m; i++) {
        if (A[i][0] === 0) {
            for (let j = 0; j < n; j++) {
                A[i][j] = A[i][j] ^ 1;
            }
        }
    }
    let total = 0;
    let wei = 1;
    for (let i = n-2; i >= 0; i--) {
        let count = 0;
        for (let j = 0; j < m; j++) {
            count += A[j][i];
        }
        count = Math.max(count,n-count);
        total += count * wei;
        wei *=2;
    }
    total +=  m * wei;
    return total;
};