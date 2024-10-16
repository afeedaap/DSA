const arr=[1,34,67,23,78]
function findlargest(arr){
let max=arr[0]
let small=arr[0]
for(let i=0;i<arr.length;i++){
    if(arr[i]>max)
        {
            max=arr[i]
        }

      if(arr[i]< small) {
        small=arr[i]
      } 
        
}
return [max,small]

}
const result=findlargest(arr)
console.log(`maximum number is ${result[0]}, smallest number is ${result[1]}`)