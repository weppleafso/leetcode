/**
 * @param {number[][]} matrix
 * @return {number[][]}
 */
var pacificAtlantic = function(matrix) {
    let matrixA = [];
    let matrixB = [];
    let N = matrix.length;
    let M = matrix[0].length;
    for(let i = 0;i<N;i++){
        matrixA.push([true]);
        matrixB.push([]);
        matrixB[i][M-1] = true;
    }
    for(let i = 0;i<M;i++){
        matrixA[0][i] = true;
        matrixB[M-1][i] = true;
    }
    let max = Math.max(N,M);
    for(let i = 1;i<max;i++){
        let flag = true;
        for(let n = i;n<N;n++){
            flag =false;
            let num = matrix[i][n];
            if(num >= matrix[i][n-1] || num >= matrix[i-1][n]){
                matrixA[i][n] = true;
            }
        }
        for(let m = i;m<M;m++){

        }
    }
    console.log(matrixA);
    console.log(matrixB);
};
pacificAtlantic([[1,2,2,3,5],[3,2,3,4,4],[2,4,5,3,1],[6,7,1,4,5],[5,1,1,2,4]]);