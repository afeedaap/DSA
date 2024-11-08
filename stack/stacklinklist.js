class Node{
    constructor(value){
        this.value=value
        this.next=null
    }
}
class Stack{
    constructor(){
        this.top=null
        this.size=0
    }

    push(element){
        const node=new Node(element)
        node.next=this.top
        this.top=node
        this.size++
    }
    isEmpty(){
        return this.size===0
    }
    size(){
        return this.size
    }
    peek(){
        if(this.isEmpty()){
            return "stack is empty"
        }
        return this.top.value
    }
    pop(){
        if(this.isEmpty()){
            return "stack empty"
        }
        let popnode=this.top
        this.top=this.top.next
        this.size--
        return popnode.value

        
    }
    print(){
       let curr=this.top
        let stackelments=" "
        while(curr){
            stackelments+=`${curr.value} -> `
            curr=curr.next
        }
        console.log(stackelments+"null")
    }
}
const stack=new Stack()
console.log(stack.isEmpty())
stack.push(10)
stack.push(20)
stack.push(30)
stack.print()
console.log(stack.peek())
stack.pop()
stack.print()
