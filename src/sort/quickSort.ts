const swap = (arrayOfNumbers: number[], index1: number, index2: number) => {
    let container = arrayOfNumbers[index1];
    arrayOfNumbers[index1] = arrayOfNumbers[index2];
    arrayOfNumbers[index2] = container;
}

const partition = (arrayOfNumbers: number[], i: number, j: number): number => {
    let pivot = arrayOfNumbers[Math.floor((i + j) / 2)];
    let l = i;
    let r = j;
    while (l <= r) {
        while (arrayOfNumbers[l] < pivot) {
            l++;
        };
        while (arrayOfNumbers[r] > pivot) {
            r--;
        };
        if (l <= r) {
            swap(arrayOfNumbers, l, r);
            l++;
            r--;
        }
    }
    return l;
}
const quickSort = (arrayOfNumbers: number[], i: number, j: number=arrayOfNumbers.length-1): number[] => {
    let partitionIndex;
    if (arrayOfNumbers.length > 1) {
        partitionIndex = partition(arrayOfNumbers, i, j);
        if (i < partitionIndex - 1) {
            quickSort(arrayOfNumbers, i, partitionIndex - 1);
        }
        if (partitionIndex < j) {
            quickSort(arrayOfNumbers, partitionIndex, j);
        }

    }
    return arrayOfNumbers;
}

export default quickSort;