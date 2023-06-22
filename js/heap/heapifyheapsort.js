function heapify(arr, n, i) {
  let index = i;
  let leftIndex = 2 * i;
  let rightIndex = 2 * i + 1;
  let largest = index;

  if (leftIndex <= n && arr[largest] < arr[leftIndex]) {
    largest = leftIndex;
  }
  if (rightIndex <= n && arr[largest] < arr[rightIndex]) {
    largest = rightIndex;
  }

  if (index !== largest) {
    let temp = arr[index];
    arr[index] = arr[largest];
    arr[largest] = temp;
    heapify(arr, n, largest);
  }
}

function buildHeap(arr, n) {
  for (let i = Math.floor(n / 2); i > 0; i--) {
    heapify(arr, n, i);
  }
}

function heapSort(arr, n) {
  while (n !== 1) {
    let temp = arr[1];
    arr[1] = arr[n];
    arr[n] = temp;
    n--;
    heapify(arr, n, 1);
  }
}

const arr = [-1, 12, 56, 43, 6, 78, 87, 5, 44, 3, 23, 32];
const n = 11;
buildHeap(arr, n);

console.log("Printing the heap:");
for (let i = 1; i <= n; i++) {
  console.log(arr[i]);
}

heapSort(arr, n);

console.log("\nPrinting the sorted array:");
for (let i = 1; i <= n; i++) {
  console.log(arr[i]);
}

