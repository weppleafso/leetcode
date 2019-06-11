
var reverseWords = function (s) {
    let str = '';
    let temp = '';
    for (let i = 0, len = s.length; i < len; i++) {
        let ch = s[i];
        if (ch === ' ') {
            str += temp + ch;
            temp = '';
        }
        else {
            temp = ch + temp;
        }

    }
    str += temp;
    return str;
};

var reverseWords = function (s) {
    let list = s.split(' ');
    let str = '';
    for (var i = 0, len = list.length - 1; i < len; i++) {
        let temp = list[i];
        let temp2 = '';
        for (let j = temp.length - 1; j >= 0; j--) {
            temp2 += temp[j];
        }
        str += temp2 + ' ';
    }
    for (; i < len + 1; i++) {
        let temp = list[i];
        let temp2 = '';
        for (let j = temp.length - 1; j >= 0; j--) {
            temp2 += temp[j];
        }
        str += temp2 
    }
    return str;
};