let arr=[1,2,34,5,13]
function secondsmallest(arr){
    let first=0
    let second=0
    for(let i=1;i<arr.length;i++){
        if(arr[i]<first)
            {
                second=first
               
                first=arr[i]
            }
            else if(arr[i]>first&&arr[i]>second){
                second=arr[i]
            }
    }
    return second
}
console.log(secondsmallest(arr));