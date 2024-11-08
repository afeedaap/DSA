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
//Find the Sum of All Nodes of a BST
class TreeNode {
    constructor(value) {
      this.value = value;
      this.left = null;
      this.right = null;
    }
  }
  
  function sumAllNodes(root) {
    if (root === null) return 0;
    return root.value + sumAllNodes(root.left) + sumAllNodes(root.right);
  }
  
  // Example BST
  let root = new TreeNode(10);
  root.left = new TreeNode(5);
  root.right = new TreeNode(15);
  root.left.left = new TreeNode(2);
  root.left.right = new TreeNode(7);
  
  console.log(sumAllNodes(root)); // Output: 39 (10 + 5 + 15 + 2 + 7)
  