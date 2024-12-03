class Node{
    constructor(value){
        this.value=value
        this.left=null
        this.right=null
    }
}
class BinaryTree{
    constructor(){
        this.root=null
    }
    insert(value){
        const newNode=new Node(value)
        if(!this.root){
            this.root=newNode
            return
        }
        const queue=[this.root]
        while(queue.length>0){
            const current=queue.shift()
            if(!current.left){
                current.left=newNode
                break;
            }else{
                queue.push(current.left)
            }
            if(!current.right){
                current.right=newNode
                break;
            }else{
                queue.push(current.right)
            }
        }
    }
    search(value){
        const queue=[this.root]
        while(queue.length>0){
            const current=queue.shift()
            if(current.value===value){
                return true
            }
            if(current.left) queue.push(current.left)
                if(current.right) queue.push(current.right)
        }
    return false

    }
    // Print the binary tree in level-order
print() {
    if (!this.root) {
      console.log("Tree is empty");
      return;
    }
  
    const queue = [this.root];
    const result = [];
  
    while (queue.length > 0) {
      const current = queue.shift();
      result.push(current.value);
  
      // Add left child if it exists
      if (current.left) queue.push(current.left);
  
      // Add right child if it exists
      if (current.right) queue.push(current.right);
    }
  
    console.log("Binary Tree (Level-order):", result.join(" "));
  }
  
}
const tree=new BinaryTree()
tree.insert(1)
tree.insert(2)
tree.insert(3)
tree.insert(4)
tree.insert(5)
tree.print()