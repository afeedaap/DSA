function reverseString(str){
    if(str.length===0) return str
    return reverseString(str.slice(1))+str[0]
}
console.log(reverseString("hello"))