export default function selectionSort(arrayOfNumbers: number[]): number[] {
    let length = arrayOfNumbers.length - 1;
    for (let i = 0; i <= length; i++) {
        let current = arrayOfNumbers[i];
        let kMinimum = i;
        let k = i+1;
        for (k; k<= length; k++) {
            if (arrayOfNumbers[kMinimum] > arrayOfNumbers[k]) {
                kMinimum = k;
            }
        }
        arrayOfNumbers[i] = arrayOfNumbers[kMinimum];
        arrayOfNumbers[kMinimum] = current;
    };
    return arrayOfNumbers;
}