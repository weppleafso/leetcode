/**
 * @param {number} N
 * @return {number}
 */
var monotoneIncreasingDigits = function(N) {
    let str = N +'';
    let list = [];
    for(let i =0,len = str.length;i<len;i++){
        list.push(parseInt(str[i]));
    }
    let ret = [];
    let len = list.length;
    let flag = list.length;
    for(let i = 1;i<len;i++){
        if(list[i]<list[i-1]){
            flag = i-1;
            break;
        }
    }
    if(flag < len){
        for(;flag>=0;flag--){
            list[flag]--;
            if(list[flag-1] <= list[flag]){
                break;
            }
        }
        if(flag === -1){
            flag = 0;
        }
        for(let i = flag+1;i<len;i++){
            list[i] = 9;
        }
    }
    str = '';
    for(let i = 0;i<len;i++){
        str += list[i];
    }
    return parseInt(str);
};
console.log(monotoneIncreasingDigits(32121421321));