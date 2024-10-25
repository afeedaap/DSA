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
    size(){
        return this.size
    }
    peek(){
        return this.head.value
    }
    prepend(element){
        const node=new Node(element)
        if(this.isEmpty()){
            this.head=node
            this.tail=node

        }
        else{
            node.next=this.head
            this.head=node
        }
        this.size++
    }
    append(element){
        const node=new Node(element)
        if(this.isEmpty()){
            this.head=node
            this.tail=node
        }else{
            this.tail.next=node
            this.tail=node
        }
        this.size++

    }
    print(){
        if(this.isEmpty){
            console.log("list is empty")
        }else{
            let curr=this.head
            let listvalues=''
            while(curr){
                listvalues+=`${curr.value}`
                curr=curr.next
            }
            console.log(listvalues)
        }

    }

}
