
function linearsearch(arr,target){
    for(let i=0;i<arr.length;i++){
        if(arr[i]===target){
            return 1
        }
    }
    return -1
}
console.log(linearsearch([1,2,4,5,6],45))