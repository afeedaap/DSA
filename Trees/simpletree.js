class TreeNode{
    constructor(value){
        this.value=value
        this.left=null
        this.right=null

    }
}

function displaypreorder(node){
    if(node===null) return 
    console.log(node.value)
    displaypreorder(node.left)
    displaypreorder(node.right) //preorder=>[root,left,right]
}
function displayinorder(node){
    if(node===null) return 
  
    displayinorder(node.left)
    console.log(node.value)
    displayinorder(node.right) //inorder order=>[left,root,right]
}
function displayPostorder(node){
    if(node===null) return 
  
    displayPostorder(node.left)

    displayPostorder(node.right) //postorder=>[left,right,root]
    console.log(node.value)
}




let root=new TreeNode(1)
root.left=new TreeNode(12)
root.right=new TreeNode(3)
root.left.left=new TreeNode(4)
root.left.right=new TreeNode(5)
root.right.left=new TreeNode(6)
root.right.right=new TreeNode(7)
displaypreorder(root)
console.log("inorder ..")
displayinorder(root)
console.log("postorder ..")
displayPostorder(root)