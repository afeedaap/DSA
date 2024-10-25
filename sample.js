// function insertionsort(arr){
//     for(let i=1;i<arr.length;i++){
//         let numbertoinsert=arr[i]
//         j=i - 1
//         while(j>=0&&arr[j]>numbertoinsert){
//             arr[j+1]=arr[j]
//             j=j-1
//         }
//         arr[j+1]=numbertoinsert
//     }
 
// }
// let arr=[1,34,23,67,1,9]
// insertionsort(arr)
// console.log(arr);
let arr=[21,4,5,621,56]

function quicksort(arr){
    if(arr.length<=1){
        return arr
    }
let pivot=arr[arr.length - 1]
let left=[]
let right=[]
for(let i=0;i<arr.length-1;i++){
    if(arr[i]<pivot){
        left.push(arr[i])
    }else{
        right.push(arr[i])
    }
}
return [...quicksort(left), pivot,...quicksort(right)];
}
let sorted=quicksort(arr)
console.log(sorted)

