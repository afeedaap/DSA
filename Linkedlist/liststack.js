const LinkedList=require('./headtail.js')
console.log(LinkedList)
class LinkedListStack{
    constructor(){
        this.list=new LinkedList()
    }
    push(value){
        this.list.prepend(value)
    }
    pop(){
        return this.list.removalFront()
    }
    peek(){
        return this.list.head.value
    }
    isEmpty(){
        return this.list.isEmpty()
    }
    getsize(){
        return this.list.getsize()
    }
    print(){
        return this.list.print()
    }
}
const stack=new LinkedListStack()
console.log(stack.isEmpty())
stack.push(100)
stack.push(200)
stack.push(300)
console.log(stack.isEmpty())
console.log(stack.getsize())
stack.print()
stack.pop()
stack.print()
console.log(stack.peek())
