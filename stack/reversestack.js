class Stack {
    constructor() {
        this.items = [];
    }

    push(element) {
        this.items.push(element);
    }

    pop() {
        if (!this.isEmpty()) {
            return this.items.pop();
        }
        return null;
    }

    peek() {
        if (!this.isEmpty()) {
            return this.items[this.items.length - 1];
        }
        return null;
    }

    isEmpty() {
        return this.items.length === 0;
    }

    display() {
        console.log(this.items.join(" -> "));
    }

    // Reverse the stack using recursion
    reverse() {
        if (!this.isEmpty()) {
            // Remove the top element
            let top = this.pop();
            // Reverse the rest of the stack recursively
            this.reverse();
            // Insert the removed element at the bottom
            this.insertAtBottom(top);
        }
    }

    // Helper function to insert element at the bottom of the stack
    insertAtBottom(element) {
        if (this.isEmpty()) {
            this.push(element);
        } else {
            // Remove the top element
            let top = this.pop();
            // Recursively insert the element at the bottom
            this.insertAtBottom(element);
            // Push the top element back
            this.push(top);
        }
    }
}

// Example usage
const stack = new Stack();
stack.push(1);
stack.push(2);
stack.push(3);
stack.push(4);

console.log("Original Stack:");
stack.display();

stack.reverse();

console.log("Reversed Stack:");
stack.display();
stack.push(45)
stack.display();
// stack.reverse()
// stack.display();
stack.pop()
stack.display()

