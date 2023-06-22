// If you want to swap values between array elements, you can use array destructuring or a temporary variable.
// Array destructuring creates new variables and allows for a concise swapping syntax.
// However, it does not directly swap the values between the elements of the array.
// To perform an actual swap, you need to use an intermediate variable.
// Here, a temporary variable is used to swap the values between arr[index] and arr[largest].
// The values are correctly swapped, preserving the original values.
// This approach ensures a proper swap operation in the array.
// Function to heapify a subtree rooted at index i
// n: size of the heap
function heapify(arr, n, i) {
  let index = i;
  let leftIndex = 2 * i;
  let rightIndex = 2 * i + 1;
  let largest = index;

  // Check if the left child is larger than the root
  if (leftIndex <= n && arr[largest] < arr[leftIndex]) {
    largest = leftIndex;
  }

  // Check if the right child is larger than the current largest
  if (rightIndex <= n && arr[largest] < arr[rightIndex]) {
    largest = rightIndex;
  }

  // If the largest element is not the root, swap them
  if (index !== largest) {
    let temp = arr[index];
    arr[index] = arr[largest];
    arr[largest] = temp;

    // Recursively heapify the affected sub-tree
    heapify(arr, n, largest);
  }
}

// Function to build a max heap from an array
function buildHeap(arr, n) {
  // Start from the last non-leaf node and heapify each node
  for (let i = Math.floor(n / 2); i > 0; i--) {
    heapify(arr, n, i);
  }
}

// Function to perform heap sort
function heapSort(arr, n) {
  // Build a max heap from the input array
  buildHeap(arr, n);

  // Extract elements one by one from the heap
  while (n !== 1) {
    // Swap the root (maximum element) with the last element
    let temp = arr[1];
    arr[1] = arr[n];
    arr[n] = temp;

    // Reduce the heap size and heapify the root
    n--;
    heapify(arr, n, 1);
  }
}

// Input array and its size
const arr = [-1, 12, 56, 43, 6, 78, 87, 5, 44, 3, 23, 32];
const n = 11;

// Build the heap
buildHeap(arr, n);

// Print the heap
console.log("Printing the heap:");
for (let i = 1; i <= n; i++) {
  console.log(arr[i]);
}

// Sort the array using heap sort
heapSort(arr, n);

// Print the sorted array
console.log("\nPrinting the sorted array:");
for (let i = 1; i <= n; i++) {
  console.log(arr[i]);
}

