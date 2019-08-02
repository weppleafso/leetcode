/**
 * @param {number[][]} matrix
 * @return {number[][]}
 */
var pacificAtlantic = function(matrix) {
    console.log(matrix);
    if(matrix.length === 0){
        return [];
    }
    let matrixA = [];
    let matrixB = [];
    let N = matrix.length;
    let M = matrix[0].length;

    let openA = [];
    let openB = [];
    for(let i = 0;i<N;i++){
        matrixA.push([true]);
        matrixB.push([]);
        matrixB[i][M-1] = true;
        openA.push({i:i,j:0});
        openB.push({i:i,j:M-1});
    }
    for(let i = 0;i<M;i++){
        matrixA[0][i] = true;
        matrixB[N-1][i] = true;
        openA.push({i:0,j:i});
        openB.push({i:N-1,j:i});
    }

    while(openA.length > 0){
        let {i,j} = openA.shift();
        let val = matrix[i][j];
        if(i > 0){
            let left = matrix[i-1][j];
            if(!matrixA[i-1][j] && left >= val){
                matrixA[i-1][j] = true;
                openA.push({i:i-1,j:j});
            }
        }
        if(i < N-1){
            let right = matrix[i+1][j];
            if(!matrixA[i+1][j] && right >= val){
                matrixA[i+1][j] = true;
                openA.push({i:i+1,j:j});
            }
        }

        if(j > 0){
            let up = matrix[i][j-1];
            if(!matrixA[i][j-1] && up >= val){
                matrixA[i][j-1] = true;
                openA.push({i:i,j:j-1});
            }
        }

        if(j < M-1){
            let down = matrix[i][j+1];
            if(!matrixA[i][j+1] && down >= val){
                matrixA[i][j+1] = true;
                openA.push({i:i,j:j+1});
            }
        }
        
        if(matrixA[i][j]){
            continue;
        }
    }

    while(openB.length > 0){
        let {i,j} = openB.shift();
        let val = matrix[i][j];
        if(i > 0){
            let left = matrix[i-1][j];
            if(!matrixB[i-1][j] && left >= val){
                matrixB[i-1][j] = true;
                openB.push({i:i-1,j:j});
            }
        }
        if(i < N-1){
            let right = matrix[i+1][j];
            if(!matrixB[i+1][j] && right >= val){
                matrixB[i+1][j] = true;
                openB.push({i:i+1,j:j});
            }
        }

        if(j > 0){
            let up = matrix[i][j-1];
            if(!matrixB[i][j-1] && up >= val){
                matrixB[i][j-1] = true;
                openB.push({i:i,j:j-1});
            }
        }

        if(j < M-1){
            let down = matrix[i][j+1];
            if(!matrixB[i][j+1] && down >= val){
                matrixB[i][j+1] = true;
                openB.push({i:i,j:j+1});
            }
        }
    }
    console.log(matrixA);
    console.log(matrixB);
    let ret = [];
    for(let i = 0;i<N;i++){
        for(let j = 0;j<M;j++){
            if(matrixA[i][j] && matrixB[i][j]){
                ret.push([i,j]);
            }
        }
    }
    return ret;
};
let ret = pacificAtlantic([[1,2,3,4,5],[16,17,18,19,6],[15,24,25,20,7],[14,23,22,21,8],[13,12,11,10,9]]);
console.log(ret);
