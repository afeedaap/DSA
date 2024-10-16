function bubblesort(arr){
    let swapped
    do {
        swapped =false
        for(let i=0;i<arr.length-1;i++){
        if(arr[i]>arr[i+1]){
            let temp=arr[i]
            arr[i]=arr[i+1]
            arr[i+1]=temp
            swapped=true
        }
    }
    }
    while(swapped)
        // return arr
}
const arr=[4,-12,56,23,7]
bubblesort(arr)
console.log(arr);
 console.log(bubblesort([1,-1,89,12,-2]))
