// function reverseString(str){
//     stack=[]
//     for(char of str){
//         stack.push(char)
//     }
//    reverse=''
//    while(stack.length>0){
//     reverse+=stack.pop()
//    }
//    return reverse

// }

// let str="hello"
// console.log(reverseString(str))
class Stack {
    constructor() {
        this.items = []; // Internal stack storage
    }

    // Push an element onto the stack
    push(element) {
        this.items.push(element);
    }

    // Pop the top element from the stack
    pop() {
        return this.items.pop();
    }

    // Check if the stack is empty
    isEmpty() {
        return this.items.length === 0;
    }

    // Reverse a string using this stack
    reverseString(str) {
        // Step 1: Push all characters of the string onto the stack
        for (let char of str) {
            this.push(char);
        }

        let reversedStr = "";

        // Step 2: Pop characters from the stack and build the reversed string
        while (!this.isEmpty()) {
            reversedStr += this.pop();
        }

        return reversedStr;
    }
    display(){
        console.log(this.items.toString())
    }
}

// Example usage:
const stack = new Stack();
// const inputString = "hello";
// stack.push("heloo")

// stack.display()
const reversed=stack.reverseString("heloo")
console.log("reversed string ",`${reversed}`)
