/**
 * @param {number[]} heights
 * @return {number}
 */
var largestRectangleArea = function(heights) {
    let len = heights.length;
    if(len === 0){
        return 0;
    }
    var findMin = function(heights,start,end){
        if(start === end){
            return heights[start];
        }
        let minIndex = start;
        let min = heights[minIndex]
        for(let i = minIndex+1;i<=end;i++){
            let num = heights[i];
            if(num < min){
                min = num;
                minIndex = i;
            }
        }
        let max = min * (end - start+1);
        if(minIndex > start){
            max = Math.max(max,findMin(heights,start,minIndex-1));
        }
        if(minIndex < end){
            max = Math.max(max,findMin(heights,minIndex+1,end));
        }
        return max;
    }
    let max = findMin(heights,0,len-1);
    return max;
};
console.log(largestRectangleArea([2,1,5,6,2,3]));