/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function(nums, k) {
    let dic = {};
    let list = [];
    let min = 0;
    for(let i = 0;i<nums.length;i++){
        let num = nums[i];
        let count = dic[num] || 0;
        count++;
        if(list.length < k){
            list.push(num);
            min = Math.max(count,min);
        }
        else{
            if(count > min){

            }
        }
    }
};