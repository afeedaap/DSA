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
// recussive binary search
// function recurssivebinary(arr,target){
//     return search(arr,target,0,arr.length-1)
// }
// function search(arr,target,leftindex,rightindex){
//     if(leftindex>rightindex)
//         {
//             return -1
//         }
//         let middleindex=Math.floor((leftindex+rightindex)/2)
//         if(target===arr[middleindex])
//             {
//                 return middleindex
//             }
//             if(target<arr[middleindex]){
//             return search(arr,target,leftindex,middleindex-1)
//             }
//             else{
//                 return search(arr,target,middleindex+1,rightindex)
//             }
// }
// console.log(recurssivebinary([1,2,3,4,5,6],4))
// console.log(recurssivebinary([1,2,3,4,5,6],14))
// console.log(recurssivebinary([1,2,3,4,5,6],1))