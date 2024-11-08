class HashTable {
    constructor() {
        this.table = {}; 
    }
    set(char) {
        if (this.table[char]) {
            this.table[char] += 1; 
        } else {
            this.table[char] = 1; 
        }
    }
     get(char) {
        return this.table[char] || 0; 
    }
    display() {
        console.log("Character Frequency (Ignoring Whitespaces):");
        for (let key in this.table) {
            console.log(`${key}: ${this.table[key]}`);
        }
    }
}

function charFrequency(str) {
    const hashTable = new HashTable();

    for (let char of str) {
        // if (char !== ' ' && char !== '\t' && char !== '\n') { 
            hashTable.set(char); 
        // }
    }

    hashTable.display(); 
}


const inputString = "helloworld!";
console.log(`Input: "${inputString}"`);
charFrequency(inputString);
