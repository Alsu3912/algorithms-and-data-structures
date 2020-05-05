import { Queue } from '../src/queue';


const toArray = (queue: Queue<Number>): Number[] => {
    let outputArray: Number[] = [];
    for (let element of queue) {
        outputArray.push(element);
    };
    return outputArray;
}

const testQueue = new Queue<Number>();

test('should iterate stack1 while stack2 is empty', () => {
    const iterableQ = new Queue<Number>();
    for (let i = 1; i <= 3; i++) {
        iterableQ.push(i);
    };
    expect(toArray(iterableQ)).toStrictEqual([1, 2, 3]);
});

test('should iterate stack2 while stack1 is empty', () => {
    const iterableQ = new Queue<Number>();
    for (let i = 1; i <= 3; i++) {
        iterableQ.push(i);
    };
    iterableQ.removeFirst();
    expect(toArray(iterableQ)).toStrictEqual([2, 3]);
});

test('should iterate nonempty stack2 and stack1', () => {
    const iterableQ = new Queue<Number>();
    for (let i = 1; i <= 3; i++) {
        iterableQ.push(i);
    };
    iterableQ.removeFirst();
    for (let i = 4; i <= 6; i++) {
        iterableQ.push(i);
    };
    expect(toArray(iterableQ)).toStrictEqual([2, 3, 4, 5, 6]);
});

test('should return error if try remove from empty queue', () => {
    const error = new Error("The queue is empty, nothing to remove. Check the queue size using method 'size'")
    expect(() => testQueue.removeFirst()).toThrow(error);
});

test('should add new element', () => {
    testQueue.push(1);
    expect(toArray(testQueue)).toStrictEqual([1]);
});

test('should add few elements', () => {
    testQueue.push(2);
    testQueue.push(3);
    expect(toArray(testQueue)).toStrictEqual([1, 2, 3]);
});

test('should remove the first added element', () => {
    let removed = testQueue.removeFirst();
    expect(toArray(testQueue)).toStrictEqual([2, 3]);
    expect(removed).toStrictEqual(1);
});

test('should remove repeatedly ', () => {
    let removed = testQueue.removeFirst();
    expect(toArray(testQueue)).toStrictEqual([3]);
    expect(removed).toStrictEqual(2);
});

test('should add to queue after removing an element', () => {
    testQueue.push(4);
    expect(toArray(testQueue)).toStrictEqual([3, 4]);
});

test('should return size', () => {
    testQueue.push(5);
    expect(testQueue.size()).toBe(3);
});

test('should return 0 when queue is empty', () => {
    expect(new Queue<Number>().size()).toBe(0);
});