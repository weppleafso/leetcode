/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function (nums, k) {
    let dic = {};
    let counts = {};
    for (let i = 0; i < nums.length; i++) {
        let num = nums[i];
        let count = dic[num] || 0;
        count++;
        dic[num] = count;
    }
    let lists = [];
    for(let num in dic){
        let count = dic[num];
        let list = counts[count] || [];
        list.push(+num);
    }
};