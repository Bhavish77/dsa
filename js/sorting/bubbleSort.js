function bubbleSort(arr) {
    const n = arr.length;

    for (let round = 1; round < n; round++) {      //ith round me ith largest element ko sahi jagah lgana he
        let swapCount = 0;
        for (let j = 0; j < n - round; j++) {
            if (arr[j] > arr[j + 1]) {
                [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
                swapCount++;
            }
        }
        if (swapCount === 0) {
            // sort ho chuka hai, no need to check in further rounds
            break;
        }
    }

    return arr;
}

// Test the function
const arr = [10, 1, 7, 6, 14, 9];
const sortedArr = bubbleSort(arr);
console.log(sortedArr);
