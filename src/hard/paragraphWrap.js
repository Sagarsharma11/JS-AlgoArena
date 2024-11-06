"use strict"

const paragraphWrap = (arr, max) => {

    let count = 0;
    let old = 0;
    let word = arr.join(" ");
    let orr = [];
    console.log(word)
    for(let i=0; word.length; i++){
        count++;
        if(word[i]===" "){
            if(count>max){
                console.log(old)    
                count = 0;
            }
            old = count;
        }
    }

    // while(word.length){
    //     word = word.slice(10)
    //     console.log(word)
    // }

    return word
}

module.exports = {paragraphWrap}