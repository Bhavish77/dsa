function partition(arr, low, high) {
    let pivotIndex = low;
    let pivot = arr[low];
    let count = 0;

    for (let i = low; i < high; i++) {
        if (arr[i] <= pivot) {
            count++;
        }
    }

    let rightIndexOfPivot = low + count;
    [arr[pivotIndex], arr[rightIndexOfPivot]] = [arr[rightIndexOfPivot], arr[pivotIndex]];
    pivotIndex = rightIndexOfPivot;

    let i = low;
    let j = high;

    while (i < pivotIndex && j > pivotIndex) {
        while (arr[i] < pivot) {
            i++;
        }

        while (arr[j] > pivot) {
            j--;
        }

        if (i < pivotIndex && j > pivotIndex) {
            [arr[i], arr[j]] = [arr[j], arr[i]]; // Use array destructuring to swap elements
        }
    }

    return pivotIndex; // Move the return statement outside the while loop
}

function quickSort(arr, low, high) {
    if (low < high) {
        let pIndex = partition(arr, low, high);
        quickSort(arr, low, pIndex - 1);
        quickSort(arr, pIndex + 1, high);
    }
}


function sortArray(arr) {
    quickSort(arr, 0, arr.length - 1);
    return arr;
}

// Example usage:
let arr = [4, 6, 2, 5, 7, 9, 1, 3];
console.log("Before using Quick Sort:", arr);
sortArray(arr);
console.log("After using Quick Sort:", arr);
