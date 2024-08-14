"use strict"
const gamingArray = (arr)=>{
    let max = -1;
    let count = 0;
    let len = arr.length;
    for(let i=0; i<len; i++){
        if(arr[i]>max){
            max = arr[i];
            count++;
        }
    }
    return count%2===0? "ANDY":"BOB";
}
module.exports = {gamingArray}