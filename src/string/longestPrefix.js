

"use strict";

const longestCommonPrefix = function(str1) {
    // const wordArray = ["flower","flow","flight"];
    let len = str1.length;
    let str = str1.sort((a, b) => a.length - b.length);
    console.log(str)
    for(let i=0; i< len; i++){
        let wordLen = str[0].length;
        let prefix = str[0].slice(0,Math.min(wordLen, i));
        console.log("prefix =>", prefix, wordLen)
        // for(let j=1; j<len; j++){
        //     let wordLen2 = str[j].length-1;
        //     let prefix2 = str[j].slice(0,(wordLen2<i? wordLen2: i));
        //     if(prefix !== prefix2){
        //         return prefix
        //     }
        // }
    }
    return "";
};

module.exports = { longestCommonPrefix };
