/**
 * @param {number[][]} grid
 * @return {number}
 */
var swimInWater = function (grid) {
    let begin = 0;
    let N = grid.length;
    let max = 0;
    for (let i = 0; i < N; i++) {
        let min1 = grid[i][0];
        let min2 = grid[0][i];
        max = Math.max(grid[i][0], max);
        for (let j = 1; j < N; j++) {
            min1 = Math.min(min1, grid[i][j]);
            min2 = Math.min(min2, grid[j][i]);
            max = Math.max(grid[i][j], max);
        }
        begin = Math.max(min1, min2, begin, grid[0][0], grid[N - 1][N - 1]);
    }
    var findPath = function (k, grid, N, i, j, close) {
        if (i === N - 1 && j === N - 1) {
            return true;
        }
        let ret = false;
        if (i > 0) {
            let row = i - 1;
            let col = j;
            let num = grid[row][col];
            if (!close[row + '_' + col] && num === k) {
                close[row + '_' + col] = true;
                ret = findPath(k, grid, N, row, col, close);
                if (ret) {
                    return true;
                }
            }
        }
        if (i < N - 1) {
            let row = i + 1;
            let col = j;
            let num = grid[row][col];
            if (!close[row + '_' + col] && num === k) {
                close[row + '_' + col] = true;
                ret = findPath(k, grid, N, row, col, close);
                if (ret) {
                    return true;
                }
            }
        }
        if (j > 0) {
            let row = i;
            let col = j - 1;
            let num = grid[row][col];
            if (!close[row + '_' + col] && num === k) {
                close[row + '_' + col] = true;
                ret = findPath(k, grid, N, row, col, close);
                if (ret) {
                    return true;
                }
            }
        }
        if (j < N - 1) {
            let row = i;
            let col = j + 1;
            let num = grid[row][col];
            if (!close[row + '_' + col] && num === k) {
                close[row + '_' + col] = true;
                ret = findPath(k, grid, N, row, col, close);
                if (ret) {
                    return true;
                }
            }
        }
        return false;
    }
    for (let k = begin; k <= max; k++) {
        for (let i = 0; i < N; i++) {
            for (let j = 0; j < N; j++) {
                grid[i][j] = Math.max(k, grid[i][j]);

            }
        }
        let ret = findPath(k, grid, N, 0, 0, {});
        if (ret) {
            return k;
        }

    }
};
console.log(swimInWater([[9, 5, 7, 2],
[0, 10, 8, 15],
[1, 4, 3, 12],
[6, 13, 11, 14]]));