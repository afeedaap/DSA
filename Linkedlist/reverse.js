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
//     getsize(){
//         return this.size
//     }
//     prepend(value){
//         let node=new Node(value)
//         if(this.isEmpty()){
//             this.head=node
//         }
//         else{
//             node.next=this.head
//             this.head=node
//         }
//         this.size++
//     }
//     print(){
//         if(this.isEmpty()){
//             console.log("list is empty")
//         }
//         else{
//         let curr=this.head
//         let listvalues=' '
//         while(curr){
//             listvalues+=`${curr.value} `
//             curr=curr.next
//         }
//         console.log(listvalues)
       
//     }

// }
// reverse(){
//     let prev=null
//     let curr=this.head
//     while(curr){
//         let next=curr.next
//         curr.next=prev
//         prev=curr
//         curr=next
//     }
//     this.head=prev
// }
// }
// const list=new LinkedList()
// console.log("link list empty",list.isEmpty())
// list.prepend(10)
// list.prepend(20)
// list.prepend(30)
// list.print()
// list.reverse()
// list.print()
// let arr=[1,2,3,4,55,101]
// function secondlargest(arr){
//     let first=0
//     let second=0
//     for(let i=0;i<arr.length;i++){
//         if(arr[i]>first){
//             second=first
//             first=arr[i]
//         }
//         else if(arr[i]<first&&arr[i]>second){
//             second=arr[i]
//         }
//     }
//     return second
// }
// console.log(secondlargest(arr))

//find reptative elmnt
let arr=[1,2,3,4,5,1,2,]
function nonrepetative(arr){
    let result=[]
    for(let i=0;i<arr.length;i++){
        if(!result.includes(arr[i])){
            result.push(arr[i])
        }
    }
    return result
}
console.log(nonrepetative(arr))