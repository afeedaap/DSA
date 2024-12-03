class TreeNode{
    constructor(value){
        this.value=value
        this.left=null
        this.right=null
    }
}
function findHeight(root){
    if(root===null) return -1
    const leftHeight=findHeight(root.left)
    const rightHeight=findHeight(root.right)
    
    return Math.max(leftHeight,rightHeight)+1
}
const root=new TreeNode(1)
root.left=new TreeNode(2)
root.right=new TreeNode(3)
root.left.left=new TreeNode(4)
root.left.right=new TreeNode(5)
console.log("heoght of the tree",findHeight(root))



