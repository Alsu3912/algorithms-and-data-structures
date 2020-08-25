import findSubstring from '../src/map';

test('should return a single symbol in case of a string of repeated characters', () => {
    expect(findSubstring('aaaaa')).toStrictEqual('a');
});

test('should work correct', () => {
    expect(findSubstring('abcabcbb')).toStrictEqual('abc');
});

test('should work correct - 2', () => {
    expect(findSubstring('pwwkew')).toStrictEqual('wke');
});

test('should work correct - 3', () => {
    expect(findSubstring('abcabc')).toStrictEqual('abc');
});

test('should work correct - 4', () => {
    expect(findSubstring('abbbbbb')).toStrictEqual('ab');
});

test('should return return a single symbol in case of a string with one symbol', () => {
    expect(findSubstring('a')).toStrictEqual('a');
});

test('should return empty string in case of empty string input', () => {
    expect(findSubstring('')).toStrictEqual('');
});
