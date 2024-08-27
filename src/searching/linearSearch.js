"use strict"

const linearSearch = (arr, len, targetElement) => {
    for(let i=0; i<len; i++){
        if(arr[i]=== targetElement) return true
    }
    return false
}

module.exports = {linearSearch}