import { Queue } from './queue';

class MapBST<K, V> {
    public root: NodeBST<K, V> = null;
    readonly compareFunction: CompareFunction<K>;

    constructor(compareFunction: CompareFunction<K>) {
        this.compareFunction = compareFunction;
    };

    private compare(aComparable: K, bComparable: K): number {
        return this.compareFunction(aComparable, bComparable);
    };

    public add(key: K, value: V): V {
        if (this.root === null) {
            this.root = new NodeBST(key, value, null, null);
            return null;
        } else {
            return this.put(this.root, key, value)[1];
        }
    };

    private put(node: NodeBST<K, V>, key: K, value: V): [NodeBST<K, V>, V] {
        var previousValue = null;
        if (node === null) {
            return [new NodeBST(key, value, null, null), null];
        } else if (this.compare(key, node.key) > 0) {
            let goToSubtree = this.put(node.rightNode, key, value);
            node.rightNode = goToSubtree[0];
            previousValue = goToSubtree[1];
        } else if (this.compare(key, node.key) < 0) {
            let goToSubtree = this.put(node.leftNode, key, value);
            node.leftNode = goToSubtree[0];
            previousValue = goToSubtree[1];
        } else {
            previousValue = node.value;
            node.value = value;
            return [node, previousValue];
        }
        return [node, previousValue];
    };

    public hasKey(key: K): boolean {
        let searchResult = this.search(this.root, key);
        return searchResult != null;
    };

    private search(node: NodeBST<K, V>, key: K): NodeBST<K, V> {
        if (node === null) {
            return null;
        } else if (this.compare(key, node.key) > 0) {
            return this.search(node.rightNode, key);
        } else if (this.compare(key, node.key) < 0) {
            return this.search(node.leftNode, key);
        } else {
            return node;
        };
    };

    public remove(key: K): V {
        const result = this.delete(this.root, key);
        if (result[1] === null) {
            return null;
        } else return result[1].value;
    };

    private delete(node: NodeBST<K, V>, key: K): [NodeBST<K, V>, NodeBST<K, V>] {
        var removedNode: NodeBST<K, V> = null;
        if (node === null) return [null, removedNode];
        if (this.compare(key, node.key) > 0) {
            let goToSubtree = this.delete(node.rightNode, key)
            node.rightNode = goToSubtree[0];
            removedNode = goToSubtree[1];
        } else if (this.compare(key, node.key) < 0) {
            let goToSubtree = this.delete(node.leftNode, key);
            node.leftNode = goToSubtree[0];
            removedNode = goToSubtree[1];
        } else {
            removedNode = node;
            if (node.rightNode === null) {
                if (this.compare(key, this.root.key) === 0) {
                    this.root = node.leftNode;
                } else return [node.leftNode, removedNode];
            } else if (node.leftNode === null) {
                if (this.compare(key, this.root.key) === 0) {
                    this.root = node.rightNode
                } else return [node.rightNode, removedNode];
            } else {
                node = this.findMin(removedNode.rightNode);
                node.rightNode = this.deleteMin(removedNode.rightNode);
                node.leftNode = removedNode.leftNode;
                if (key === this.root.key) {
                    this.root = node;
                };
            };
        };
        return [node, removedNode];
    };

    private deleteMin(node: NodeBST<K, V>): NodeBST<K, V> {
        if (node.leftNode === null) return node.rightNode;
        node.leftNode = this.deleteMin(node.leftNode);
        return node;
    };

    private findMin(node: NodeBST<K, V>): NodeBST<K, V> {
        if (node.leftNode === null) {
            return node;
        };
        return this.findMin(node.leftNode);
    };

    private findMax(node: NodeBST<K, V>): NodeBST<K, V> {
        if (node.rightNode === null) {
            return node;
        };
        return this.findMax(node.rightNode);
    };

    [Symbol.iterator]() {
        let minNode = this.findMin(this.root);
        let maxNode = this.findMax(this.root);
        let queue = this.iterable(minNode, maxNode);
        return {
            next() {
                if (queue.size() > 0) {
                    return {
                        done: false,
                        value: queue.removeFirst()
                    };
                } else return {
                    done: true
                };
            }
        }
    };

    private iterable(keyMin: NodeBST<K, V>, keyMax: NodeBST<K, V>) {
        let queue = new Queue<NodeBST<K, V>>();
        this.keys(this.root, queue, keyMin, keyMax);
        return queue;
    };

    private keys(node: NodeBST<K, V>, queue: Queue<NodeBST<K, V>>, keyMin: NodeBST<K, V>, keyMax: NodeBST<K, V>) {
        if (node === null) return;
        if (this.compare(keyMin.key, node.key) < 0) {
            this.keys(node.leftNode, queue, keyMin, keyMax);
        };
        if (this.compare(keyMin.key, node.key) <= 0 && this.compare(keyMax.key, node.key) >= 0) {
            queue.push(node);
        };
        if (this.compare(keyMax.key, node.key) > 0) {
            this.keys(node.rightNode, queue, keyMin, keyMax);
        };
    };
};

interface CompareFunction<C> {
    (AComparable: C, BComparable: C): number;
};

export class NodeBST<K, V> {
    public key: K;
    public value: V;
    public leftNode: NodeBST<K, V>;
    public rightNode: NodeBST<K, V>;

    public constructor(key: K, value: V, leftNode: NodeBST<K, V>, rightNode: NodeBST<K, V>) {
        this.key = key;
        this.value = value;
        this.leftNode = leftNode;
        this.rightNode = rightNode;
    };
};

export default MapBST;