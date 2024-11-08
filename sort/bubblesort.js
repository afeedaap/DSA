// function bubblesort(arr){
//     let swapped
//     do {
//         swapped =false
//         for(let i=0;i<arr.length-1;i++){
//         if(arr[i]>arr[i+1]){
//             let temp=arr[i]
//             arr[i]=arr[i+1]
//             arr[i+1]=temp
//             swapped=true
//         }
//     }
//     }
//     while(swapped)
      
// }
// const arr=[4,-12,56,23,7]
// bubblesort(arr)
// console.log(arr);



// function bubblesort(arr){
//     let n=arr.length
//     let swapped
//     do{
//         swapped=false
//         for(let i=0;i<n-1;i++){
//             if(arr[i]>arr[i+1])
//                 {
//                     [arr[i],arr[i+1]]=[arr[i+1],arr[i]]
//                     swapped=true
//                 }

//         }

//     }
//     while(swapped)
// }
// let arr=[1,4,5,6,7,-1]
// bubblesort(arr)
// console.log(arr);

function quicksort(arr){
   for(i=1;i<arr.length;i++){
    let numberttosort=arr[i]
    let j=i-1
    while(j>=0&&arr[j]>numberttosort){
        arr[j+1]=arr[j]
        j=j-1
    }
    arr[j+1]=numberttosort
   }
  
   return arr
}
let arr=[1,3,5,66,-1]
console.log(quicksort(arr))
