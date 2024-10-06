"use strict"

const TwoDMatrix = () =>{
    let a = [
        [1,2,3],
        [4,5,6],
        [7,8,9]
    ]
    
    let b =  [
        [11,12,13],
        [14,15,16],
        [17,18,19]
    ]
    
    let c = [];
    
    for(let i=0; i<a.length; i++){
        let arr = [];
        for(let aIndex=0; aIndex<a[i].length; aIndex++){
            arr.push(a[i][aIndex]*b[aIndex][i])
        }
        c.push(arr)
    }
    
    console.log(c)
}

module.exports = {TwoDMatrix}