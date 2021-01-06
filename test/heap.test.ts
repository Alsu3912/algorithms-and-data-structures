import MinHeap from '../src/heap';

describe('size', () => {

    test('should have size = 0 at the beginning', () => {
        let heap = new MinHeap();
        expect(heap.getSize()).toBe(0);
    });

    test('should increase the size of a heap after adding', () => {
        let heap = new MinHeap<number, string>();
        heap.add({ key: 3, value: "apple" });
        heap.add({ key: 8, value: "mango" });
        expect(heap.getSize()).toBe(2);
    });

    test('should decrease the size of a heap after deleting', () => {
        let heap = new MinHeap<number, string>();
        heap.add({ key: 3, value: "apple" });
        heap.add({ key: 8, value: "mango" });
        heap.add({ key: 8, value: "mango" });
        heap.delMin();
        expect(heap.getSize()).toBe(2);
    });
});

describe('add', () => {
    test('should add a new element to a heap', () => {
        let heap = new MinHeap<number, string>();
        heap.add({ key: 3, value: "apple" });
        expect(heap.heapOrderedArray).toEqual([undefined, { key: 3, value: "apple" }]);
    });

    test('should change order after adding a smaller element ', () => {
        let heap = new MinHeap<number, string>();
        heap.add({ key: 7, value: "apple" });
        heap.add({ key: 5, value: "mango" });
        heap.add({ key: 4, value: "coconut" });
        heap.add({ key: 6, value: "banana" });
        heap.add({ key: 3, value: "peach" });
        expect(heap.heapOrderedArray).toEqual([undefined, { key: 3, value: "peach" },
            { key: 4, value: "coconut" }, { key: 5, value: "mango" },
            { key: 7, value: "apple" }, { key: 6, value: "banana" }]);
    });

    test('should add an element after deletion', () => {
        let heap = new MinHeap<number, string>();
        heap.add({ key: 7, value: "apple" });
        heap.delMin()
        heap.add({ key: 6, value: "banana" });
        heap.add({ key: 3, value: "peach" });
        expect(heap.heapOrderedArray).toEqual([undefined, { key: 3, value: "peach" }, { key: 6, value: "banana" }]);
    });
});

describe('delete min', () => {
    test('should not delete and throw an error when a heap is empty', () => {
        let heap = new MinHeap<number, string>();
        expect(() => heap.delMin()).toThrowError(new Error("The heap is empty, nothing to delete"));
        expect(heap.heapOrderedArray).toEqual([]);
    });

    test('should not delete and throw an error when a heap is empty (has undefined at zero index in an array)', () => {
        let heap = new MinHeap<number, string>();
        heap.add({ key: 8, value: "mango" });
        heap.delMin();
        expect(() => heap.delMin()).toThrowError(new Error("The heap is empty, nothing to delete"));
        expect(heap.heapOrderedArray).toEqual([undefined]);
    });

    test('should return min element as result of deletion', () => {
        let heap = new MinHeap<number, string>();
        heap.add({ key: 7, value: "apple" });
        heap.add({ key: 5, value: "mango" });
        heap.add({ key: 4, value: "coconut" });
        heap.add({ key: 6, value: "banana" });
        heap.add({ key: 3, value: "peach" });
        expect(heap.delMin()).toEqual({ key: 3, value: "peach" });
    });
});