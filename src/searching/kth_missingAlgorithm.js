"use strict"

const kth_missingAlgorithm = (arr, size, k) =>{
    let missingArray = []
    for(let i=0; missingArray.length<k; i++){
        if(!arr.includes(i+1)){
            missingArray.push(i+1);
        }
        if(missingArray.length>=k) return missingArray[k-1]
    }
    return -1
}

// GPT solution
// const kth_missingAlgorithm = (arr, size, k) => {
//     let missingCount = 0;
//     let currentNumber = 1; // Start checking from 1
//     let index = 0;

//     while (missingCount < k) {
//         if (index < size && arr[index] === currentNumber) {
//             index++;
//         } else {
           
//             missingCount++;
//             if (missingCount === k) {
//                 return currentNumber;
//             }
//         }
//         currentNumber++;
//     }

//     return -1; 
// }

module.exports = {kth_missingAlgorithm}