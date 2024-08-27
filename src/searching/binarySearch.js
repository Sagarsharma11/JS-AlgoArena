"use strict"

const binarySearch = (arr, size, targetElement) =>{

    let start = 0;
    let end = size-1;
    
    while(start<=end){
        let mid = Math.floor((start + end) / 2);
        if(
            targetElement === arr[start] ||
            targetElement === arr[end] ||
            targetElement === arr[mid]
        ) return true;
        if(targetElement> mid){
            end--;
        }
        if(targetElement<mid){
            start++
        }
    }

    return false
}
module.exports = {binarySearch}