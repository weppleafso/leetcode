/**
 * @param {string[]} words
 * @param {number} k
 * @return {string[]}
 */
var topKFrequent = function (words, k) {
    let countDict = {};
    let wordList = [];
    let counts = [];
    for(let i = 0,len = words.length;i<len;i++){
        let word = words[i];
        countDict[word] = (countDict[word] || 0) + 1;
    }
    for(let word in countDict){
        counts.push(word);
    }
    let len = counts.length;
    for(let i = 0;i<k;i++){
        let word = counts[i];
        let max = countDict[word];
        let index = i;
        for(let j = i+1;j<len;j++){
            let word2 = counts[j];
            let num = countDict[word2];
            if(num > max){
                max = num;
                index = j;
                word = word2
            }
            else if(num === max){
                if(word>word2){
                    max = num;
                    index = j;
                    word = word2
                }
                
            }
        }
        counts[index] = counts[i];
        counts[i] = word;
        
       
    }
    counts.length = k;
    return counts;
};

let ret = topKFrequent(["glarko","zlfiwwb","nsfspyox","pwqvwmlgri","qggx","qrkgmliewc","zskaqzwo","zskaqzwo","ijy","htpvnmozay","jqrlad","ccjel","qrkgmliewc","qkjzgws","fqizrrnmif","jqrlad","nbuorw","qrkgmliewc","htpvnmozay","nftk","glarko","hdemkfr","axyak","hdemkfr","nsfspyox","nsfspyox","qrkgmliewc","nftk","nftk","ccjel","qrkgmliewc","ocgjsu","ijy","glarko","nbuorw","nsfspyox","qkjzgws","qkjzgws","fqizrrnmif","pwqvwmlgri","nftk","qrkgmliewc","jqrlad","nftk","zskaqzwo","glarko","nsfspyox","zlfiwwb","hwlvqgkdbo","htpvnmozay","nsfspyox","zskaqzwo","htpvnmozay","zskaqzwo","nbuorw","qkjzgws","zlfiwwb","pwqvwmlgri","zskaqzwo","qengse","glarko","qkjzgws","pwqvwmlgri","fqizrrnmif","nbuorw","nftk","ijy","hdemkfr","nftk","qkjzgws","jqrlad","nftk","ccjel","qggx","ijy","qengse","nftk","htpvnmozay","qengse","eonrg","qengse","fqizrrnmif","hwlvqgkdbo","qengse","qengse","qggx","qkjzgws","qggx","pwqvwmlgri","htpvnmozay","qrkgmliewc","qengse","fqizrrnmif","qkjzgws","qengse","nftk","htpvnmozay","qggx","zlfiwwb","bwp","ocgjsu","qrkgmliewc","ccjel","hdemkfr","nsfspyox","hdemkfr","qggx","zlfiwwb","nsfspyox","ijy","qkjzgws","fqizrrnmif","qkjzgws","qrkgmliewc","glarko","hdemkfr","pwqvwmlgri"]
,14);
console.log(ret);