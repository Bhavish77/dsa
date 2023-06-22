function heapify(arr, n, i) {
  // Set the current node as the largest
  let index = i;
  let leftIndex = 2 * i; // Calculate the index of the left child
  let rightIndex = 2 * i + 1; // Calculate the index of the right child
  let largest = index; // Initialize the largest element as the current node

  // Check if the left child is within the heap boundaries and larger than the current largest element
  if (leftIndex < n && arr[largest] < arr[leftIndex]) {
    largest = leftIndex;
  }

  // Check if the right child is within the heap boundaries and larger than the current largest element
  if (rightIndex < n && arr[largest] < arr[rightIndex]) {
    largest = rightIndex;
  }

  // If the largest element is not the current node, swap them and recursively heapify the affected subtree
  if (index !== largest) {
    [arr[index], arr[largest]] = [arr[largest], arr[index]];
    heapify(arr, n, largest);
  }
}

function buildHeap(arr, n) {
  // Build the heap by repeatedly heapifying each subtree in reverse order
  for (let i = Math.floor(n / 2) - 1; i >= 0; i--) {
    heapify(arr, n, i);
  }
}

function heapSort(arr, n) {
  // Build the heap
  buildHeap(arr, n);

  // Perform heap sort by repeatedly extracting the maximum element and heapifying the reduced heap
  while (n > 1) {
    // Swap the root (maximum element) with the last element of the heap
    [arr[0], arr[n - 1]] = [arr[n - 1], arr[0]];
    n--; // Reduce the size of the heap
    heapify(arr, n, 0); // Heapify the reduced heap
  }
}

const arr = [-1, 12, 56, 43, 6, 78, 87, 5, 44, 3, 23, 32];
const n = 11;
heapSort(arr, n);

console.log("Printing the sorted array:");
for (let i = 0; i < n; i++) {
  console.log(arr[i]);
}
