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
            this.head = node;      
        }
        this.size++;
    }
    append(value){
        const node=new Node(value)
        if(this.isEmpty()){

            this.head=node
        }
        else{

            let curr=this.head
            while(curr.next){
                curr=curr.next
            }
            curr.next=node
        }
        this.size++
    }
    insert(value,index){
        if(index<0||index>this.size) {
      return 
    }
    if(index===0){
        this.prepend(value)

        
    }
    else{
        const node=new Node(value)
        let prev=this.head
        for(let i=0;i<index-1;i++){
            prev=prev.next
        }
        node.next=prev.next
        prev.next=node
        this.size++
    }
}
removalofitem(index){
    if(index<0||index>this.size)
        {
            return null
        }
        let removedNode;
        if(index===0){
            removedNode=this.head
            this.head=this.head.next
        }
        else{
            let prev=this.head
            for(let i=0;i<index-1;i++){
                prev=prev.next
            }
            removedNode=prev.next
            prev.next=removedNode.next
        }
        this.size--;
        return removedNode.value
}
removeValue(value){
    if(this.isEmpty()){
        return null
    }
    if(this.head.value===value)
        {
            this.head=this.head.next
            this.size--;
            return value
        }else{
            let prev=this.head
        while(prev.next&&prev.next.value!==value){
            prev=prev.next
        }
        if(prev.next){
            const removedNode=prev.next
            prev.next=removedNode.next
            this.size--;
            return value
        }
        return null
        }
}
search(value){
    if(this.isEmpty()){
        return -1
    }
    let i=0;
     let curr=this.head
     while(curr){
        if(curr.value==value){
            return 1
        }
        curr=curr.next
        i++
     }
     return -1
}
reverse(){
    let prev=null
    let curr=this.head
    while(curr){
        let next=curr.next
        curr.next=prev
        prev=curr
        curr=next
    }
    this.head=prev

}
    print(){
        if(this.isEmpty()){
            console.log('list is empty')
        }
        else{
            let curr=this.head
            let listvalues=' '
            while(curr){
                listvalues+=`${curr.value} `
                curr=curr.next
            }
            console.log(listvalues);
        }
    }
}
const list=new LinkedList()
console.log("link list empty",list.isEmpty())
console.log("size of the list",list.getsize())
list.prepend(10)
list.print()
console.log("size of the list",list.getsize())
list.prepend(20)
list.print()

list.prepend(30)
list.print()

// list.prepend(30)
// list.print()
// list.append(50)
// list.print()
// list.insert(10,0)
// list.print()
// list.insert(20,0)
// list.print()
// list.insert(30,1)
// list.print()
// console.log(list.removalofitem(1))
console.log(list.search(30))
list.print()
list.reverse()
list.print()