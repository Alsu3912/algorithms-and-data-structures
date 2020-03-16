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
        while (current.data !== data) {
            if (current.next === null) {
                throw new Error("Can't find such data");
            }
            previous = current;
            current = current.next;
        }
        previous.next = current.next;
    }

    size() {
        return this.size;
    }
}
