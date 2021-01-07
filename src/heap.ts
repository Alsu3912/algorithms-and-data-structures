class MinHeap<K, V> {
    private heapOrderedArray: {key: K, value: V}[] = [];

    public getSize(): number {
        const size = this.heapOrderedArray.length - 1;
        return size < 0 ? size + 1 : size;
    }

    public add(key: K, value: V): void {
        this.heapOrderedArray[this.getSize() + 1] = {key, value};
        this.swim(this.getSize());
    };

    public peek(): {key: K, value: V} {
        return this.heapOrderedArray[1];
    }

    public delMin(): {key: K, value: V} {
        if (this.getSize() < 1) {
            throw new Error("The heap is empty, nothing to delete");
        };
        let min = this.heapOrderedArray[1];
        this.exchange(1, this.getSize());
        this.heapOrderedArray.length = this.getSize();
        this.sink(1);
        return min;
    };

    [Symbol.iterator]() {
        const array = this.heapOrderedArray;
        let index = 1;
        return {
            next() {
                if (index <= array.length - 1) {
                    return {value: array[index++], done: false}
                } else {
                    return {done: true}
                }
            }
        }
    }

    private isLarger(indexLeft: number, indexRight: number): boolean {
        return this.heapOrderedArray[indexLeft].key > this.heapOrderedArray[indexRight].key;
    };

    private exchange(indexLeft: number, indexRight: number): void {
        let temporaryStorage = this.heapOrderedArray[indexLeft];
        this.heapOrderedArray[indexLeft] = this.heapOrderedArray[indexRight];
        this.heapOrderedArray[indexRight] = temporaryStorage;
    };

    private swim(index: number): void {
        while (index > 1 && this.isLarger(Math.trunc(index / 2), index)) {
            this.exchange(Math.trunc(index / 2), index);
            index = Math.trunc(index / 2);
        }
    };

    private sink(index: number): void {
        while (2 * index <= this.getSize()) {
            let children = 2 * index;
            if (children < this.getSize() && this.isLarger(children, children + 1)) children++;
            if (!this.isLarger(index, children)) break;
            this.exchange(index, children);
            index = children;
        }
    };
}

export default MinHeap;