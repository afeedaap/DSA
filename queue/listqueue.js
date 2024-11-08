
class ListNode {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class Queue {
    constructor() {
        this.front = null; // Points to the front node of the queue
        this.rear = null;  // Points to the rear node of the queue
        this.size = 0;     // Keeps track of the number of elements in the queue
    }

    // Enqueue: Add an element to the end of the queue
    enqueue(value) {
        const newNode = new ListNode(value);

        if (this.isEmpty()) {
            // If the queue is empty, both front and rear point to the new node
            this.front = newNode;
            this.rear = newNode;
        } else {
            // Otherwise, link the new node at the end of the queue and update rear
            this.rear.next = newNode;
            this.rear = newNode;
        }
        
        this.size++;
    }

    // Dequeue: Remove an element from the front of the queue
    dequeue() {
        if (this.isEmpty()) {
            return null; // If the queue is empty, there's nothing to dequeue
        }

        const dequeuedValue = this.front.value;
        
        // Move the front pointer to the next node
        this.front = this.front.next;

        // If the queue is now empty, reset the rear pointer as well
        if (!this.front) {
            this.rear = null;
        }
        
        this.size--;
        return dequeuedValue;
    }

    // Peek: View the element at the front of the queue without removing it
    peek() {
        if (this.isEmpty()) {
            return null;
        }
        return this.front.value;
    }

    // isEmpty: Check if the queue is empty
    isEmpty() {
        return this.size === 0;
    }

    // Get the size of the queue
    getSize() {
        return this.size;
    }
}

// Example usage:
const queue = new Queue();
queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(3);

console.log(queue.peek()); // Output: 1 (the element at the front)
console.log(queue.dequeue()); // Output: 1 (removes the front element)
console.log(queue.peek()); // Output: 2 (the new front element)
console.log(queue.getSize()); // Output: 2 (two elements left in the queue)
console.log(queue.isEmpty()); // Output: false (queue is not empty)
queue.dequeue();
queue.dequeue();
console.log(queue.isEmpty()); // Output: true (queue is now empty)


















































// class Node{
//     constructor(value){
//         this.value=value
//         this.next=null
//     }
// }
// class LinkedList{
//     constructor(){
//         this.head=null
//         this.tail=null
//         this.size=0
//     }
//     isEmpty(){
//         return this.size===0
//     }
//     size(){
//         return this.size
//     }
//     peek(){
//         return this.head.value
//     }
//     prepend(element){
//         const node=new Node(element)
//         if(this.isEmpty()){
//             this.head=node
//             this.tail=node

//         }
//         else{
//             node.next=this.head
//             this.head=node
//         }
//         this.size++
//     }
//     append(element){
//         const node=new Node(element)
//         if(this.isEmpty()){
//             this.head=node
//             this.tail=node
//         }else{
//             this.tail.next=node
//             this.tail=node
//         }
//         this.size++

//     }
//     print(){
//         if(this.isEmpty){
//             console.log("list is empty")
//         }else{
//             let curr=this.head
//             let listvalues=''
//             while(curr){
//                 listvalues+=`${curr.value}`
//                 curr=curr.next
//             }
//             console.log(listvalues)
//         }

//     }

// }
