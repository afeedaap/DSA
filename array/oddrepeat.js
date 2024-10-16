function oddrepeatative(arr){
    let result=[]
    let count={}
    for(let num of arr){
        if(num%2!==0){
            count[num]=((count[num]||0)+1)
        }
    }
  
  for(let num in count){
    if(num>1){
        result.push(Number(num))
    }
  }
  return result


}

let arr=[1,2,3,4,1,2,5,7,3]
console.log(oddrepeatative(arr))