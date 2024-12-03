class MinHeap {
    constructor(maxSize) {
        this.arr = new Array(maxSize); // Array to store heap elements
        this.maxSize = maxSize;       // Maximum size of the heap
        this.heapSize = 0;            // Current number of elements in the heap
    }

    // Get the index of the left child
    lChild(i) {
        return 2 * i + 1;
    }

    // Get the index of the right child
    rChild(i) {
        return 2 * i + 2;
    }

    // Get the index of the parent
    parent(i) {
        return Math.floor((i - 1) / 2);
    }

    // Maintain the Min Heap property
    minHeapify(i) {
        const l = this.lChild(i);
        const r = this.rChild(i);
        let smallest = i;

        // Compare parent with left child
        if (l < this.heapSize && this.arr[l] < this.arr[smallest]) {
            smallest = l;
        }

        // Compare current smallest with right child
        if (r < this.heapSize && this.arr[r] < this.arr[smallest]) {
            smallest = r;
        }

        // If smallest is not the parent, swap and recurse
        if (smallest !== i) {
            [this.arr[i], this.arr[smallest]] = [this.arr[smallest], this.arr[i]];
            this.minHeapify(smallest);
        }
    }

    // Insert a value into the Min Heap
    insert(value) {
        if (this.heapSize === this.maxSize) {
            console.log("Heap is full!");
            return;
        }

        // Place the value at the end of the heap
        this.arr[this.heapSize] = value;
        this.heapSize++;

        // "Bubble up" to maintain heap property
        let i = this.heapSize - 1;
        while (i > 0 && this.arr[this.parent(i)] > this.arr[i]) {
            [this.arr[i], this.arr[this.parent(i)]] = [this.arr[this.parent(i)], this.arr[i]];
            i = this.parent(i);
        }
    }

    // Remove and return the root element (minimum value)
    extractMin() {
        if (this.heapSize <= 0) {
            console.log("Heap is empty!");
            return null;
        }

        if (this.heapSize === 1) {
            this.heapSize--;
            return this.arr[0];
        }

        // Replace root with the last element
        const root = this.arr[0];
        this.arr[0] = this.arr[this.heapSize - 1];
        this.heapSize--;

        // Restore the Min Heap property
        this.minHeapify(0);

        return root;
    }

    // Print the heap
    printHeap() {
        console.log(this.arr.slice(0, this.heapSize));
    }
}
let minHeap = new MinHeap(10);
minHeap.insert(30);
minHeap.insert(20);
minHeap.insert(15);
minHeap.insert(10);
minHeap.insert(5)
console.log("Heap after insertions:");
minHeap.printHeap();