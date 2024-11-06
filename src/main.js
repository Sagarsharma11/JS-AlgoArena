"use strict";
const { favoriteSinger } = require("./basic/favoriteSinger.js");
const { hackerRankGridQuestion } = require("./basic/hackerRankGridQuestion.js");
const { pickNeighbor } = require("./basic/pickNeighbor.js");
const { largestString } = require("./basic/largestString.js");
const { cyclicRotation } = require("./array/cyclicRotation.js");
const { missingNumber } = require("./array/missingNumber.js");
const { gamingArray } = require("./array/gamingArray.js");
const { arrayMethods } = require("./array/arrayMethods.js");
const { linearSearch } = require("./searching/linearSearch.js");
const { binarySearch } = require("./searching/binarySearch.js");
const { kth_missingAlgorithm } = require("./searching/kth_missingAlgorithm.js");
const { fibonacciSeries } = require("./dsa/fibonacciSeries.js");
const { uniqueRandomArray } = require("./array/uniqueRandomArray.js");
const { TwoDMatrix } = require("./array/TwoDMatrix.js");
const { Stack } = require("./dsa/stack/stack-implementation.js");
const { validParentheses } = require("./dsa/stack/validParentheses.js");
const { Queue } = require("./dsa/queue/queue-implementation.js");
const { paragraphWrap } = require("./hard/paragraphWrap.js");
const { BubbleSort } = require("./dsa/sorting/BubbleSort.js");
const { SelectionSort } = require("./dsa/sorting/SelectionSort.js");
const {longestCommonPrefix} = require("./string/longestPrefix.js");

function main() {
  // // --- Favorite Singer ---
  // console.log('--- Favorite Singer ---');
  // const favoriteSingerArray = [1, 1, 2, 2, 4, 4, 5, 5, 5];
  // console.log(favoriteSinger(favoriteSingerArray));

  // // --- Grid Challenge ---
  // console.log('--- Grid Challenge ---');
  // const gridArray = ['ebacd', 'fghij', 'olmkn', 'trpqs', 'xywuv'];
  // console.log(hackerRankGridQuestion(gridArray));

  // // --- Pick Neighbor ---
  // console.log('--- Pick Neighbor ---');
  // const pickNeighborArray = [10, 20, 15, 2, 23, 90, 67];
  // console.log(pickNeighbor(pickNeighborArray));

  // // --- Cyclic Rotation ---
  // console.log('--- Cyclic Rotation ---');
  // const cyclicRotationArray = [1, 2, 3, 4, 5,6,7];
  // const rotationCount = 2; // Add the rotation count for the cyclic rotation
  // console.log(cyclicRotation(cyclicRotationArray, rotationCount));

  // // --- Missing Number ---
  // console.log('--- Missing Number ---');
  // const missingNumberArray = [1, 6, 3, 4, 2];
  // console.log(missingNumber(missingNumberArray));

  // --- Largest String ---
  // console.log("--- Largest String ---");
  // const inputStr = "The quick brown fox jumped over the lazy dog";
  // console.log(largestString(inputStr));

  // // --- Gaming Array ---
  // console.log('--- Gaming Array ---');
  // const arr = [5,2,6,3,4];
  // console.log(gamingArray(arr));

  // --- Array Methods ---
  // console.log('--- Array Methods ---');
  // const size = 5;
  // console.log(arrayMethods(size));

  // --- Linear Search ---
  // console.log('--- Array Methods ---');
  // const arr = [2,3,4,99,9,1];
  // const size = 6;
  // const targetElement = 99;
  // console.log(linearSearch(arr, size, targetElement));

  // --- Binary Search ---
  // console.log("--- Binary search ---");
  // const arr = [7, 14, 21, 25, 82, 91];
  // const size = 6;
  // const targetElement = 91;
  // console.log(binarySearch(arr, size, targetElement));

  // --- kth Missing Algorithms ---
  // console.log("--- Kth Missing Algorithms ---");
  // const arr = [2, 3, 4, 7, 11];
  // const size = 3;
  // const k = 5;
  // console.log(kth_missingAlgorithm(arr, size, k))

  // --- Fibonacci Series ---
  // console.log("--- Fibonacci Series ---");
  // const term = 5;
  // console.log(fibonacciSeries(term))

  // --- Unique Random Array ---
  // console.log("--- Unique Random Array ---");
  // const jsonArray = require("./data/data.json");
  // const arr = jsonArray.map(({ title }) => title)
  // const size = 100;
  // console.log(uniqueRandomArray(arr, size))

  // // --- Two D Matrix ---
  // console.log('--- Two D Matrix ---');
  // console.log(TwoDMatrix());

  // --- Stack Implementation ---
  // console.log("--- Stack Implementation ---");
  // const stack = new Stack();
  // stack.push(10);
  // stack.push(12);
  // stack.push(13);
  // stack.push(14);
  // console.log(stack.peek())

  // // --- validParentheses ---
  // console.log('--- validParentheses ---');
  // console.log(validParentheses())

  // // --- Queue Implementation ---
  // console.log("--- Queue Implementation ---")
  // const queue = new Queue();
  // queue.enqueue(10);
  // queue.enqueue(20);
  // queue.enqueue(30);
  // console.log(queue.front());
  // console.log(queue.dequeue());
  // queue.printQueue();
  // console.log(queue.size());

  // // --- Paragraph Wrap ---
  // console.log('--- Paragraph Wrap ---');
  // const wordArray = ["This", "is", "an", "example", "of", "text", "justification."];
  // const maxLength = 16;
  // console.log(paragraphWrap(wordArray, maxLength))

  // --- Bubble Sort ---
  // console.log('--- Bubble Sort ---');
  // const array = [1,2,3,4];
  // console.log(array)
  // console.log(BubbleSort(array))

  // // --- Selection Sort ---
  // console.log("--- Selection Sort ---");
  // const array = [45, 67, 12, 89, 23, 78, 34, 56, 90, 11, 90];
  // console.log(SelectionSort(array));

  // // --- Longest Common Prefix ---
  // console.log("--- Longest Common Prefix ---");
  // const wordArray = ["flower","flow","flight"];
  // console.log(longestCommonPrefix(wordArray));
}

main();
