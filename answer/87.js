/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
var isScramble = function(s1, s2) {
    if(s1.length !== s2.length){
        return false;
    }
    if(s1 === s2){
        return true;
    }
    else if(s1.length === 1){
        return false;
    }
    let len = s1.length;
    let list1 = [];
    let list2 = [];
    let codeMap1 = [];
    let codeMap2 = [];
    for(let i = 0;i<len;i++){
        list1.push(s1.charCodeAt(i) - 96);
        list2.push(s2.charCodeAt(i) - 96);
        codeMap1[i] = [];
        codeMap1[i][i] = list1[i];
        codeMap2[i] = [];
        codeMap2[i][i] = list2[i];
    }
    for(let range = 1;range<len;range++){
        for(let i = 0;i<len - range;i++){
            let k = i + range;
            codeMap1[i][k] = codeMap1[i][k-1] ^ codeMap1[k][k];
            codeMap2[i][k] = codeMap2[i][k-1] ^ codeMap2[k][k];
        }
    }
    var splice = function(codeMap1,codeMap2,c1,c2,len){
        if(len === 1){
            return true;
        }
        
        let c1End = c1 + len -1;
        let c2End = c2 + len -1;
        for(let i = 1;i<len;i++){
            let half1 = c1 + i - 1;
            let half2 = c2 + i - 1;
            if(codeMap1[c1][half1] === codeMap2[c2][half2] && codeMap1[half1+1][c1End] === codeMap2[half2+1][c2End]){
                let ret = splice(codeMap1,codeMap2,c1,c2,i) && splice(codeMap1,codeMap2,half1+1,half2+1,len - i);
                if(ret){
                    return true;
                }
            }
            half1 = c1End - i;
            if(codeMap1[c1][half1] === codeMap2[half2+1][c2End] && codeMap1[half1+1][c1End] === codeMap2[c2][half2]){
                let ret = splice(codeMap1,codeMap2,half1 + 1,c2,i) && splice(codeMap1,codeMap2,c1,half2+1,len - i);
                if(ret){
                    return true;
                }
            }
           
        }
        return false;
    }
    let ret = splice(codeMap1,codeMap2,0,0,len);
    return ret;
}
console.log(isScramble('great','rgtae'));