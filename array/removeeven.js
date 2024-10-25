
let arr=[1,2,34,4,56,33]
function removeven(arr){
    for(let i=arr.length-1;i>=0;i--){
        if(arr[i]%2===0){
            arr.splice(i,1)
        }
    }
    return arr
}
console.log(removeven(arr))