class Node{
    constructor(value){
        this.value=value
        this.left=null
        this.right=null
    }
}
class binarySerach{
    constructor(){
        this.root=null
    }
    isEmpty(){
        return this.root==null
    }
    insert(value){
        let node=new Node(value)
        if(this.isEmpty()){
            this.root=node
        }
        else{
            this.insertNode(this.root,node)
        }
    }
    insertNode(root,node){
        if(node.value<root.value){
            if(root.left===null){
                root.left=node
            }
            else{
                this.insertNode(root.left,node)
            }
        }
        else{
            if(root.right===null){
                root.right=node
            }else{
                this.insertNode(root.right,node)
            }
        }
    }
    preorder(root){
        if(root){
            console.log(root.value)
            this.preorder(root.left)
            
            this.preorder(root.right)
        }
    }
}
const bst=new binarySerach()
console.log(bst.isEmpty())
bst.insert(1)
bst.insert(2)
bst.insert(4)
bst.insert(5)
bst.preorder(bst.root)