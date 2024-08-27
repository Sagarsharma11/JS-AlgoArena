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

  console.log("--- Binary search ---");
  const arr = [7, 14, 21, 25, 82, 91];
  const size = 6;
  const targetElement = 91;
  console.log(binarySearch(arr, size, targetElement));
}

main();
