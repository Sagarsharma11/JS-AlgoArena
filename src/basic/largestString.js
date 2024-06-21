const largestString = (str) => {
  let word = "";
  str.split(" ").forEach((ele, i) => {
    if (ele.length > word.length) {
      word = ele;
    }
  });
  return word;
};

module.exports = { largestString };
