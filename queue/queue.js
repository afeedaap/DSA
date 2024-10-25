//queeue implemetation  using array
class Queue {
    constructor(){
        this.item=[]

    }
    enqueue(element)
{
this.item.push(element)
}
dequeue(element){
    return this.item.shift()
}
isEmpty(){
    return this.item.length===0
}
peek(){
    if(this.isEmpty()){
       return 'queue is empty'
    }
    return this.item[0]
}
size(){
    return this.item.length
}
print(){
    console.log(this.item.toString());
}
}
let queue=new Queue()
queue.enqueue(0)
queue.enqueue(1)
queue.enqueue(2)
console.log(queue.print());
queue.dequeue()
console.log(queue.print())
console.log(queue.peek());
console.log(queue.isEmpty());
queue.dequeue()
queue.dequeue()
console.log(queue.isEmpty());

