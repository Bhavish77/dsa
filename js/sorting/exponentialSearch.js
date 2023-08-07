function exponentialSearch(arr, target) {
  if (arr[0] === target) {
    return 0; // Found at the first position
  }

  let i = 1;
  const n = arr.length;

  while (i < n && arr[i] <= target) {
    i *= 2;
  }

  const left = Math.floor(i / 2);
  const right = Math.min(i, n - 1);
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
const sortedArray = [1, 3, 5, 7, 9, 11, 13, 15];
const targetElement = 7;
const resultIndex = exponentialSearch(sortedArray, targetElement);
console.log(resultIndex); // Output: 3 (index of the targetElement in the array)
