const LinkedList = require('../src/linkedList');


const createTestLinkedList = size => {
    const list = new LinkedList();
    for (let i=1; i<=size; i++) {
        list.add(i);
    }
    return list;
}


test('Converting to an array', () => {
    expect(createTestLinkedList(5).toArray()).toStrictEqual([1, 2, 3, 4, 5]);
});

test('Converting an empty list to an array', () => {
    expect(createTestLinkedList(0).toArray()).toStrictEqual([]);
});

test('Adding the head node', () => {
    const list = new LinkedList();
    list.add('This is a head');
    const expectedObject = ['This is a head'];
    expect(list.toArray()).toMatchObject(expectedObject);
});

test('Adding the head node to the end of a list(node is not a head)', () => {
    const list = new LinkedList();
    list.add('This is a head');
    list.add('Second node');
    list.add(3);
    const expectedObject = ['This is a head','Second node', 3];
    expect(list.toArray()).toMatchObject(expectedObject);
});

test('Adding null as a node data', () => {
    const list = new LinkedList();
    list.add(null);
    expect(list.toArray()).toStrictEqual([null]);
});

test('Adding undefined as a node data', () => {
    const list = new LinkedList();
    list.add(undefined);
    expect(list.toArray()).toStrictEqual([undefined]);
});

test('Getting by an index equal to a string', () => {
    const error = new Error("Incorrect index. Index must be an integer number");
    expect(() => createTestLinkedList(14).get("foo")).toThrow(error);
});

test('Getting by an index equal to null', () => {
    const error = new Error("Incorrect index. Index must be an integer number");
    expect(() => createTestLinkedList(14).get(null)).toThrow(error);
});

test('Getting a data by an index equal to undefined', () => {
    const error = new Error("Incorrect index. Index must be an integer number");
    expect(() => createTestLinkedList(14).get(undefined)).toThrow(error);
});

test('Getting a data by an index equal to a fractional number', () => {
    const error = new Error("Incorrect index. Index must be an integer number");
    expect(() => createTestLinkedList(14).get(1.5)).toThrow(error);
});

test('Getting a data by an index equal to a negative number', () => {
    const error = new Error("Incorrect index. Index must be greater or equal to zero");
    expect(() => createTestLinkedList(14).get(-4)).toThrow(error);
});

test('Getting a data by an index that greater than size of the list', () => {
    const error = new Error("There is no such index in the list. Check the list size using method 'size'");
    expect(() => createTestLinkedList(14).get(16)).toThrow(error);
});

test('Getting a data by an index that equal to size of the list', () => {
    const error = new Error("There is no such index in the list. Check the list size using method 'size'");
    expect(() => createTestLinkedList(14).get(14)).toThrow(error);
});

test('Getting a data by correct index', () => {
    expect(createTestLinkedList(14).get(13)).toBe(14);
});

test('Removing a data located in the head node', () => {
    const list = createTestLinkedList(5);
    list.remove(1);
    expect(list.toArray()).toStrictEqual([2, 3, 4, 5]);
});

test('Removing a data located in a node being the only one on the list (size == 1)', () => {
    const list = new LinkedList();
    list.add(1);
    list.remove(1);
    expect(list.toArray()).toStrictEqual([]);
});

test('Removing a data located in the second node', () => {
    const list = createTestLinkedList(5);
    list.remove(2);
    expect(list.toArray()).toStrictEqual([1, 3, 4, 5]);
});

test('Removing a data located in the middle of a list', () => {
    const list = createTestLinkedList(5);
    list.remove(3);
    expect(list.toArray()).toStrictEqual([1, 2, 4, 5]);
});

test('Removing a data located at the end of a list', () => {
    const list = createTestLinkedList(5);
    list.remove(5);
    expect(list.toArray()).toStrictEqual([1, 2, 3, 4]);
});

test('Cannot find a received data in a list', () => {
    expect(createTestLinkedList(5).remove(15)).toBe(false);
});

test('Return true after a successful removal', () => {
    expect(createTestLinkedList(5).remove(4)).toBe(true);
});

test('Removing a data occurring several times in a list', () => {
    const list = createTestLinkedList(5);
    list.add(3);
    list.remove(3);
    expect(list.toArray()).toStrictEqual([1, 2, 4, 5, 3]);
});

test('Size method testing', () => {
    expect(createTestLinkedList(14).getSize()).toBe(14);
});

test('Removing the tail node', () => {
    const list = createTestLinkedList(5);
    list.remove(5);
    expect(list.toArray()).toStrictEqual([1, 2, 3, 4]);
});

test('Adding a node after removing the tail node', () => {
    const list = createTestLinkedList(5);
    list.remove(5);
    list.add(6);
    expect(list.toArray()).toStrictEqual([1, 2, 3, 4, 6]);
});