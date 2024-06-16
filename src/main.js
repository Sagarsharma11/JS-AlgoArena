const { favoriteSinger } = require("./basic/favoriteSinger.js")
const { hackerRankGridQuestion } = require("./basic/hackerRankGridQuestion.js")
const {pickNeighbor} = require("./basic/pickNeighbor.js")
function main() {
    // console.log('--- Favorite Singer ---');
    // const array = [1,1,2,2,4,4,5,5,5]
    // console.log(favoriteSinger(array));
    // console.log('--- Grid Challenge ---');
    // const grid = ['ebacd', 'fghij', 'olmkn', 'trpqs', 'xywuv']
    // console.log(hackerRankGridQuestion(grid));
    console.log('--- Pick Neighbor ---');
    const array = [10,20,15,2,23,90,67]
    console.log(pickNeighbor(array));
}

main();