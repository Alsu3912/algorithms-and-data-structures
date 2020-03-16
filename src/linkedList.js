class LinkedListNode {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
        this.size = 0;
    }

    add(data) {
        let newNode = new LinkedListNode(data);

        if (this.head === null) {
            this.head = newNode;
            this.size++;
        } else {
            let current = this.head;
            while (current.next !== null) {
                current = current.next;
            }
            current.next = newNode;
            this.size++;
        }
    }

    remove(data) {
        let current = this.head;
        let previous = null;
        if (current.data === data) {
            this.head = current.next;
            // previous = current;
            // current.data = null;
            this.size--;
        } else {
            while (current.data !== data) {
                if (current.next === null) {
                    throw new Error("Can't find such data");
                }
                previous = current;
                current = current.next;
            }
            previous.next = current.next;
        } 
    }

    get(index) {
        if (index < 0) {
            throw new Error("Incorrect index. Index should be greater or equal to zero");
        }
        if (index > this.size) {
            throw new Error("There is no such index in the list. Check the list size using method 'size()'")
        }
        let current = this.head;
        let i = 0;
        while (i<index) {
            current = current.next;
            i++
        }
        return current.data;
    }

    size() {
        return this.size;
    }
}