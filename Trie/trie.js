// class Trienode{
//     constructor(){
//         this.children={}
//         this.endOfWord=false
//     }
// }
// class Trie{
//     constructor(){
//         this.root=new Trienode()
//     }
//     insert(word){
//         let node=this.root
//         for(let char of word){
//             if(!node.children[char]){
//                 node.children[char]=new Trienode()
//             }
//             node=node.children[char]
//         }
//         node.endOfWord=true

//     }
//     search(word){
//         let node=this.root
//         for(let char of word){
//             if(!node.children[char]){
//                 return false
//             }
//             node=node.children[char]
//         }
//         return node.endOfWord

       
//     }
//     strttwith(prefix){
//         let node=this.root
//         for(let char of prefix){
//             if(!node.children[char]){
//                 return  false
//             }
//             node=node.children[char]
//         }
//         return true
//     }
// }
// let trie=new Trie()
// trie.insert("afeeda")
// trie.insert("afsal")
// console.log(trie.search("afeeda"))
// console.log(trie.strttwith("afsal"))



class TrieNode{
    constructor(){
        this.children={}
        this.endword=false
    }
}
class Trie{
    constructor(){
        this.root=new TrieNode()
    }
insert(word){
    let node=this.root
    for(let char of word){
        if(!node.children[char]){
            node.children[char]=new TrieNode()
        }
        node=node.children[char]
    }
    node.endword=true
}
search(word){
    let node=this.root
    for(let char of word){
        if(!node.children[char]){
            return false
        }
        node=node.children[char]
    }
    return node.endword
}
startwith(prefix){
    let node=this.root
    for(let char of prefix){
        if(!node.children[char]){
            return false
        }
        node=node.children[char]

    }
    return true

}
}
let trie=new Trie()
trie.insert("afeeda")
trie.insert("afsal")
console.log(trie.search("afeeda"))
console.log(trie.startwith("af"))