/**
 * @param {number[]} data
 * @return {boolean}
 */
var validUtf8 = function(data) {
    let len = data.length;
    let count = 0;
    for(let i = 0;i<len;i++){
        let code = data[i];
        if(count === 0){
            if(code & 0x80){
                let pass = 0x40;
                while(pass && (code & pass)){
                    count++;
                    pass = pass >> 1;
                }
                if(count === 0 || count > 3){
                    return false;
                }
            }
        }
        else{
            if(code & 0x80){
                count--;
            }
            else{
                return false;
            }
        }
    }
    if(count === 0){
        return true;
    }
    return false;
};

var to2String = function(num){
    var nums = [];
    while(num != 0){
        var temp = num % 2;
        nums.push(temp);
        num = parseInt(num/2);
    }
    var num2 = nums.reverse().join('');
    return num2;
}
console.log(validUtf8([250,145,145,145,145]));