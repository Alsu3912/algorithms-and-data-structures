import findPair from "../src/set";

test('should return nothing when there are no pairs', () => {
    const inputArray = [0, 1, 2, 3, 4, 5, 6, 7];
    expect(findPair(inputArray, 18)).toStrictEqual([]);
});

test('should return one pair', () => {
    const inputArray = [5, 9];
    expect(findPair(inputArray, 14)).toStrictEqual([[5, 9]]);
});

test('should return one pair when numbers are repeated', () => {
    const inputArray = [5, 9, 9, 9, 9, 5, 5, 9, 5];
    expect(findPair(inputArray, 14)).toStrictEqual([[5, 9]]);
});

test('should return nothing when array is empty', () => {
    expect(findPair([], 4)).toStrictEqual([]);
});

test('should return several pairs', () => {
    const inputArray = [-1, 10, 2 , 3, 5, 0, 2];
    expect(findPair(inputArray, 5)).toStrictEqual([[2, 3], [5, 0]]);
});