import MinHeap from '../src/heap';

describe('size', () => {
    test('should have size = 0 at the beginning', () => {
        let heap = new MinHeap();
        expect(heap.getSize()).toBe(0);
    });

    test('should increase the size of a heap after adding', () => {
        let heap = new MinHeap<number, string>();
        heap.add(3, "apple");
        heap.add(8, "mango");
        expect(heap.getSize()).toBe(2);
    });

    test('should decrease the size of a heap after deleting', () => {
        let heap = new MinHeap<number, string>();
        heap.add(3, "apple");
        heap.add(8, "mango");
        heap.add(8, "mango");
        heap.delMin();
        expect(heap.getSize()).toBe(2);
    });
});

describe('add', () => {
    test('should add a new element to a heap', () => {
        let heap = new MinHeap<number, string>();
        heap.add(3, "apple");
        expect(heap).toEqual({ heapOrderedArray: [undefined, { key: 3, value: "apple" }] });
    });

    test('should change order after adding a smaller element ', () => {
        let heap = new MinHeap<number, string>();
        heap.add(7, "apple");
        heap.add(5, "mango");
        heap.add(4, "coconut");
        heap.add(6, "banana");
        heap.add(3, "peach");
        expect(heap).toEqual({
            heapOrderedArray: [undefined, { key: 3, value: "peach" },
                { key: 4, value: "coconut" }, { key: 5, value: "mango" },
                { key: 7, value: "apple" }, { key: 6, value: "banana" }]
        });
    });

    test('should add an element after deletion', () => {
        let heap = new MinHeap<number, string>();
        heap.add(7, "apple");
        heap.delMin()
        heap.add(6, "banana");
        heap.add(3, "peach");
        expect(heap).toEqual({
            heapOrderedArray: [undefined,
                { key: 3, value: "peach" },
                { key: 6, value: "banana" }]
        });
    });
});

describe('delete min', () => {
    test('should not delete and throw an error when a heap is empty', () => {
        let heap = new MinHeap<number, string>();
        expect(() => heap.delMin()).toThrowError(new Error("The heap is empty, nothing to delete"));
        expect(heap).toEqual({ heapOrderedArray: [] });
    });

    test('should not delete and throw an error when a heap is empty (has undefined at zero index in an array)', () => {
        let heap = new MinHeap<number, string>();
        heap.add(8, "mango");
        heap.delMin();
        expect(() => heap.delMin()).toThrowError(new Error("The heap is empty, nothing to delete"));
        expect(heap).toEqual({ heapOrderedArray: [undefined] });
    });

    test('should return min element as result of deletion', () => {
        let heap = new MinHeap<number, string>();
        heap.add(7, "apple");
        heap.add(5, "mango");
        heap.add(4, "coconut");
        heap.add(6, "banana");
        heap.add(3, "peach");
        expect(heap.delMin()).toEqual({ key: 3, value: "peach" });
    });
});

describe('iterator', () => {
    test('should not iterate an empty heap', () => {
        let heap = new MinHeap<number, string>();
        let heapContent: { key: number, value: string }[] = [];
        for (let element of heap) {
            heapContent.push(element);
        }
        expect(heapContent).toEqual([]);
    });

    test('should iterate starting from the second element (i = 1) of heapOrderedArray', () => {
        let heap = new MinHeap<number, string>();
        heap.add(7, "apple");
        let heapContent: { key: number, value: string }[] = [];
        for (let element of heap) {
            heapContent.push(element);
        };
        expect(heapContent).toEqual([{ key: 7, value: "apple" }]);
    });

    test('should iterate starting from the second element (i = 1) till the of heapOrderedArray', () => {
        let heap = new MinHeap<number, string>();
        heap.add(7, "apple");
        heap.add(5, "mango");
        heap.add(4, "coconut");
        heap.add(6, "banana");
        heap.add(3, "peach");
        let heapContent: { key: number, value: string }[] = [];
        for (let element of heap) {
            heapContent.push(element);
        };
        expect(heapContent).toEqual([
            { key: 3, value: "peach" }, { key: 4, value: "coconut" },
            { key: 5, value: "mango" }, { key: 7, value: "apple" },
            { key: 6, value: "banana" }
        ]);
    });
})