class MaxHeap {
    constructor(maxSize) {
        this.arr = new Array(maxSize);  
        this.maxSize = maxSize;       
        this.heapSize = 0;              
    }
    lChild(i) {
        return 2 * i + 1;
    }
    rChild(i) {
        return 2 * i + 2;
    }
     maxHeapify(i) {
        const l = this.lChild(i);
        const r = this.rChild(i);
        let largest = i;

        if (l < this.heapSize && this.arr[l] > this.arr[largest]) {
            largest = l;
        }

        if (r < this.heapSize && this.arr[r] > this.arr[largest]) {
            largest = r;
        }

        if (largest !== i) {
            
            [this.arr[i], this.arr[largest]] = [this.arr[largest], this.arr[i]];

            this.maxHeapify(largest);
        }
    }
    

  
    insert(value) {
        if (this.heapSize === this.maxSize) {
            console.log("Heap is full!");
            return;
        }
        // Insert the new value at the end of the heap
        this.arr[this.heapSize] = value;
        this.heapSize++;

        let i = this.heapSize - 1;
        while (i > 0 && this.arr[this.parent(i)] < this.arr[i]) {
            [this.arr[i], this.arr[this.parent(i)]] = [this.arr[this.parent(i)], this.arr[i]];
            i = this.parent(i);
        }
    }

    // Method to get the parent index of a node
    parent(i) {
        return Math.floor((i - 1) / 2);
    }

    
    printHeap() {
        console.log(this.arr.slice(0, this.heapSize));
    }
}



let heap = new MaxHeap(10);

heap.insert(10);
heap.insert(20);
heap.insert(5);
heap.insert(30);
heap.insert(15);
heap.insert(100);

console.log("Heap after insertions:");
heap.printHeap(); 











