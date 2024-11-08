class MinStack {
    constructor() {
        this.stack = [];       
        this.minStack = [];  
    }

    // Pushes an element onto the stack and updates the minimum stack
    push(value) {
        this.stack.push(value);
        
        // If minStack is empty or the current value is less than or equal to the top of minStack,
        // push the value onto the minStack
        if (this.minStack.length === 0 || value <= this.getMin()) {
            this.minStack.push(value);
        }
    }

    // Removes the top element from the stack and updates the minimum stack if necessary
    pop() {
        // Pop from the main stack
        const poppedValue = this.stack.pop();
        
        // If the popped element is the current minimum, pop it from minStack as well
        if (poppedValue === this.getMin()) {
            this.minStack.pop();
        }
        
        return poppedValue;
    }

    // Returns the top element of the stack without removing it
    top() {
        return this.stack[this.stack.length - 1];
    }

    // Retrieves the minimum element in the stack in constant time
    getMin() {
        return this.minStack[this.minStack.length - 1];
    }
}
const minStack = new MinStack();
minStack.push(5);
minStack.push(3);
minStack.push(7);
console.log(minStack.getMin()); // Outputs 3
minStack.pop();
console.log(minStack.getMin()); // Outputs 3
minStack.pop();
console.log(minStack.getMin()); // Outputs 5