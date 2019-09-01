/**
 * @param {number[]} nums
 * @return {boolean}
 */
// 相同的数是偶数个 + 1
var xorGame = function(nums) {
    let dict = {};
    let xor = 0;
    for(let i = 0,len = nums.length;i<len;i++){
        let num = nums[i];
        let count = dict[num]||0;
        count++;
        dict[num] = count;
        xor = xor ^ num;
    }
    if(xor === 0){
        return true;
    }
    let count = 0;
    for(let num in dict){
        count += dict[num] % 2;
    }
    return count % 2 === 0;
};

console.log(xorGame([1,2,3]));