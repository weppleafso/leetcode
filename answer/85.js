/**
 * @param {character[][]} matrix
 * @return {number}
 */
var maximalRectangle = function(matrix) {
    let N = matrix.length;
    if(N === 0){
        return 0;
    }
    let M = matrix[0].length;
    let width = [];
    let height = [];
    for(let i = 0;i<N;i++){
        height.push([]);
        width.push([]);
        for(let j = 0;j<M;j++){
            height[i][j] = 0;
            for(let k = j;k<M;k++){
                if(matrix[i][k] === '1'){
                    height[i][j]++;
                }
                else{
                    break;
                }
            }
        }
    }
    for(let j = 0;j<M;j++){
        for(let i = 0;i<N;i++){
            width[i][j] = 0;
            for(let k = i;k<N;k++){
                if(matrix[k][j] === '1'){
                    width[i][j]++;
                }
                else{
                    break;
                }
            }
        }
    }
    let max = 0;
    for(let i = 0;i<N;i++){
        for(let j = 0;j<M;j++){
            let w = width[i][j];
            let h = height[i][j];
            let count = 0;
            if(h > w){
                let min = h;
                for(let k = 0;k<w;k++){
                    if(height[i+k][j] >= h){
                        count++;
                        max = Math.max(count * min,max);
                    }
                    else{
                        count++;
                        min = Math.min(min,height[i+k][j]);
                        max = Math.max(count * min,max);
                    }
                }
                
            }
            else{
                let min = w;
                for(let k = 0;k<h;k++){
                    if(width[i][j+k] >= w){
                        count++;
                        max = Math.max(count * min,max);
                    }
                    else{
                        count++;
                        min = Math.min(min,width[i][j+k]);
                        max = Math.max(count * min,max);
                    }
                }
            }
        }
    }
    return max;
};

console.log(maximalRectangle([["1","0","1","1","0","1"],["1","1","1","1","1","1"],["0","1","1","0","1","1"],["1","1","1","0","1","0"],["0","1","1","1","1","1"],["1","1","0","1","1","1"]]));