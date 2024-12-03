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
  