// queue implementation using object
class Queue{
    constructor(){
        this.item={}
        this.rear=0
        this.front=0
    }
    enqueue(elment){
        this.item[this.rear]=elment
        this.rear++
    }
    dequeue(){
        const items=this.item[this.front]
        delete this.item[this.front]
        this.front++
        return items
    }
    isEmpty(){
        return this.rear-this.front===0
    }
    peek(){
        return this.item[this.front]
    }
    size(){
        return this.rear-this.front
    }
    print()
{
console.log((this.item));
}
}
const queue=new Queue()
queue.enqueue(10)
queue.enqueue(20)
queue.enqueue(30)
console.log(queue.print())
queue.dequeue()
console.log(queue.print())
console.log(queue.size());
console.log(queue.isEmpty());
queue.dequeue()
queue.dequeue()
console.log(queue.isEmpty());