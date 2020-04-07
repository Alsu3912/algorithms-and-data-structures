import { isBracketCorrect } from '../src/stack';

test('input without brackets', () => {
    const input = '1234';
    expect(isBracketCorrect(input)).toBeTruthy();
});

test('empty string', () => {
    expect(isBracketCorrect('')).toBeTruthy();
});

test('input is null', () => {
    expect(() => isBracketCorrect(null)).toThrow(TypeError);
});

test('input is undefined', () => {
    expect(() => isBracketCorrect(undefined)).toThrow(TypeError);
});

test('correct brackets', () => {
    const input = '(1){}[]';
    expect(isBracketCorrect(input)).toBeTruthy();
});

test('correct nested brackets', () => {
    const input = '{12[34](56)[()]}';
    expect(isBracketCorrect(input)).toBeTruthy();
});

test('extra opening brackets', () => {
    const input = '{([123456]12345';
    expect(isBracketCorrect(input)).toBeFalsy();
});

test('only opening brackets', () => {
    const input = '123(456{[[(';
    expect(isBracketCorrect(input)).toBeFalsy();
});

test('only closing brackets', () => {
    const input = '123)456}])';
    expect(isBracketCorrect(input)).toBeFalsy();
})

test('extra closing bracket', () => {
    const input = '[123456]12}345';
    expect(isBracketCorrect(input)).toBeFalsy();
})

test('unpaired brackets', () => {
    const input = '123[456)(789]'
    expect(isBracketCorrect(input)).toBeFalsy();
})

test('incorrect nested brackets', () => {
    const input = '{123[456(789])}'
    expect(isBracketCorrect(input)).toBeFalsy();
})