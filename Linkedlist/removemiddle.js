class Node{
    constructor(value){
        this.value=value
        this.next=null
    }
}
class LinkedList{
    constructor(){
        this.head=null
        this.tail=null
        this.size=0
    }
    isEmpty(){
        return this.size===0
    }
    getsize(){
        return this.size
    }
    prepend(value){
        const node=new Node(value)
        if(this.isEmpty()){
            this.head=node
        }
        else{
            node.next=this.head
            this.head=node
        }
        this.size++
    }
    append(value){
        const node=new Node(value)
        if(this.isEmpty()){
            this.head=node
        }else{
            let curr=this.head
            while(curr.next){
                curr=curr.next
            }
            curr.next=node
        }
        this.size++
    }
    
    print(){
        let curr=this.head
        let listvalues=" "
        while(curr){
            listvalues+=`${curr.value} `
            curr=curr.next
        }
        console.log(listvalues)
    }

  removeMiddle() {
    if (this.isEmpty()) {
      
      return null;
    }

    let slow = this.head;
    let fast = this.head;
    let prev = null;

    
    while (fast !== null && fast.next !== null) {
      prev = slow;
      slow = slow.next;
      fast = fast.next.next;
    }

    prev.next = slow.next;
    this.size--;
  }
}

let list =new LinkedList()
console.log(list.isEmpty())
list.prepend(10)
list.prepend(20)
list.prepend(30)
list.prepend(40)
list.prepend(50)
list.prepend(60)
list.print()
list.removeMiddle()
list.print()
console.log(list.getsize())

// list.append(40)
// list.append(30)
// list.append(20)
// list.append(10)
// list.print()


