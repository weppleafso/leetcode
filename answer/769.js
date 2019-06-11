/**
 * @param {string} A
 * @param {string} B
 * @return {boolean}
 */
var rotateString = function (A, B) {
    if (A.length !== B.length) {
        return false;
    }
    let index = Math.floor(Math.random() * B.length);
    let ch = B[index];
    let list = [];
    for (let i = 0, len = A.length; i < len; i++) {
        if (A[i] === ch) {
            list.push((i - index + len)% len);
        }
    }
    for (let i = 0, len = list.length; i < len; i++) {
        let rotate = list[i];
        let flag = true;
        for (let j = 0, len2 = A.length; j < len2; j++){
           
            if(A[(j + rotate + len2) % len2] !== B[j]){
                flag = false;
                break;
            }
        }
        if(flag){
            return true;
        }
    }
    return false;
};
console.log(rotateString("bcdea","cdeab"));