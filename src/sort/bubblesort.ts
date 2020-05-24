export default function bubbleSorting(arrayOfNumbers: number[]): number[] {
    for (let i = arrayOfNumbers.length - 1; i > 0; i--) {
        for (let k = 0; k < i; k++) {
            let current = arrayOfNumbers[k];
            if (current > arrayOfNumbers[k + 1]) {
                arrayOfNumbers[k] = arrayOfNumbers[k + 1];
                arrayOfNumbers[k + 1] = current;
            };
        };
    };
    return arrayOfNumbers;
}