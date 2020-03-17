const LinkedList = require('../src/linkedList');

test('Adding the head node', () => {
    const list = new LinkedList();
    list.add('This is a head');
    const expectedObject = {
        head: {
            data: 'This is a head',
            next: null
        },
        size: 1,
    };
    expect(list).toMatchObject(expectedObject);
});

test('Adding the head node to the end of a list(node is not a head)', () => {
    const list = new LinkedList();
    list.add('This is a head');
    list.add('Second node');
    list.add(3);
    const expectedObject = {
        head: {
            data: 'This is a head',
            next: {
                data: 'Second node',
                next: {
                    data: 3,
                    next: null
                }
            }
        },
        size: 3,
    };
    expect(list).toMatchObject(expectedObject);
});

test('Adding null as a node data', () => {
    const list = new LinkedList();
    list.add(null);
    const expectedObject = {
        head: {
            data: null,
            next: null
        },
        size: 1,
    };
    expect(list).toMatchObject(expectedObject);
});

test('Adding undefined as a node data', () => {
    const list = new LinkedList();
    list.add(undefined);
    const expectedObject = {
        head: {
            data: undefined,
            next: null
        },
        size: 1,
    };
    expect(list).toMatchObject(expectedObject);
});

test('Getting by an index equal to a string', () => {
    const list = new LinkedList();
    for (let i = 1; i <= 14; i++) {
        list.add(i);
    }
    const error = new Error("Incorrect index. Index must be an integer number");
    expect(() => list.get("foo")).toThrow(error);
});

test('Getting by an index equal to null', () => {
    const list = new LinkedList();
    for (let i = 1; i <= 14; i++) {
        list.add(i);
    }
    const error = new Error("Incorrect index. Index must be an integer number");
    expect(() => list.get(null)).toThrow(error);
});

test('Getting a data by an index equal to undefined', () => {
    const list = new LinkedList();
    for (let i = 1; i <= 14; i++) {
        list.add(i);
    }
    const error = new Error("Incorrect index. Index must be an integer number");
    expect(() => list.get(undefined)).toThrow(error);
});

test('Getting a data by an index equal to a fractional number', () => {
    const list = new LinkedList();
    for (let i = 1; i <= 14; i++) {
        list.add(i);
    }
    const error = new Error("Incorrect index. Index must be an integer number");
    expect(() => list.get(1.5)).toThrow(error);
});

test('Getting a data by an index equal to a negative number', () => {
    const list = new LinkedList();
    for (let i = 1; i <= 14; i++) {
        list.add(i);
    }
    const error = new Error("Incorrect index. Index must be greater or equal to zero");
    expect(() => list.get(-4)).toThrow(error);
});

test('Getting a data by an index that greater than size of the list', () => {
    const list = new LinkedList();
    for (let i = 1; i <= 14; i++) {
        list.add(i);
    }
    const error = new Error("There is no such index in the list. Check the list size using method 'size'");
    expect(() => list.get(16)).toThrow(error);
});

test('Getting a data by an index that equal to size of the list', () => {
    const list = new LinkedList();
    for (let i = 1; i <= 14; i++) {
        list.add(i);
    }
    const error = new Error("There is no such index in the list. Check the list size using method 'size'");
    expect(() => list.get(14)).toThrow(error);
});

test('Getting a data by correct index', () => {
    const list = new LinkedList();
    for (let i = 1; i <= 14; i++) {
        list.add(i);
    }
    expect(list.get(13)).toBe(14);
});

test('Removing a data located in the head node', () => {
    const list = new LinkedList();
    for (let i = 1; i <= 5; i++) {
        list.add(i);
    }
    list.remove(1);
    const expectedObject = {
        head: {
            data: 2,
            next: {
                data: 3,
                next: {
                    data: 4,
                    next: {
                        data: 5,
                        next: null
                    }
                }
            }
        },
        size: 4
    };
    expect(list).toMatchObject(expectedObject);
});

test('Removing a data located in a node being the only one on the list (size == 1)', () => {
    const list = new LinkedList();
    list.add(1);
    list.remove(1);
    const expectedObject = {
        head: null,
        size: 0
    };
    expect(list).toMatchObject(expectedObject);
});

test('Removing a data located in the second node', () => {
    const list = new LinkedList();
    for (let i = 1; i <= 5; i++) {
        list.add(i);
    }
    list.remove(2);
    const expectedObject = {
        head: {
            data: 1,
            next: {
                data: 3,
                next: {
                    data: 4,
                    next: {
                        data: 5,
                        next: null
                    }
                }
            },
        },
        size: 4
    };
    expect(list).toMatchObject(expectedObject);
});

test('Removing a data located in the middle of a list', () => {
    const list = new LinkedList();
    for (let i = 1; i <= 5; i++) {
        list.add(i);
    }
    list.remove(3);
    const expectedObject = {
        head: {
            data: 1,
            next: {
                data: 2,
                next: {
                    data: 4,
                    next: {
                        data: 5,
                        next: null
                    }
                }
            },
        },
        size: 4
    };
    expect(list).toMatchObject(expectedObject);
});

test('Removing a data located at the end of a list', () => {
    const list = new LinkedList();
    for (let i = 1; i <= 5; i++) {
        list.add(i);
    }
    list.remove(5);
    const expectedObject = {
        head: {
            data: 1,
            next: {
                data: 2,
                next: {
                    data: 3,
                    next: {
                        data: 4,
                        next: null
                    }
                }
            },
        },
        size: 4
    };
    expect(list).toMatchObject(expectedObject);
});

test('Cannot find a received data in a list', () => {
    const list = new LinkedList();
    for (let i = 1; i <= 5; i++) {
        list.add(i);
    }
    const error = new Error("Can't find such a data")
    expect(() => list.remove(15)).toThrow(error);
});

test('Removing a data occurring several times in a list', () => {
    const list = new LinkedList();
    for (let i = 1; i <= 5; i++) {
        list.add(i);
    }
    list.add(3);
    list.remove(3);
    const expectedObject = {
        head: {
            data: 1,
            next: {
                data: 2,
                next: {
                    data: 4,
                    next: {
                        data: 5,
                        next: {
                            data: 3,
                            next: null
                        } 
                    }
                }
            },
        },
        size: 5
    };
    expect(list).toMatchObject(expectedObject);
});

test('Size method testing', () => {
    const list = new LinkedList();
    for (let i = 1; i <= 14; i++) {
        list.add(i);
    }
    expect(list.size).toBe(14);
});
