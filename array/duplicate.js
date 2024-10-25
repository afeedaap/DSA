function dulicate(arr){
    let result=[]
    for(let i=0;i<arr.length;i++){
        if(!result.includes(arr[i]))
            result.push(arr[i])
    }
    return result
}
console.log(dulicate([1,3,1,1,4,5,6]))
//without creating new array
function duplicate(arr){
    for(let i=0;i<arr.length;i++){
        for(let j=i+1;j<arr.length;j++){
            if(arr[i]===arr[j]){
                for(let k=j;k<arr.length-1;k++){
                    arr[k]=arr[k+1]
                }
                arr.length--;
                j--
            }
        }
    }
    return arr
}
console.log(duplicate([1,2,1,3,1,4]))