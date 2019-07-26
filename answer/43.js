/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var multiply = function (num1, num2) {
    if (num1 == '0') {
        return num1;
    }
    if (num2 === '0') {
        return num2;
    }
    let mutiplyDict = {};
    let addDict = {};
    let mutiplyOne = function (num1, num2) {
        num1 = num1 || '0';
        num2 = num2 || '0';
        let str = num1 + num2;
        if (mutiplyDict[str] == null) {
            let mutiple = parseInt(num1) * parseInt(num2);
            mutiplyDict[str] = { ten: Math.floor(mutiple / 10), one: mutiple % 10 };
        }
        return mutiplyDict[str];
    }
    let addOne = function (num1, num2) {
        num1 = num1 || '0';
        num2 = num2 || '0';
        let str = '' + num1 + num2;
        if (addDict[str] == null) {
            let add = parseInt(num1) + parseInt(num2);
            addDict[str] = { ten: Math.floor(add / 10), one: add % 10 };
        }
        return addDict[str];
    }
    let addAll = function (num1, num2) {
        let len1 = num1.length;
        let len2 = num2.length;
        let str = '';
        let i = len1 - 1;
        let j = len2 - 1;
        let plus = 0;
        while (i >= 0 && j >= 0) {
            let n1 = num1[i--];
            let n2 = num2[j--];
            let { ten, one } = addOne(n1, n2);
            let ret2 = addOne(one, plus);
            str = ret2.one + str;
            plus = ten + ret2.ten;
        }
        while (i >= 0) {
            let n1 = num1[i--];
            let { ten, one } = addOne(plus, n1);
            str = one + str;
            plus = ten;
        };

        while (j >= 0) {
            let n1 = num2[j--];
            let { ten, one } = addOne(plus, n1);
            str = one + str;
            plus = ten;
        }
        if (plus > 0) {
            str = plus + str;
        }
        return str;
    }
    let len1 = num1.length;
    let len2 = num2.length;
    let str = '';
    let end = '';
    for (let j = len2 - 1; j >= 0; j--) {
        let temp = '';
        let plus = 0;
        for (let i = len1 - 1; i >= 0; i--) {
            let ch1 = num1[i];
            let ch2 = num2[j];
            let { ten, one } = mutiplyOne(ch1, ch2);
            let ret2 = addOne(one, plus);
            temp = ret2.one + temp;
            plus = ret2.ten + ten;
        }
        if (plus > 0) {
            temp = plus + temp;
        }
        temp += end;
        end += '0';
        str = addAll(str, temp);
    }

    return str;
};







console.log(multiply('999', '12'));