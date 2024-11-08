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
    display() {
        console.log(this.items.join(' -> '));
    }
     sort() {
        if (!this.isEmpty()) {
            // Step 1: Pop the top element
            let top = this.pop();
            // Step 2: Recursively sort the remaining stack
            this.sort();
            // Step 3: Insert the popped element in sorted order
            this.insertInSortedOrder(top);
        }
    }

    // Helper function to insert an element into the sorted stack
    insertInSortedOrder(element) {
        if (this.isEmpty() || element > this.peek()) {
            // If stack is empty or element is greater than the top element, push it
            this.push(element);
        } else {
            // Otherwise, pop the top element and recurse
            let top = this.pop();
            this.insertInSortedOrder(element);
            // Push the top element back after inserting the new element
            this.push(top);
        }
    }
}


const stack = new Stack();
stack.push(3);
stack.push(1);
stack.push(4);
stack.push(2);

console.log("Original Stack:");
stack.display();

stack.sort();  // Sort the stack

console.log("Sorted Stack:");
stack.display();
