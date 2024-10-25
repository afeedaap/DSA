function nonrepeatative(arr){
    let frequency={}
    for(let i=0;i<arr.length;i++){
        let elment=arr[i]
        if(frequency[elment]){
            frequency[elment]++
        }
        else{
            frequency[elment]=1
        }
    }
   

    let nonrepeat=[]
    for(let i=0;i<arr.length;i++){
        if(frequency[arr[i]] === 1){
            nonrepeat.push(arr[i])
        }
    }
    return nonrepeat

}
let arr=[1,2,3,1,1,4,5,6]
console.log(nonrepeatative(arr))

