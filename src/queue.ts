export class Queue<T> {
    private stack1: T[];
    private stack2: T[];
    constructor() {
        this.stack1 = new Array<T>();
        this.stack2 = new Array<T>();
    };

    push(element: T): void {
        this.stack1.push(element);
    };

    private transference(): void {
        while (this.stack1.length > 0) {
            let popped = this.stack1.pop();
            this.stack2.push(popped);
        }
    }

    removeFirst(): T {
        if (this.stack2.length === 0 && this.stack1.length === 0) {
            throw new Error("The queue is empty, nothing to remove. Check the queue size using method 'size'")
        }
        if (this.stack1.length > 0) {
            this.transference();
            return this.stack2.pop();
        };
        return this.stack2.pop();
    };

    size(): Number {
        return this.stack1.length + this.stack2.length;
    }

    [Symbol.iterator]() {
        let array1 = this.stack1;
        let array2 = this.stack2;
        let current1 = 0;
        let current2 = array2.length - 1;
        return {
            next() {
                if (current1 >= array1.length && current2 < 0) {
                    return {
                        done: true
                    };
                }
                if (current2 >= 0) {
                    return {
                        done: false,
                        value: array2[current2--]
                    };
                }
                return {
                    done: false,
                    value: array1[current1++]
                }
            }
        }
    };
};

const iterableQ = new Queue<Number>();
iterableQ.push(11);
iterableQ.push(22);
iterableQ.push(33);
iterableQ.removeFirst();
console.log(iterableQ)