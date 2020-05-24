import selectionSort from '../src/sort/selectionSort';
import bubbleSort from '../src/sort/bubblesort';
import quickSort from '../src/sort/quickSort';

test('should return an empty array when received an empty array', () => {
    expect(selectionSort([])).toStrictEqual([]);
    expect(bubbleSort([])).toStrictEqual([]);
    expect(quickSort([], 0, )).toStrictEqual([]);
});

test('should return the same array when received a sorted array', () => {
    expect(selectionSort([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])).toStrictEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
    expect(bubbleSort([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])).toStrictEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
    expect(quickSort([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 0, )).toStrictEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
});

test('should sort back sorted array', () => {
    expect(selectionSort([15, 12, 9, 8, 5, 3, 1, 0])).toStrictEqual([0, 1, 3, 5, 8, 9, 12, 15]);
    expect(bubbleSort([15, 12, 9, 8, 5, 3, 1, 0])).toStrictEqual([0, 1, 3, 5, 8, 9, 12, 15]);
    expect(quickSort([15, 12, 9, 8, 5, 3, 1, 0], 0, )).toStrictEqual([0, 1, 3, 5, 8, 9, 12, 15]);
});

test('should return the same array when received an array with one element', () => {
    expect(selectionSort([3])).toStrictEqual([3]);
    expect(bubbleSort([3])).toStrictEqual([3]);
    expect(quickSort([3], 0, )).toStrictEqual([3]);
}); 

test('should return the same array when received an array with a repetitive element', () => {
    expect(selectionSort([9, 9, 9, 9, 9])).toStrictEqual([9, 9, 9, 9, 9]);
    expect(bubbleSort([9, 9, 9, 9, 9])).toStrictEqual([9, 9, 9, 9, 9]);
    expect(quickSort([9, 9, 9, 9, 9], 0)).toStrictEqual([9, 9, 9, 9, 9]);
});