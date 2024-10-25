// function selectionSort(arr){
// for(let i=0;i<arr.length-1;i++){
//     for(j=i+1;j<arr.length;j++){
//         if(arr[i]>arr[j]){
//             let temp=arr[i]
//             arr[i]=arr[j]
//             arr[j]=temp
//         }
//     }
// }
// return arr
// }
// let arr=[1,56,121,65,89,12]
// console.log(selectionSort(arr))

function selectionsort(arr){
    for(let i=0;i<arr.length-1;i++){
        let minindex=i
        for(let j=i+1;j<arr.length;j++){
            if(arr[j]<arr[minindex]){
                minindex=j
            }
        }
    
    if(minindex!==i){
        let temp=arr[i]
        arr[i]=arr[minindex]
        arr[minindex]=temp
    }
}
return arr
}
let arr=[1,2,34,5,123]
console.log(selectionsort(arr))