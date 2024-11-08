class MaxHeap{
    constructor(maxSize){
        this.arr=new Array(maxSize)
        this.maxSize=maxSize
        this.heapSize=0
    }
    maxHeapify(i){
        const l=this.lCHild(i)
        const r=this.rChild(i)
        let largest=i
        if(l<this.heapSize&&this.arr[l]>this.arr[i]){
            largest=l
        }
        if(r<this.heapSize&&this.arr[r]>this.arr[largest]){
            largest=r
        }
        if(largest!==i){
            const temp=this.arr[i]
            this.arr[i]=this.arr[largest]
            this.arr[largest]=temp
            this.maxHeapify(largest)

        }
    }
}