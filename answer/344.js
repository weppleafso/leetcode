/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
var reverseString = function(s) {
    let begin = 0;
    let end = s.length - 1;
    while(begin < end){
        let temp = s[begin];
        s[begin] = s[end];
        s[end] = temp;
        begin ++;
        end--;
    }
};