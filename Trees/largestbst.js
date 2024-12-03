class tree{
    constructor(value){
        this.value=value
        this.left=null
        this.right=null
    }
}
let root=new tree(50)
root.left=new tree(20)
root.right=new tree(60)
root.left.left=new tree(8)
root.left.right=new tree(30) 
root.right.left=new tree(35)
root.right.right=new tree(75)
// function largest(root){
//     if(!root) return null
//     let current=root
//     while(current.right!==null){
//         current=current.right
//     }
//     return current.value
// }
// console.log("largest value",largest(root))

// function secondlargest(root){
//     if((!root||(!root.left&&!root.right)))
//         {
//             return null
//         }
//         let current=root
//         let parent=null
//         while(current.right!==null){
//             parent=current
            
//             current=current.right
//         }
//         if(current.left!=null){
//             return largest(current.left)
//         }
//         return parent.value
//         function largest(node){
//             while(node.right!==null){
//                 node=node.right
//             }
//             return node.value
//         }
// }
// function secondsmallest(root){
//     if(!root||(!root.left&&!root.right)){
//         return null
//     }
//     let current=root
//     let parent=null
//     while(current.left!==null){
//         parent=current
//         current=current.left
//     }
//     while(current.right!==null){
//         current=current.right
//     }
//     return parent.value
//     function smallest(node){
//         while(node.left!==null){
//             current=current.left
//         }
//     }

// }
// console.log(secondsmallest(root))
