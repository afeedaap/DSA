class TrieNode{
    constructor(){
        this.children={}
        this.isEndOfWord=false;

    }
}
class Trie{
    constructor(){
        this.root=new TrieNode()
    }
    insert(word){
        let node=this.root
        for (let char of word){
            if(!node.children[char]){
                node.children[char]=new TrieNode
            }
node=node.children[char]
        }
        node.isEndOfWord=true
    }
    search(word){
        let node=this.root
        for(let char of word){
            if(!node.children[char]){
                return false
            }
            node=node.children[char]
        }
        return node.isEndOfWord
    
    }
    startWith(prefix){
        let node=this.root
        for(let  char of prefix){
            if(!node.children[char]){
                return false
            }
            node=node.children[char]
        }
        return true
    }
    suggest(prefix){
        const suggestions=[]
        let node=this.root
        for (let char of prefix){
            if(!node.children[char]) return suggestions
            node=node.children[char]
        }
        const dfs = (currentNode, currentPrefix) => {
            if (currentNode.isEndOfWord) {
                suggestions.push(currentPrefix);
            }
            for (let child in currentNode.children) {
                dfs(currentNode.children[child], currentPrefix + child);
            }
        };

        // Start DFS from the last node of the prefix
        dfs(node, prefix);
        return suggestions;
    }
   
}
const trie=new Trie()
trie.insert("apple")
trie.insert("app")
trie.insert("ape")
console.log(trie.search("app"))
console.log(trie.startWith("appppp"))
console.log(trie.suggest("app"))

 
