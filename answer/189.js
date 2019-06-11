/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function(nums, k) {
    let ro = nums.length - k % nums.length;
    let ret = nums.splice(0,ro);
    nums.push(...ret);
    console.log(nums);
};