class Info {
  constructor(val, r, c) {
    this.data = val;
    this.row = r;
    this.col = c;
  }
}

class Compare {
  // Comparison function for Info objects
  // Used to order elements in ascending order based on their data values
  compare(a, b) {
    return a.data - b.data;
  }
}

function mergeKSortedArrays(arr, k, n) {
  const minHeap = new MinHeap();

  // Insert the first element of each array into the minHeap
  for (let i = 0; i < k; i++) {
    const temp = new Info(arr[i][0], i, 0);
    minHeap.push(temp);
  }

  const ans = [];

  while (!minHeap.isEmpty()) {
    const temp = minHeap.top();
    const topElement = temp.data;
    const topRow = temp.row;
    const topCol = temp.col;
    minHeap.pop();

    ans.push(topElement);

    if (topCol + 1 < n) {
      const newInfo = new Info(arr[topRow][topCol + 1], topRow, topCol + 1);
      minHeap.push(newInfo);
    }
  }

  return ans;
}

class MinHeap {
  constructor() {
    this.heap = [];
    this.compare = new Compare();
  }

  push(info) {
    this.heap.push(info);
    this.heapifyUp();
  }

  pop() {
    if (this.isEmpty()) {
      return;
    }

    this.swap(0, this.heap.length - 1);
    this.heap.pop();
    this.heapifyDown();
  }

  top() {
    return this.heap[0];
  }

  isEmpty() {
    return this.heap.length === 0;
  }

  heapifyUp() {
    let currentIndex = this.heap.length - 1;
    while (currentIndex > 0) {
      const parentIndex = Math.floor((currentIndex - 1) / 2);
      if (this.compare.compare(this.heap[currentIndex], this.heap[parentIndex]) < 0) {
        this.swap(currentIndex, parentIndex);
        currentIndex = parentIndex;
      } else {
        break;
      }
    }
  }

  heapifyDown() {
    let currentIndex = 0;
    while (currentIndex < this.heap.length) {
      const leftChildIndex = 2 * currentIndex + 1;
      const rightChildIndex = 2 * currentIndex + 2;
      let minIndex = currentIndex;

      if (
        leftChildIndex < this.heap.length &&
        this.compare.compare(this.heap[leftChildIndex], this.heap[minIndex]) < 0
      ) {
        minIndex = leftChildIndex;
      }

      if (
        rightChildIndex < this.heap.length &&
        this.compare.compare(this.heap[rightChildIndex], this.heap[minIndex]) < 0
      ) {
        minIndex = rightChildIndex;
      }

      if (minIndex !== currentIndex) {
        this.swap(currentIndex, minIndex);
        currentIndex = minIndex;
      } else {
        break;
      }
    }
  }

  swap(i, j) {
    [this.heap[i], this.heap[j]] = [this.heap[j], this.heap[i]];
  }
}

// Example usage
const arr = [
  [2, 4, 6, 8],
  [1, 3, 5, 7],
  [0, 9, 10, 11]
];
const k = 3;
const n = 4;
const ans = mergeKSortedArrays(arr, k, n);
for (let i of ans) {
  console.log(i);
}
