let arr=[1,2,3,4,5,6]
//ist method
function reverse(arr){
    let start=0,end =arr.length-1
    while(start<end){
        [arr[start],arr[end]]=[arr[end],arr[start]]
        start++;
        end--;
    }
    return arr
}
let result=reverse(arr)
console.log(result);
//another method
let rev=arr.reverse()
console.log(rev);
//sort
let sort=arr.sort((a,b)=>b-a)
console.log(sort);
