"use strict"

const uniqueRandomArray = (arr, size)=>{
    const set = new Set();
    const len = arr.length;
    while(set.size<size){
        const random = Math.floor(Math.random()*len);
        set.add(arr[random])
    }

    return Array.from(set)
}

module.exports =  {uniqueRandomArray}