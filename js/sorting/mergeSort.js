/**
 * Merge function to merge two sorted subarrays back into a single sorted array.
 * @param {number[]} arr - The array to be sorted.
 * @param {number} low - Starting index of the left subarray.
 * @param {number} high - Ending index of the right subarray.
 */
function merge(arr, low, high) {
    let mid = Math.floor((low + high) / 2);
    let leftLength = mid - low + 1;
    let rightLength = high - mid;
    let left = [];
    let right = [];

    let k = low;

    // Copy elements from arr to left[] representing the left subarray
    for (let i = 0; i < leftLength; i++) {
        left[i] = arr[k];
        k++;
    }

    k = mid + 1;

    // Copy elements from arr to right[] representing the right subarray
    for (let i = 0; i < rightLength; i++) {
        right[i] = arr[k];
        k++;
    }

    let leftIndex = 0;
    let rightIndex = 0;
    let mainIndex = low;

    // Merge the left and right subarrays back into arr in sorted order
    while (leftIndex < leftLength && rightIndex < rightLength) {
        if (left[leftIndex] <= right[rightIndex]) {
            arr[mainIndex] = left[leftIndex];
            mainIndex++;
            leftIndex++;
        } else {
            arr[mainIndex] = right[rightIndex];
            mainIndex++;
            rightIndex++;
        }
    }

    // If there are any remaining elements in the left subarray, copy them to arr
    while (leftIndex < leftLength) {
        arr[mainIndex] = left[leftIndex];
        mainIndex++;
        leftIndex++;
    }

    // If there are any remaining elements in the right subarray, copy them to arr
    while (rightIndex < rightLength) {
        arr[mainIndex] = right[rightIndex];
        mainIndex++;
        rightIndex++;
    }
}

/**
 * Merge Sort function to sort an array using the Merge Sort algorithm.
 * @param {number[]} nums - The array to be sorted.
 * @param {number} low - Starting index of the array/subarray to be sorted.
 * @param {number} high - Ending index of the array/subarray to be sorted.
 */
var mergeSort = function(nums, low, high) {
    if (low >= high) {
        // Base case: If there's only one element or none, it's already sorted.
        return;
    }

    // Calculate the middle index.
    let mid = Math.floor((low + high) / 2);

    // Recursively sort the left half of the array.
    mergeSort(nums, low, mid);

    // Recursively sort the right half of the array.
    mergeSort(nums, mid + 1, high);

    // Merge the two sorted halves.
    merge(nums, low, high);
};

/**
 * Entry point to the Merge Sort algorithm.
 * @param {number[]} nums - The array to be sorted.
 * @return {number[]} - Sorted array.
 */
var sortArray = function(nums) {
    // Call mergeSort with the starting and ending indices of the whole array.
    mergeSort(nums, 0, nums.length - 1);
    return nums; // Return the sorted array.
};
