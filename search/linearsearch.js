
function linearsearch(arr,target){
    for(let i=0;i<arr.length;i++){
        if(arr[i]===target){
            return 1
        }
        
    }
    return -1
}
let arr=[1,2,34,56,78]
// console.log(linearsearch(arr,56))
//recurssive linear search
function recurssivelinearsearch(arr,target,index=0){
    if(index>=arr.length) return -1

    if(arr[index]===target) return 1
    return recurssivelinearsearch(arr,target,index+1)
}
console.log("recurssive is "+recurssivelinearsearch(arr,5))