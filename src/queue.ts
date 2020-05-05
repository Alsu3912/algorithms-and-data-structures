export class Queue<T> {
    stack1: T[];
    stack2: T[];
    constructor() {
        this.stack1 = new Array<T>();
        this.stack2 = new Array<T>();
    };

    push(element: T): void {
        this.stack1.push(element);
    };

    transference(): void {
        for (let i = 0; i = this.stack1.length; i++) {
            let popped = this.stack1.pop();
            this.stack2.push(popped);
        }
    }

    remove(): T {
        if (this.stack2.length === 0) {
            if (this.stack1.length === 0) {
                throw new Error("The queue is empty, nothing to remove")
            } else {
                this.transference();
                return this.stack2.pop();
            };
        } else {
            return this.stack2.pop();
        };
    };

    [Symbol.iterator]() {
        let array1 = this.stack1;
        let array2 = this.stack2;
        let current1 = 0;
        let current2 = array2.length;
        return {
            next() {
                if (current2 === 0) {
                    if (current1 <= array1.length - 1) {
                        return {
                            done: false,
                            value: array1[current1++]
                        };
                    } else {
                        return {
                            done: true
                        };
                    }
                } else {
                    if (current2 > 0) {
                        return {
                            done: false,
                            value: array2[--current2]
                        }
                    } else if (array1.length > 0) {
                        return {
                            done: false,
                            value: array1[current1++]
                        };
                    } else {
                        return {
                            done: true
                        };
                    }
                }
            }
        }
    };
};
