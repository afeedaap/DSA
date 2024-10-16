function secondlargest(arr){
    let max1=0;max2=0
    for(let i=0;i<arr.length;i++){
        if(arr[i]>max1)
            {
                max2=max1
                max1=arr[i]
            }
            
    else if(arr[i]>max2&& arr[i]<max1)
        max2=arr[i]
           
    }
    return [max2,max1]
}
let arr=[12,121,65,78,2]
console.log(secondlargest(arr))