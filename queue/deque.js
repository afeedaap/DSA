class Dequeue{
    constructor(){
        this.item=[]
    }
    isEmpty(){
        return this.item.length===0
    
    }
    size(){
        return this.item.length
    }
    addRear(element){
        this.item.push(element)
    }
    addFront(element){
        this.item.unshift(element)
    }
    removeFront(){
        return this.item.shift()
    }
    removeRear(){
        return this.item.pop()
    }
    print(){
        console.log(this.item.toString())
    }
    peekFront(){
        return this.item[0]
    }
    peekRear(){
        return this.item.length-1
    }
}
let queue=new Dequeue()
console.log(queue.isEmpty())
queue.addFront(10)
queue.addFront(20)
queue.print()
queue.addRear(30)
queue.addRear(40)
queue.print()
queue.removeFront()
queue.print()
console.log(queue.peekFront())

