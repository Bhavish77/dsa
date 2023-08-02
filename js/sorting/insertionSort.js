function insertionSort(arr) {
    const n = arr.length;

    for (let round = 1; round < n; round++) {
        // Step A: fetch
        let val = arr[round];
        // Step B: Compare
        let j = round - 1;
        for (; j >= 0; j--) {
            if (arr[j] > val) {
                // Step C: shift
                arr[j + 1] = arr[j];
            } else {
                // Stop shifting, correct position found
                break;
            }
        }
        // Step D: Copy
        arr[j + 1] = val;
    }
}

// Example usage:
let arr = [10, 1, 7, 6, 14, 9];
insertionSort(arr);
console.log(arr.join(" ")); // Output: "1 6 7 9 10 14"
