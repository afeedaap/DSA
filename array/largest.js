let arr=[100,2,3,4,54]
function largest(arr){
    let max=0
    for(let i=0;i<arr.length;i++){
        if(arr[i]>max){
            max=arr[i]
        }
    }
    return max
}
console.log(largest(arr));