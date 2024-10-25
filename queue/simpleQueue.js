class Queue{
    constructor(){
        this.item=[]
    }
    isEmpty(){
        return this.item.length===0
    }
    enqueue(element){
        this.item.push(element)
    }
    dequeue(){

   
    if(this.isEmpty()){
        return "queue is empty"
    }
    return this.item.shift()
}
peek(){
    return this.isEmpty?"queue is empty":this.item[0]
}
print(){
    console.log(this.item.toString())
}
size(){
    return this.item.length
}
}
const queue=new Queue()
console.log(queue.isEmpty())
queue.enqueue(10)
queue.enqueue(20)
console.log(queue.isEmpty())
queue.print()
queue.dequeue()
queue.print()
console.log(queue.size())


