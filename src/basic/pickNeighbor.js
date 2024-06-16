"use strict"

const pickNeighbor = (arr)=>{
   let resultArray = []
   for(let i=0; i<arr.length-2; i++){
      let prev = arr[i];
      let mid = arr[i+1];
      let next = arr[i+2]
      if(prev<mid && next<mid){
         resultArray.push(mid)
      }
   }
   return resultArray
}

module.exports = {pickNeighbor}