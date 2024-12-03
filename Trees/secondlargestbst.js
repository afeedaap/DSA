class TreeNode{
    constructor(value){
        this.value=value
        this.left=null
        this.right=null
    }
}
function secondlargest(root){
    if((!root||(!root.left&&!root.right)))
        {
            return null
        }
        let current=root
        let parent=null
        while(current.right!==null){
            parent=current
            
            current=current.right
        }
        if(current.left!=null){
            return largest(current.left)
        }
        return parent.value
        function largest(node){
            while(node.right!==null){
                node=node.right
            }
            return node.value
        }
    }

let root = new TreeNode(20);
root.left = new TreeNode(10);
root.right = new TreeNode(30);
root.right.left = new TreeNode(25);
root.right.right = new TreeNode(40);
console.log("second largest is",secondlargest(root))