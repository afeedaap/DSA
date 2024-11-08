class TrieNode{
    constructor(){
        this.children=new Array(26).fill(null)
        this.wordCount=0
    }
    
}
class Trie{
    constructor(){
        this.root=new TrieNode()
    }
    insert(key){
        let currentnode=this.root
        for(let i=0;i<key.length;i++){
            const charindex=key[i].charCodeAt(0)-'a'.charCodeAt(0)
            if(currentnode.children[charindex]===null){
                currentnode.children[charindex]=new TrieNode()
            }
            currentnode=currentnode.children[charindex]
            
        }
        currentnode.wordCount++
    }
    searchKey(key){
        let currentnode=this.root
        for(let i=0;i<key.length;i++){
            const charindex=key[i].charCodeAt(0)-'a'.charCodeAt(0)
            if(currentnode.children[charindex]===null){
                return false
            }
            currentnode=currentnode.children[charindex]
        }
        return currentnode.wordCount>0
    }
    deleteKey(key) {
        this.deleteHelper(this.root, key, 0);
    }

    // Recursive helper function for deletion
    deleteHelper(currentNode, key, index) {
        // Base case: end of the key
        if (index === key.length) {
            // Word exists, decrement wordCount
            if (currentNode.wordCount > 0) {
                currentNode.wordCount--;
                return currentNode.children.every(child => child === null);
            }
            return false;
        }

        const charIndex = key[index].charCodeAt(0) - 'a'.charCodeAt(0);
        const childNode = currentNode.children[charIndex];

        // If the character path does not exist, the word is not in the Trie
        if (childNode === null) {
            return false;
        }

        // Recur to the next level in the Trie
        const shouldDeleteChild = this.deleteHelper(childNode, key, index + 1);

        // If true, remove the reference to the child node
        if (shouldDeleteChild) {
            currentNode.children[charIndex] = null;

            // Check if currentNode should be deleted (i.e., has no children and is not the end of another word)
            return currentNode.wordCount === 0 && currentNode.children.every(child => child === null);
        }

        return false;
    }
    displayHelper(node, prefix, words) {
        if (node.wordCount > 0) {
            words.push(prefix);
        }

        for (let i = 0; i < 26; i++) {
            if (node.children[i] !== null) {
                const char = String.fromCharCode(i + 'a'.charCodeAt(0));
                this.displayHelper(node.children[i], prefix + char, words);
            }
        }
    }

    // Main display function to call the helper and print the words
    display() {
        const words = [];
        this.displayHelper(this.root, "", words);
        return words;
    }
}
let trie=new Trie()
trie.insert("cat")
trie.insert("car")
console.log(trie.display()); // Output: [ 'car', 'cat', ]
trie.deleteKey("cat")
console.log(trie.searchKey("cat"));  // Output: true
console.log(trie.searchKey("car"));  // Output: false
