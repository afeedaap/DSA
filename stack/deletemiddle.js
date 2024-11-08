class Stack {
    constructor() {
        this.items = []; 
    }
    push(element) {
        this.items.push(element);
    }
    pop() {
        return this.items.pop();
    }
    peek() {
        return this.items[this.items.length - 1];
    }
    isEmpty() {
        return this.items.length === 0;
    }

    size() {
        return this.items.length;
    }
    display() {
        console.log(this.items.join(' -> '));
    }
    deleteMiddle() {
        const middleIndex = Math.floor(this.size() / 2); // Calculate the middle index
        const temp = []; // Temporary storage

        // Step 1: Pop elements until we reach the middle one
        for (let i = 0; i < middleIndex; i++) {
            temp.push(this.pop());
        }

        // Step 2: Pop the middle element (skip it)
        this.pop();

        // Step 3: Push the elements from the temporary array back onto the stack
        while (temp.length) {
            this.push(temp.pop());
        }
    }
}

// Example usage:
const stack = new Stack();
stack.push(1);
stack.push(2);
stack.push(3);
stack.push(4);
stack.push(5); // Stack: 1 -> 2 -> 3 -> 4 -> 5

console.log("Original Stack:");
stack.display();

stack.deleteMiddle(); // Deletes the middle element (3)

console.log("Stack after deleting the middle element:");
stack.display();
