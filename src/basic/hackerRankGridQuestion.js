"use strict"



function isStringSorted(str) {
    for (let i = 0; i < str.length - 1; i++) {
      if (str[i] > str[i + 1]) {
        return false;
      }
    }
    return true;
  }

const hackerRankGridQuestion = (grid) => {

    let flag = "NO"
    let tempArray = grid.map((ele)=>(ele.split("").sort().join("")));

    tempArray.forEach((ele, i) => {
        let str = ""
        tempArray.forEach((e, j)=>{
            str = str+e[i];
        })
        if(!isStringSorted(str)){
            return flag;
        }
    })
    flag = "YES"
    return flag;
}

module.exports = { hackerRankGridQuestion }