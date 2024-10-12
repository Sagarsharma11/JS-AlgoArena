/**
 * @param {string} s
 * @return {boolean}
 */
const validParentheses = (s) => {
    const stackArray = [];
    let array = s?.split("");
    for(let i=0; i<array?.length; i++){
        if(array[i]==="["|| array[i]==="{" || array[i]==="(" )
        {
            stackArray.push(array[i]);
        }
        else{
            const len = stackArray.length;
            if(
                (array[i]==="]" && stackArray[len-1] ==="[") ||
                (array[i]==="}" && stackArray[len-1] ==="{") ||
                (array[i]===")" && stackArray[len-1] ==="(") 
            ){
                stackArray.pop();
            }else{

                return false
            }

        }
    }
    return stackArray.length !==0 ? false : true;
};

module.exports = {validParentheses}