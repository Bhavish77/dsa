function unboundedBinarySearch(arr, target) {
  let left = 0;
  let right = 1;

  // Double the search range until the target is within the current range
  while (arr[right] < target) {
    left = right;
    right *= 2;
  }

  return binarySearch(arr, target, left, right);
}

function binarySearch(arr, target, left, right) {
  while (left <= right) {
    const mid = Math.floor((left + right) / 2);

    if (arr[mid] === target) {
      return mid; // Element found at index "mid"
    } else if (arr[mid] < target) {
      left = mid + 1; // Search in the right half
    } else {
      right = mid - 1; // Search in the left half
    }
  }

  return -1; // Element not found
}

// Example usage:
const infiniteSortedArray = [1, 3, 5, 7, 9, 11, 13, 15, ...]; // Assume the array continues indefinitely
const targetElement = 9;
const resultIndex = unboundedBinarySearch(infiniteSortedArray, targetElement);
console.log(resultIndex); // Output: 4 (index of the targetElement in the array)
