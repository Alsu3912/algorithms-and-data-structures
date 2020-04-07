export function isBracketCorrect(sequence: string): boolean {
    const stack: Array<string> = [];
    for (let i = 0; i < sequence.length; i++) {
        const parenthesis = sequence[i];
        if (parenthesis === '(') {
            stack.push(')');
        };
        if (parenthesis === '{') {
            stack.push('}');
        };
        if (parenthesis === '[') {
            stack.push(']');
        }
        if (parenthesis === ')' || parenthesis === '}' || parenthesis === ']') {
            const top = stack.pop();
            if (top !== parenthesis) {
                return false;
            };
        };
    }
    return stack.length == 0;
}