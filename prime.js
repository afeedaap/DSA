// function prime(n){
// if(n<2){
//     return false
// }
// for (let i=2;i<n;i++){
//     if(n%i==0){
//         return false
//     }
// }
// return true
// }
// console.log(prime(4))
// console.log(prime(5))
//recursive fibnacci
// function recurssivefib(n){
// if(n<2){
//     return n
// }
//     return recurssivefib(n-1)+recurssivefib(n-2)
// }
// console.log(recurssivefib(1))
// console.log(recurssivefib(2))
// console.log(recurssivefib(3))
//recurssive factorial
// function recurssivefact(n){
// if(n===1){
//     return 1
// }
//     return n*recurssivefact(n-1)
// }
// console.log(recurssivefact(6))
//linear search
// function linearsearch(arr,target){
//     for(let i=0;i<arr.length;i++){
//         if(arr[i]===target){
//             return 1
//         }
//     }
//     return -1
// }
// console.log(linearsearch([1,2,4,5,6],45))
// function binarysearch(arr,target){
//     let leftindex=0;
//     let rightindex=arr.length-1
//     while(leftindex<=rightindex){
//         let middleindex=Math.floor((leftindex+rightindex)/2)
//         if(target===arr[middleindex]){
//             return middleindex
//         }
//         if(target<arr[middleindex]){
//             rightindex=middleindex-1
//         }
//         else{
//             leftindex=middleindex+1
//         }

//     }

// return -1
// }
// console.log(binarysearch([1,3,4,5,6],5))//3
// console.log(binarysearch([1,3,4,5,6],1))//0
// console.log(binarysearch([1,3,4,5,6],12))//-1
// //recurssive binary solotion
function recurssivebinary(arr,target){
    return search(arr,target,0,arr.length-1)
}
function search(arr,target,leftindex,rightindex){
    if(leftindex>rightindex)
        {
            return -1
        }
        let middleindex=Math.floor((leftindex+rightindex)/2)
        if(target===arr[middleindex])
            {
                return middleindex
            }
            if(target<arr[middleindex]){
            return search(arr,target,leftindex,middleindex-1)
            }
            else{
                return search(arr,target,middleindex+1,rightindex)
            }
}
console.log(recurssivebinary([1,2,3,4,5,6],4))
console.log(recurssivebinary([1,2,3,4,5,6],14))
console.log(recurssivebinary([1,2,3,4,5,6],1))
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
//         // return arr
// }
// const arr=[4,-12,56,23,7]
// bubblesort(arr)
// console.log(arr);
// // console.log(bubblesort([1,-1,89,12,-2]))
//insertion sort
// function insertionsort(arr){
//     for(let i=0;i<arr.length;i++){
//         let numberttosort=arr[i]
//         j=i-1
//         while(j>=0&&arr[j]>numberttosort){
//             arr[j+1]=arr[j]
//             j=j-1
//         }
//         arr[j+1]=numberttosort
//     }

// } 
// let arr=[1,-2,67,23,-23]
// insertionsort(arr)
// console.log(arr);
//quick sort
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