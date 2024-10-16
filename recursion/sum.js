function recussivesum(arr,n=arr.length-1){
if(n<0) return 0
return arr[n]+recussivesum(arr,n-1)
}
console.log(recussivesum([1,2,3,4,5]))