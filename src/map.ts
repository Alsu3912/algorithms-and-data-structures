const findSubstring = (str: string): string => {
    if (str.length == 0) {
        return '';
    }
    let s = 0;
    let answer = [0, 0];
    let map = new Map<string, number>();
    for (let i = 0; i < str.length; i++) {
        if (map.has(str[i])) {
            s = map.get(str[i]) + 1;
        }
        map.set(str[i], i);
        if ((i - s) > (answer[1] - answer[0])) {
            answer = [s, i];
        }
    }
    return str.substring(answer[0], answer[1] + 1);
} 

export default findSubstring;