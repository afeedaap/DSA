class node{
    constructor(value){
        this.value=value
        this.left=null
        this.right=null
    }
}
// function bfstraversal(root){
//     if (root===null) return
//     const queue=[root]
//     while(queue.length>0){
//         const current=queue.shift()
//         console.log(current.value)
//         if(current.left!==null){
//             queue.push( current.left)
//         }
//         if(current.right!==null){
//             queue.push(current.right)
//         }
//     }
    

// }
function findminimum(root){
    if(root===null) return 
    while(root.left!==null){
        root=root.left
    }
    return root
}
function findamximum(root){
    if(root===null) return 
    while(root.right!==null){
        root=root.right
    }
    return root
}
let root=new node(1)
root.left=new node(2)
root.right=new node(3)
root.left.right=new node(4)
root.left.left=new node(5)
root.right.left=new node(6)
root.right.right=new node(7)
// console.log(findminimum(root))
// console.log(bfstraversal(root))
console.log(findamximum(root))