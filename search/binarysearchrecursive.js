
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



