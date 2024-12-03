class TreeNode{
    constructor(value){
        this.value=value
        this.left=null
        this.right=null
    }
}
function sumEvenElements(root){
    let sum=0
    function traverse(node){
        if(node==null) return
        if(node.value%2==0){
            sum+=node.value
        }
        traverse(node.left)
        traverse(node.right)
    }
    traverse(root)
    return sum
}
let root=new  TreeNode(10)
root.left=new TreeNode(5)
root.right=new TreeNode(15)
root.left.left=new TreeNode(2)
root.left.right=new TreeNode(7)
root.right.left=new TreeNode(12)
root.right.right=new TreeNode(20)
console.log(sumEvenElements(root))

