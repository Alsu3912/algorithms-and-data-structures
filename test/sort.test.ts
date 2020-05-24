import selectionSort from '../src/sort/selectionSort';
import bubbleSort from '../src/sort/bubblesort';
import quickSort from '../src/sort/quickSort';

test('should return an empty array when received an empty array', () => {
    expect(selectionSort([])).toStrictEqual([]);
    expect(bubbleSort([])).toStrictEqual([]);
    expect(quickSort([], 0, )).toStrictEqual([]);
});

test('should return the same array when received a sorted array', () => {
    const expected = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    expect(selectionSort(expected)).toStrictEqual(expected);
    expect(bubbleSort(expected)).toStrictEqual(expected);
    expect(quickSort(expected, 0, )).toStrictEqual(expected);
});

test('should sort back sorted array', () => {
    const array = [15, 12, 9, 8, 5, 3, 1, 0];
    const expected = [0, 1, 3, 5, 8, 9, 12, 15];
    expect(selectionSort(array)).toStrictEqual(expected);
    expect(bubbleSort(array)).toStrictEqual(expected);
    expect(quickSort(array, 0, )).toStrictEqual(expected);
});

test('should return the same array when received an array with one element', () => {
    expect(selectionSort([3])).toStrictEqual([3]);
    expect(bubbleSort([3])).toStrictEqual([3]);
    expect(quickSort([3], 0, )).toStrictEqual([3]);
}); 

test('should return the same array when received an array with a repetitive element', () => {
    const expected = [9, 9, 9, 9, 9];
    expect(selectionSort(expected)).toStrictEqual(expected);
    expect(bubbleSort(expected)).toStrictEqual(expected);
    expect(quickSort(expected, 0)).toStrictEqual(expected);
});