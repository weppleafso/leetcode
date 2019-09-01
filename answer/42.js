/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function(height) {
    let len = height.length;
    let ret = 0;
    for(let i = 0;i<len;i++){
        let num = height[i];
        let left = 0;
        for(let j = 0;j<i;j++){
            if(height[j] > left){
                left = height[j];
            }
        }
        let right = 0;
        for(let j = i+1;j<len;j++){
            if(height[j] > right){
                right = height[j];
            }
        }
        let min = Math.min(left,right);
        ret += Math.max(min - num,0);
    }
    return ret;
};
console.log(trap([0,1,0,2,1,0,1,3,2,1,2,1]));