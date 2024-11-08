class TreeNode{
    constructor(value){
        this.value=value
        this.left=null
        this.right=null
    }
}
function preOrder(node){
    if(node===null) return 
    console.log(node.value)
    preOrder(node.left)
    preOrder(node.right)
}
function inOrder(node){
    if(node===null) return 
    inOrder(node.left)
    console.log(node.value)
    inOrder(node.right)
}
function postOrder(node){
    if(node==null) return 
    postOrder(node.left)
    postOrder(node.right)
    console.log(node.value)
}
let root=new TreeNode(1)
root.left=new TreeNode(2)
root.right=new TreeNode(3)
root.left.left=new TreeNode(4)
root.left.right=new TreeNode(5)
console.log("preorder")
preOrder(root)
console.log("inorder")
inOrder(root)
console.log("post order")
postOrder(root)