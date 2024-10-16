let obj={a:20,b:34,c:45,d:340}
function highestkey(obj){
let max=0
let highestkey=''

for(let key in obj){
    if(obj[key]>max){
        max=obj[key]
        highestkey=key
    }
}
return {[highestkey]:max}
}
console.log(highestkey(obj))
