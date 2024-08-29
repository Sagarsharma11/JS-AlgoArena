"use strict"

const fibonacciSeries = (term)=>{
    if(term === 0) return [];
    if(term === 1) return [0];
    let a = 0;
    let b = 1;
    const seriesArray = [0,1]
    for(let i=0; i<term-2; i++){
        const temp = a;
        seriesArray.push(a+b)
        a = b; 
        b = temp+b;
    }
    return seriesArray
}
module.exports = {fibonacciSeries}