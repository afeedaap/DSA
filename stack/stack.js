// class Stack{
//     constructor(){
//         this.item=[]
//     }
//     push(element){
//         this.item.push(element)
//     }
//     pop(){
//         if(this.isEmpty()){
//             return 'stack empty'
//         }
//         return this.item.pop()
//     }
//     peek(){
//         if(this.isEmpty()){
//             return "stack is empty"
//         }
//         return this.item[this.item.length-1]
//     }
//     isEmpty(){
//         return this.item.length===0
// }
// size(){
//     return this.item.length
// }
// print(){
//     console.log(this.item.toString())

// }
// }
// const stack=new Stack()
// stack.push(10)
// stack.push(20)
// stack.push(30)
// stack.print()
// stack.pop()

// console.log("top elment",stack.peek())
// console.log(stack.size());


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
    isempty(){
        return this.size==0
    }
    push(elment){
        let node=new Node(elment)
        node.next=this.top
        this.top=node
        this.size++
    }
    pop(){
        if(this.isempty()){
            return "stack is empty"
        }
        let popnode=this.top
        this.top=this.top.next
        this.size--
        return popnode.value
    }
    peek(){
        if(this.isempty()){
            return "stack emplty"
        }
        return this.top.value
    }
    print(){
        let curr=this.top
        let stackelments=" "
        while(curr){
            stackelments+=`${curr.value} ->`
            curr=curr.next
        }
        console.log(stackelments+"null")
    }
}
let stack=new Stack()
stack.push(10)
stack.push(20)
stack.push(30)
stack.pop()
stack.print()
console.log(stack.peek())