class node{
    constructor(value){
        this.value=value
        this.children=[]
    }
    addchild(node){
        this.children.push(node)

    }
}
function countmorethanone(root){
    if(!root){
        return 0
    }
    let count=0
    let childcount=root.children.length
    if(childcount>1){
        count++
    }
    for(let child of root.children){
        count+=countmorethanone(child)
    }
    return count
}
let root=new node(1)
let child1=new node(2)
let child2=new node(3)
let child3=new node(4)
root.addchild(child1)
root.addchild(child2)
root.addchild(child3)
child1.addchild(new node(5));
child1.addchild(new node(6));

child2.addchild(new node(7));
child2.addchild(new node(44));

console.log(countmorethanone(root))