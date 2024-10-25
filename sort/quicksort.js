// //quick sort
// function quicksort(arr){
//     if(arr.length<2){
//         return arr
//     }
// let pivot=arr[arr.length-1]
// let left=[]
// let right=[]
// for(let i=0;i<arr.length-1;i++){
//     if(arr[i]<pivot){
//         left.push(arr[i])
//     }else{
//         right.push(arr[i])
//     }
// }
// return [...quicksort(left),pivot,...quicksort(right)]
// }
// let arr=[1,4,2,7,-10]
// console.log(quicksort(arr))
// console.log(arr);

function quicksort(arr){
    if(arr.length<2){
        return arr
    }
    let pivot=arr[arr.length-1]
    let left=[]
    let right=[]
    for(let i=0;i<arr.length-1;i++){
        if(arr[i]<pivot){
            left.push(arr[i])
        }
        else{
            right.push(arr[i])
        }
    }
    return [...quicksort(left),pivot,...quicksort(right)]

}
let arr=[12,34,56,1,5,89]
console.log(quicksort(arr))