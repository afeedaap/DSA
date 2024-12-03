class TreeNode{
    constructor(value){
        this.value=value
        this.left=null
        this.right=null
    }
}
function symmetry(node){
    if(node===null) return true
    function mirror(left,right){
        if(left===null && right===null) return true
        if(left===null || right===null) return false
        return (left.value===right.value && mirror(left.left,right.right)&&mirror(left.right,right.left))
    }
    return mirror(node.left,node.right)

}



let root = new TreeNode(5);
  root.left = new TreeNode(5);
  root.right = new TreeNode(5);
  root.left.left = new TreeNode(2);
  root.left.right = new TreeNode(2);
  root.right.left = new TreeNode(2);
root.right.right = new TreeNode(2);
  
  console.log(symmetry(root)); // Output: 39 (10 + 5 + 15 + 2 + 7)
  