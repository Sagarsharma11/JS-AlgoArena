const missingNumber = (arr)=>{
    arr.sort((a,b)=>(a-b));
    for(let i=0; i<arr.length-1; i++){
        if(arr[i]+1 !== arr[i+1]){
            return arr[i]+1
        }
    }
    return 
}

module.exports = {missingNumber}