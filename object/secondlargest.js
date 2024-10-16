let obj={a:3,b:560,c:34}
function secondlargest(obj){
let first=0
let second=0
for(let key in obj){
    let value=obj[key]
    if(value>first){
        second=first
        first=value
        
    }else if(value<first&&value>second){
        second=value
    }
   
}
return second
}
console.log(secondlargest(obj))
