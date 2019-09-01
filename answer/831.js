/**
 * @param {string} S
 * @return {string}
 */
var maskPII = function(S) {
    let index = S.indexOf('@')
    let ret;
    if(index !== -1){
         ret = S.toLocaleLowerCase();
         let ch = ret.slice(0,index);
         ch = ch[0] + '*****' + ch[ch.length-1];
         ret = ch+ret.slice(index);
    }
    else{
        let num = '';
        for(let i = 0;i<S.length;i++){
            let ch = S[i];
            if(ch >= '0' && ch <= '9'){
                num+=ch;
            }
        }
        ret = '';
        let length = num.length;
        let last = num.slice(length-4);
        if(length > 10){
            ret += '+';
            while(length > 10){
                length--;
                ret+='*';
            }
            ret += '-';
        }
        ret += '***-***-'+last;
    }
    return ret;
};
console.log(maskPII('86-(10)12345678'));