"use strict";

const BubbleSort = (arr) => {
  let len = arr.length;
//   let count = 0;
  let swap;
  for (let pass = 1; pass <= len - 1; pass++) {
    // count++;
    swap = false;
    for (let i = 0; i <= len - pass - 1; i++) {
    //   count++;
      if (arr[i] > arr[i + 1]) {
        let temp = arr[i];
        arr[i] = arr[i + 1];
        arr[i + 1] = temp;
        swap = true;
      }
    }
    if (!swap) {
      break;
    }
  }
//   console.log(`Count: ${count}`);
  return arr;
};

module.exports = { BubbleSort };