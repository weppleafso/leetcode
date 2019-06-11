/**
 * @param {string} S
 * @param {character} C
 * @return {number[]}
 */
var shortestToChar = function(S, C) {
    let ret = [];
    let indexs = [-10000];
    let begin = -10000;
    let end = 0;
    for(let i =0,len = S.length;i<len;i++){
        let ch = S[i];
        if(ch === C){
            indexs.push(i);
        }
    }
    indexs.push(20000);
    for(let i = 0,len = S.length,j = 1;i<len;i++){
        ret.push(Math.min(i - indexs[j - 1],indexs[j] - i));
        if(i >= indexs[j]){
            j++;
        }
    }
    return ret;
};