// class Node{
//     constructor(value){
//         this.value=value
//         this.next=null
//         this.prev=null
//     }
// }
// class doublyLinkedlist{
//     constructor(){
//         this.head=null
//         this.tail=null
//         this.size=0
//     }
// }
class Node {
    constructor(value) {
      this.value = value;
      this.next = null; // Pointer to the next node
      this.prev = null; // Pointer to the previous node
    }
  }
  
  class DoublyLinkedList {
    constructor() {
      this.head = null;
      this.tail = null;
      this.size = 0;
    }
  
    isEmpty() {
      return this.size === 0;
    }
  
    getSize() {
      return this.size;
    }
  
    prepend(value) {
      const node = new Node(value);
      if (this.isEmpty()) {
        this.head = node;
        this.tail = node; // Point head and tail to the same node
      } else {
        node.next = this.head; // Link the new node to the old head
        this.head.prev = node;  // Link the old head back to the new node
        this.head = node;       // Update the head to the new node
      }
      this.size++;
    }
  
    append(value) {
      const node = new Node(value);
      if (this.isEmpty()) {
        this.head = node;
        this.tail = node; // Point head and tail to the same node
      } else {
        this.tail.next = node; // Link the old tail to the new node
        node.prev = this.tail;  // Link the new node back to the old tail
        this.tail = node;       // Update the tail to the new node
      }
      this.size++;
    }
  
    printForward() {
      let curr = this.head;
      let listValues = "";
      while (curr) {
        listValues += `${curr.value} <-> `;
        curr = curr.next;
      }
      console.log(listValues + "null");
    }
  
    printBackward() {
      let curr = this.tail;
      let listValues = "";
      while (curr) {
        listValues += `${curr.value} <-> `;
        curr = curr.prev;
      }
      console.log(listValues + "null");
    }
  
    remove(value) {
      if (this.isEmpty()) return;
  
      let curr = this.head;
  
      // Find the node to remove
      while (curr) {
        if (curr.value === value) {
          // Case 1: Node to remove is the head
          if (curr === this.head) {
            this.head = curr.next;
            if (this.head) this.head.prev = null; // Update new head's prev
          }
      
          if (curr === this.tail) {
            this.tail = curr.prev;
            if (this.tail) this.tail.next = null; // Update new tail's next
          }
          // Case 3: Node is in the middle
          if (curr.prev) curr.prev.next = curr.next; // Bypass the current node
          if (curr.next) curr.next.prev = curr.prev; // Bypass the current node
          this.size--;
          return;
        }
        curr = curr.next; // Move to the next node
      }
    }
  }
  
  // Example usage:
  const dll = new DoublyLinkedList();
  dll.append(10);
  dll.append(20);
  dll.append(30);
  dll.prepend(5);
  
  console.log("List printed forward:");
  dll.printForward();  // Output: 5 <-> 10 <-> 20 <-> 30 <-> null
  
  console.log("List printed backward:");
  dll.printBackward(); // Output: 30 <-> 20 <-> 10 <-> 5 <-> null
  
  dll.remove(20);
  console.log("After removing 20:");
  dll.printForward();  // Output: 5 <-> 10 <-> 30 <-> null
  