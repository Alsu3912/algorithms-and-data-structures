import MinHeap from './heap';

const topKFrequent = (nums: number[], k: number): number[] => {
    let map = new Map<number, number>();
    let result: number[] = [];
    let heap = new MinHeap<number, number>();
    if (k <= 0) {
        throw new Error("k should be more than 0");
    }
    nums.forEach((item) => {
        if (map.has(item)) {
            let frequency = map.get(item);
            map.set(item, frequency + 1);
        } else map.set(item, 1);
    });
    for (let [key, value] of map) {
        if (heap.getSize() < k) {
            heap.add({ key: value, value: key });
        } else if (value > heap.heapOrderedArray[1].key) {
            heap.delMin();
            heap.add({ key: value, value: key });
        };
    };
    heap.heapOrderedArray.forEach((item) => {
        result.push(item.value);
    });
    return result;
}

export default topKFrequent;