"use strict"

const pop = ()=>{

    
}

const arrayMethods = (size)=>{
    const array = new Array(size);
    for(let i=0; i<size; i++){
        array[i] = i+1;
    }

    return array;
}
module.exports = {arrayMethods}