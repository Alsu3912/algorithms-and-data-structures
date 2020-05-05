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
        iterableQ.stack1.push(i);
    };
    expect(toArray(iterableQ)).toStrictEqual([1, 2, 3]);
});

test('should iterate stack2 while stack1 is empty', () => {
    const iterableQ = new Queue<Number>();
    for (let i = 3; i >= 1; i--) {
        iterableQ.stack2.push(i);
    };
    expect(toArray(iterableQ)).toStrictEqual([1, 2, 3]);
});

test('should iterate nonempty stack2 and stack1', () => {
    const iterableQ = new Queue<Number>();
    for (let i = 3; i >= 1; i--) {
        iterableQ.stack2.push(i);
    };
    for (let i = 4; i <= 6; i++) {
        iterableQ.stack1.push(i);
    };
    expect(toArray(iterableQ)).toStrictEqual([1, 2, 3, 4, 5, 6]);
});

test('should return error if try remove from empty queue', () => {
    const error = new Error("The queue is empty, nothing to remove")
    expect(() => testQueue.remove()).toThrow(error);
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

test('should transfer stack1 to stack2 in reverse way', () => {
    const testQueue2 = new Queue<Number>();
    testQueue2.push(1);
    testQueue2.push(2);
    testQueue2.push(3);
    testQueue2.transference();
    expect(testQueue2.stack1).toStrictEqual([]);
    expect(testQueue2.stack2).toStrictEqual([3, 2, 1]);
});

test('should remove the first added element', () => {
    let removed = testQueue.remove();
    expect(toArray(testQueue)).toStrictEqual([2, 3]);
    expect(removed).toStrictEqual(1);
});

test('should add to stack1 after removing an element', () => {
    testQueue.push(4);
    expect(toArray(testQueue)).toStrictEqual([2, 3, 4]);
    expect(testQueue.stack1).toStrictEqual([4]);
    expect(testQueue.stack2).toStrictEqual([3, 2]);
});
