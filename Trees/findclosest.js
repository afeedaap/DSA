class TreeNode{
constructor(value){
    this.value=value
    this.left=null
    this.right=null
}
}
function findClosestVlaueBst(root,target){
    let closest=root.value
    function traverse(node){
        if(node===null) return 
        if(Math.abs(node.value-target)<Math.abs(closest-target)){
            closest=node.value
        }
        if(target<node.value){
            traverse(node.left)
        }else{
            traverse(node.right)
        }
    }
    traverse(root)
    return closest
}
// Create a sample BST
let root = new TreeNode(10);
root.left = new TreeNode(5);
root.right = new TreeNode(15);
root.left.left = new TreeNode(2);
root.left.right = new TreeNode(7);
root.right.right = new TreeNode(20);

// Find the closest value to 12
let closestValue = findClosestVlaueBst(root, 12);
console.log(closestValue); // Expected output: 10
