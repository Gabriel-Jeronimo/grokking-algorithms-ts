function findIndexOfSmallestValue(arr: number[]): number {
    let smallestValue = arr[0];
    let smallestIndex = 0;

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < smallestValue) {
            smallestValue = arr[i];
            smallestIndex = i;
        }
    }
    return smallestIndex;
}

export function selectionSort(arr: number[]): number[] {
    const sortedArray: number[] = [];
    const originalLength = arr.length;

    for (let i = 0; i < originalLength; i++) {
        const smallestIndex = findIndexOfSmallestValue(arr);
        sortedArray.push(arr.splice(smallestIndex, 1)[0]);
    }

    return sortedArray;
}
