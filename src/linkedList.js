class LinkedListNode {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.size = 0;
    }

    add(data) {
        let newNode = new LinkedListNode(data);

        if (this.head === null) {
            this.head = newNode;
            this.tail = this.head;
            this.size++;
        } else {
            this.tail.next = newNode;
            this.tail = this.tail.next;
            this.size++;
        }
    }

    remove(data) {
        let current = this.head;
        let previous = null;
        if (current.data === data) {
            this.head = current.next;
            this.size--;
        } else {
            while (current.data !== data) {
                if (current.next === null) {
                    return false;
                }
                previous = current;
                current = current.next;
            }
            previous.next = current.next;
            if (current === this.tail) {
                this.tail = previous;
            }
            this.size--;
        }
        return true;
    }

    get(index) {
        if (!Number.isInteger(index)) {
            throw new Error("Incorrect index. Index must be an integer number");
        }
        if (index < 0) {
            throw new Error("Incorrect index. Index must be greater or equal to zero");
        }
        if (index >= this.size) {
            throw new Error("There is no such index in the list. Check the list size using method 'size'")
        }
        let current = this.head;
        let i = 0;
        while (i < index) {
            current = current.next;
            i++
        }
        return current.data;
    }

    getSize() {
        return this.size;
    }

    toArray() {
        let linkedListArray = [];
        let current = this.head;
        while (current !== null) {
            linkedListArray.push(current.data);
            current = current.next;
        }
        return linkedListArray;
    }
}

module.exports = LinkedList;