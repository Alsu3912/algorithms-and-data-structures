import findSubstring from '../src/map';

test('should return a single symbol in case of a string of repeated characters', () => {
    expect(findSubstring('aaaaa')).toStrictEqual('a');
});

test('should return one substring in case of multiple max substring', () => {
    expect(findSubstring('abcabcbb')).toStrictEqual('abc');
});

test('should return the same string when input does not have repeating characters', () => {
    expect(findSubstring('abckew')).toStrictEqual('abckew');
});

test('should return return a single symbol in case of a string with one symbol', () => {
    expect(findSubstring('a')).toStrictEqual('a');
});

test('should return empty string in case of empty string input', () => {
    expect(findSubstring('')).toStrictEqual('');
});
