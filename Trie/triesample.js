class TrieNode{
    constructor(){
        this.child=Array(26).fill(null)
        this.wordEnd=false
    }
}
class Trie{
    constructor(){
        this.root=new TrieNode()
    }
    insertKey(key){
        let curr=this.root
        for(let c of key){
            let index=c.charCodeAt(0)-'a'.charCodeAt(0)
            if(curr.child[index]===null){
                let newnode=new TrieNode()
                curr.child[index]=newnode
            }
            curr=curr.child[index]
        }
        curr.wordEnd = true

    }
    search(key){
        let curr=this.root
        for(let c of key){
            let index=c.charCodeAt(0)-'a'.charCodeAt(0)
            if(curr.child[index]===null){
                return false
            }
            curr=curr.child[index]
        }
      return curr.wordEnd=true
    }
}
const trie=new Trie()
trie.insertKey("apple")
console.log(trie.search("apple"))