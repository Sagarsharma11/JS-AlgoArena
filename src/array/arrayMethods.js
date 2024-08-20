"use strict";

const deleteFromEnd = (array, len) => {
  const index = emptyIndex(array);
  if (index === -1) {
    array[len - 1] = null;
  } else {
    array[index - 1] = null;
  }
  return;
};

const searchElement = (array, size, ele) => {
  for (let i = 0; i < size; i++) {
    if (array[i] === ele) return true;
  }
  return false;
};

const emptyIndex = (array, len) => {
  for (let i = 0; i < len; i++) {
    if (array[i] === undefined || array[i] === null) return i;
  }
  return -1;
};

const insertIntoArray = (array, len, val) => {
  const index = emptyIndex(array, len);
  if (index < 0) {
    console.log("Array is full");
    return;
  }
  array[index] = val;
};

const arrayMethods = (size) => {
  const array = new Array(size);
  insertIntoArray(array, size, 1);
  insertIntoArray(array, size, 2);
  insertIntoArray(array, size, 3);
  insertIntoArray(array, size, 4);
  insertIntoArray(array, size, 5);
  deleteFromEnd(array, size);
  insertIntoArray(array, size, 6);
  console.log(`Search element : ${searchElement(array, size, 4)}`);
  return array;
};
module.exports = { arrayMethods };
