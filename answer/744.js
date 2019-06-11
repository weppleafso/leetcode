/**
 * @param {character[]} letters
 * @param {character} target
 * @return {character}
 */
let code;
var nextGreatestLetter = function(letters, target) {
    if(code == null){
        code = {};
        //ABCDEFGHIJKLMNOPQRSTUVWXVZ
        let str = 'abcdefghijklmnopqrstuvwxvz';
        for(let i = 0,len = str.length;i<len;i++){
            code[str[i]] = i + 97;
        }
    }
    letters = letters.sort(function(a,b){
        return code[a] - code[b];
    });
    let minCode = code[letters[0]];
    let maxCode = code[letters[0]];
    let codeTarget = code[target];
    for(let i = 1,len = letters.length;i<len;i++){
        let letter = letters[i];
        let codeLetter = code[letter];
        if(codeTarget > code[letter]){
            maxCode = Math.min(codeLetter,maxCode);
        }
        minCode = Math.min(codeLetter,minCode);
    }
    if(maxCode > codeTarget){
        return String.fromCharCode(maxCode);
    }
    return String.fromCharCode(minCode);
};