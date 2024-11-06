"use strict";

const SelectionSort = (arr) => {
  let len = arr.length;
  let min = null;

  for(let i=0; i<len-1; i++){
    min = i;
    for(let j=i+1; j<len; j++){
        if(arr[min]>arr[j]){
            min = j;
        }
    }
    if(min!=i){
       let temp =  arr[min];
       arr[min] = arr[i];
       arr[i] = temp;
    }
  }
  
  return arr;
};

module.exports = { SelectionSort };
