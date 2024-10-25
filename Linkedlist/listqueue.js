const LinkedList=require('./headtail.js')
class LinkedListQueue{
    constructor(){    
        this.list=new LinkedList()
    }
    enqueue(value){
this.list.append(value)
    }
    dequeue(){
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
const queue=new LinkedListQueue()
console.log(queue.isEmpty())
queue.enqueue(10)
queue.enqueue(20)
queue.enqueue(30)
console.log(queue.getsize())
queue.print()
queue.dequeue()
queue.print()
queue.peek()
console.log(queue.peek())
