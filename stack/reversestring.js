function reverseString(str){
    stack=[]
    for(char of str){
        stack.push(char)
    }
   reverse=''
   while(stack.length>0){
    reverse+=stack.pop()
   }
   return reverse

}

let str="hello"
console.log(reverseString(str))