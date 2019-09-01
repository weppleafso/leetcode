/**
 * @param {string} text
 * @return {number}
 */
var longestDecomposition = function(text) {
   let begin = 0;
   let end = text.length;
   let count = 0;
   while(begin < end){
       let findFlag = false;
        let ch = text.charAt(begin);
        let len = (end - begin)/2;
        for(let i = 1;i<=len;i++){
            let isSame = true;
            let ch2 = text.charAt(end - i);
            if(ch === ch2){
                for(let j = 1;j<i;j++){
                    if(text.charAt(begin+j) !== text.charAt(end-(i-j))){
                        isSame = false;
                        break;
                    }
                }
                if(isSame){
                    findFlag = true;
                    count+=2;
                    begin = begin + i;
                    end = end - i;
                    break;
                }
            }
        }
        if(!findFlag){
            count += 1;
            return count;
        }
   }
   return count;
};
//vwsu vmbwk nmnvwsu vmbwk
console.log(longestDecomposition("antaprezatepzapreanta"));
console.log(longestDecomposition('abcba'));
