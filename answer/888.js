/**
 * @param {number[]} A
 * @param {number[]} B
 * @return {number[]}
 */
var fairCandySwap = function(A, B) {
    let totalA = 0;
    for(let i = 0,len = A.length;i<len;i++){
        totalA += A[i];
    }
    let totalB = 0;
    for(let i = 0,len = B.length;i<len;i++){
        totalB += B[i];
    }
    let diff = (totalA - totalB)/2;
    for(let i = 0,len1 = A.length;i<len1;i++){
        for(let j =0,len2 = B.length;j<len2;j++){
            if(A[i] - B[j] === diff){
                return [A[i],B[j]];
            }
        }
    }
    return [];
};

var fairCandySwap = function(A, B) {
    let totalA = 0;
    let dic = {};
    for(let i = 0,len = A.length;i<len;i++){
        totalA += A[i];
        dic[A[i]] = A[i];
    }
    let totalB = 0;
    for(let i = 0,len = B.length;i<len;i++){
        totalB += B[i];
    }
    let diff = (totalA - totalB)/2;
    for(let j =0,len2 = B.length;j<len2;j++){
        let add = Math.floor(B[j] + diff);
        if(dic[add]){
            return [add,B[j]];
        }
    }
    return [];
};