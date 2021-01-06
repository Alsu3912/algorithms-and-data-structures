class MinHeap<K, V> {
    public heapOrderedArray: Array<KeyValuePair<K, V>> = [];
    private size: number = 0;

    public getSize(): number {
        return this.size;
    }

    public add(element: KeyValuePair<K, V>) {
        this.heapOrderedArray[++this.size] = element;
        this.swim(this.size);
    };

    public delMin(): KeyValuePair<K, V> {
        if (this.size < 1) {
            throw new Error("The heap is empty, nothing to delete");
        };
        let min = this.heapOrderedArray[1];
        this.exchange(1, this.size--);
        this.heapOrderedArray.length = this.size+1;
        this.sink(1);
        return min;
    };

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
        while (2 * index <= this.size) {
            let children = 2 * index;
            if (children < this.size && this.isLarger(children, children + 1)) children++;
            if (!this.isLarger(index, children)) break;
            this.exchange(index, children);
            index = children;
        }
    };
}

interface KeyValuePair<K, V> {
    key: K;
    value: V;
}

export default MinHeap;