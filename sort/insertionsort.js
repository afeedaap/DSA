function insertionsort(arr){
    for(let i=1;i<arr.length;i++){
        let numberttosort=arr[i]
        let j=i-1
        while(j>=0&&arr[j]>numberttosort){
            arr[j+1]=arr[j]
            j=j-1
        }
        arr[j+1]=numberttosort
    }

} 
let arr=[1,-2,67,23,-23]
insertionsort(arr)
console.log(arr)
