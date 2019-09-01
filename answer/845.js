/**
 * @param {number[]} A
 * @return {number}
 */
var longestMountain = function (A) {
    let listA = [];
    let listB = [];
    let len = A.length;
    for (let i = 0; i < len; i++) {
        let num = A[i];
        listA[i] = 1;
        for (let j = i + 1; j < len; j++) {
            if (A[j] > num) {
                listA[i]++;
                num = A[j];
            }
            else {
                break;
            }
        }
    }
    for (let i = 0; i < len; i++) {
        let num = A[i];
        listB[i] = 1;
        for (let j = i + 1; j < len; j++) {
            if (A[j] < num) {
                listB[i]++;
                num = A[j];
            }
            else {
                break;
            }
        }
    }
    let max = 0;
    for (let i = 0; i < len - 1; i++) {
        let numA = listA[i];
        let numB = listB[i + numA - 1];
        if (numA > 1 && numB > 1) {
            let count = numA + numB - 1;
            if (count > max) {
                max = count;
            }
        }
    }
    return max;
};

console.log(longestMountain([2,3,5,6,7,1,2,3,4,5,6,7,6,5,4]));