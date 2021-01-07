import topKFrequent from '../src/topKFrequentElements';

test('should return the k most frequent elements in an input array', () => {
    const expectedArray = topKFrequent([5, 3, 6, 1, 6, 3, 5, 6, 3, 3], 2);
    expect(expectedArray).toStrictEqual([6, 3]);
});
test('should return an empty array when an input array is empty', () => {
    const expectedArray = topKFrequent([], 5);
    expect(expectedArray).toStrictEqual([]);
});

test('should return first unique k elements of an input array in case of same frequency of elements', () => {
    const expectedArray = topKFrequent([4, 2, 7, 9, 3], 3);
    expect(expectedArray).toEqual([4, 2, 7]);
});

test('should return all unique element if max number of unique numbers is less than k', () => {
    const expectedArray = topKFrequent([4, 2, 7, 9, 3, 3], 9);
    expect(expectedArray).toEqual([4, 2, 7, 9, 3]);
});

test('should throw an error when k=0', () => {
    expect(() => topKFrequent([4, 3, 3], 0)).toThrowError(new Error("k should be more than 0"));
});

test('should throw an error when k negative', () => {
    expect(() => topKFrequent([4, 3, 3], -6)).toThrowError(new Error("k should be more than 0"));
});

test('should return the k most frequent elements in an input array (multiple items meet this condition)', () => {
    const expectedArray = topKFrequent([3, 3, 6, 6, 6, 1, 1], 2);
    expect(expectedArray).toStrictEqual([3, 6]);
});