/**
 * @param {number[]} nums
 * @return {boolean}
 */
var isPossible = function(nums) {
    let dict = {};
    let last = nums[0];
    for(let i = 0,len = nums.length;i<len;i++){
        let num = nums[i];
        if(last < num - 1){
            last = num;
            return false;
        }
        dict[num] = (dict[num] || 0) + 1;
    }
    
};