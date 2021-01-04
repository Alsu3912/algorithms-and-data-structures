import MapBST from '../src/bst';
import { NodeBST } from '../src/bst';

const compare = (aComparable: number, bComparable: number): number => {
    return aComparable - bComparable;
};

describe('add method', () => {
    test('should add key-value pair as a root', () => {
        const bst1 = new MapBST<number, number>(compare);
        bst1.add(3, 5);
        expect(bst1.root).toStrictEqual(new NodeBST<number, number>(3, 5, null, null));
    });
    test('should rewrite value of the root with the same key', () => {
        const bst2 = new MapBST<number, number>(compare);
        bst2.add(3, 5);
        bst2.add(3, 9);
        expect(bst2.root).toStrictEqual(new NodeBST<number, number>(3, 9, null, null));
    });
    test('should add key-value pair to the left', () => {
        const bst3 = new MapBST<number, number>(compare);
        bst3.add(3, 5);
        bst3.add(2, 42);
        expect(bst3.root.leftNode).toStrictEqual(new NodeBST<number, number>(2, 42, null, null));
    });
    test('should add key-value pair to the right', () => {
        const bst4 = new MapBST<number, number>(compare);
        bst4.add(3, 5);
        bst4.add(10, 42);
        expect(bst4.root.rightNode).toStrictEqual(new NodeBST<number, number>(10, 42, null, null));
    });
    test('should rewrite value if there is an existed node with the same key', () => {
        const bst5 = new MapBST<number, number>(compare);
        bst5.add(3, 5);
        bst5.add(2, 42);
        bst5.add(10, 42);
        bst5.add(47, 892);
        bst5.add(10, 7863);
        bst5.add(47, 3672);
        expect(bst5.root.rightNode.rightNode.value).toStrictEqual(3672);
    });
    test('should return old value when a value was rewritten)', () => {
        const bst6 = new MapBST<number, number>(compare);
        bst6.add(3, 5);
        bst6.add(2, 42);
        bst6.add(47, 892);
        bst6.add(10, 42);
        bst6.add(47, 7863);
        expect(bst6.add(47, 5223)).toStrictEqual(7863);
    });
});

describe('hasKey method', () => {
    test('should return false if trying to find a key in an empty tree', () => {
        const bst7 = new MapBST<number, number>(compare);
        expect(bst7.hasKey(68)).toBeFalsy();
    });

    test('should return false if trying to find a key that does not exist in a tree', () => {
        const bst8 = new MapBST<number, number>(compare);
        bst8.add(827, 23);
        bst8.add(371, 28);
        bst8.add(48, 921);
        expect(bst8.hasKey(83740)).toBeFalsy();
    });

    test('should return true if trying to find an existing key in a tree', () => {
        const bst9 = new MapBST<number, number>(compare);
        bst9.add(371, 28);
        bst9.add(827, 23);
        bst9.add(48, 921);
        expect(bst9.hasKey(827)).toBeTruthy();
        expect(bst9.hasKey(371)).toBeTruthy();
        expect(bst9.hasKey(48)).toBeTruthy();
    });
});

describe('remove method', () => {
    test('should remove a root from a tree (the root has only right child)', () => {
        const bst10 = new MapBST<number, number>(compare);
        bst10.add(3, 9);
        bst10.add(5, 14);
        bst10.add(6, 57);
        bst10.remove(3);
        const expectedTree = new NodeBST(5, 14, null, new NodeBST(6, 57, null, null));
        expect(bst10.root).toStrictEqual(expectedTree);
    });

    test('should remove a root from a tree (the root has only left child)', () => {
        const bst10 = new MapBST<number, number>(compare);
        bst10.add(3, 9);
        bst10.add(2, 14);
        bst10.add(1, 57);
        bst10.remove(3);
        const expectedTree = new NodeBST(2, 14, new NodeBST(1, 57, null, null), null);
        expect(bst10.root).toStrictEqual(expectedTree);
    });

    test('should remove a root from a tree (the root has left and right children)', () => {
        const bst10 = new MapBST<number, number>(compare);
        bst10.add(3, 9);
        bst10.add(2, 14);
        bst10.add(5, 47);
        bst10.add(4, 256);
        bst10.remove(3);
        const expectedTree = new NodeBST(4, 256, new NodeBST(2, 14, null, null), new NodeBST(5, 47, null, null));
        expect(bst10.root).toStrictEqual(expectedTree);
    });

    test('should return null if there no such a key', () => {
        const bst10 = new MapBST<number, number>(compare);
        bst10.add(3, 9);
        bst10.add(5, 14);
        bst10.add(6, 57);
        expect(bst10.remove(10)).toStrictEqual(null);
    });

    test('should return a value of a deleted node', () => {
        const bst10 = new MapBST<number, number>(compare);
        bst10.add(3, 9);
        bst10.add(5, 14);
        bst10.add(6, 57);
        expect(bst10.remove(5)).toStrictEqual(14);
    });
    test('should remove a node which has no children', () => {
        const bst11 = new MapBST<number, number>(compare);
        bst11.add(3, 9);
        bst11.add(5, 14);
        bst11.add(6, 57);
        bst11.remove(6);
        const expectedTree = new NodeBST(3, 9, null, new NodeBST(5, 14, null, null))
        expect(bst11.root).toStrictEqual(expectedTree);
        bst11.add(8, 109);
        expect(bst11.remove(8)).toStrictEqual(109);
    });
    test('should remove a node which has only left child', () => {
        const bst12 = new MapBST<number, number>(compare);
        bst12.add(15, 9);
        bst12.add(10, 14);
        bst12.add(7, 57);
        bst12.add(5, 832);
        bst12.add(8, 62);
        bst12.remove(10);
        const expectedTree = new NodeBST(15, 9, new NodeBST(7, 57, new NodeBST(5, 832, null, null), new NodeBST(8, 62, null, null)), null);
        expect(bst12.root).toStrictEqual(expectedTree);
    });
    test('should remove a node which has only right child', () => {
        const bst12 = new MapBST<number, number>(compare);
        bst12.add(15, 9);
        bst12.add(10, 14);
        bst12.add(12, 57);
        bst12.add(11, 832);
        bst12.add(14, 62);
        bst12.remove(10);
        const expectedTree = new NodeBST(15, 9, new NodeBST(12, 57, new NodeBST(11, 832, null, null), new NodeBST(14, 62, null, null)), null);
        expect(bst12.root).toStrictEqual(expectedTree);
    });
    test('should remove a node which has two children', () => {
        const bst13 = new MapBST<number, number>(compare);
        bst13.add(15, 9);
        bst13.add(10, 14);
        bst13.add(12, 57);
        bst13.add(7, 20);
        bst13.add(11, 832);
        bst13.remove(10);
        const leftChild = new NodeBST(11, 832, new NodeBST(7, 20, null, null), new NodeBST(12, 57, null, null));
        const root = new NodeBST(15, 9, leftChild, null);
        expect(bst13.root).toStrictEqual(root);
    });
});

type KeyValue = {
    key: number;
    value: number
}
describe('iterator', () => {
    test('should iterate', () => {
        const bst14 = new MapBST<number, number>(compare);
        bst14.add(15, 9);
        bst14.add(10, 14);
        bst14.add(12, 57);
        bst14.add(7, 20);
        bst14.add(11, 832);
        bst14.add(16, 97);
        const iterate = (bst: MapBST<number, number>) => {
            var array: [number, number][] = [];
            for (let entry of bst) {
                array.push([entry.key, entry.value]);
            };
            return array;
        };
        const expectedArray: [number, number][] = [[7, 20], [10, 14], [11, 832], [12, 57], [15, 9], [16, 97]]
        expect(iterate(bst14)).toStrictEqual(expectedArray);
    });
});