class Stack{
    constructor(){
        this.item=[]
    }
    push(element){
        this.item.push(element)
    }
    pop(){
        if(this.isEmpty()){
            return 'stack empty'
        }
        return this.item.pop()
    }
    peek(){
        if(this.isEmpty()){
            return "stack is empty"
        }
        return this.item[this.item.length-1]
    }
    isEmpty(){
        return this.item.length===0
}
size(){
    return this.item.length
}
print(){
    console.log(this.item.toString())

}
}
const stack=new Stack()
stack.push(10)
stack.push(20)
stack.push(30)
console.log(stack.print())
stack.pop()
console.log(stack.print())
console.log("top elment",stack.peek())
console.log(stack.size());