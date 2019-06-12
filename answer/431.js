/**
 * @param {number[]} A
 * @return {number}
 */
var numberOfArithmeticSlices = function(A) {
    let diff = NaN;
    let sum = 0;
    let len = A.length;
    let count = 0;
    for(let i = 1;i<len;i++){
        let temp = A[i] - A[i-1];
        if(temp != diff){
            diff = temp;
            if(count > 2){
                let dis = count - 2;
                sum += (1 + dis)/2 * dis;
            }
            count = 2;
        }
        else{
            count++;
        }
    }
    if(count > 2){
        let dis = count - 2;
        sum += (1 + dis)/2 * dis;
    }

    return sum;
};
let ret = numberOfArithmeticSlices([-1,-2,-3]);
console.log(ret);