/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function(nums, target) {
    let maxLen = nums.length;
    var findHalf = function(nums,begin,end,target){
        let beginNum = nums[begin];
        let endNum = nums[end];
        if(beginNum === target && endNum === target){
            return [begin,end];
        }
        else{
            if(endNum < target || beginNum > target){
                return [maxLen,-1];
            }
            if(begin < end - 1){
                let half = Math.floor((begin + end)/2);
                let ret1 = findHalf(nums,begin,half,target);
                let ret2 = findHalf(nums,half+1,end,target);
                return [Math.min(ret1[0],ret2[0]),Math.max(ret1[1],ret2[1])]
            }
            if(beginNum === target){
                return [begin,begin];
            }
            if(endNum === target){
                return [end,end];
            }
            return [maxLen,-1];
        }
    }
    let ret = findHalf(nums,0,maxLen-1,target);
    if(ret[0] === maxLen){
        ret[0] = -1;
    }
    if(ret[0] ===-1 || ret[1] === -1){
        let range = Math.max(ret[0],ret[1]);
        ret[0] = range;
        ret[1] = range;
    }
    return ret;
};
let ret = searchRange([1,4],4);
console.log(ret);