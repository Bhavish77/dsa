class Node {
  constructor(data, row, col) {
    this.data = data;
    this.row = row;
    this.col = col;
  }
}

class Compare {
  constructor() {
    this.compare = (a, b) => {
      return a.data > b.data;
    };
  }
}

class Solution {
  smallestRange(nums) {
    let mini = Number.MAX_SAFE_INTEGER;
    let maxi = Number.MIN_SAFE_INTEGER;

    const minHeap = new PriorityQueue(new Compare().compare);
    const k = nums.length;
    for (let i = 0; i < k; i++) {
      const element = nums[i][0];
      maxi = Math.max(maxi, element);
      mini = Math.min(mini, element);
      minHeap.push(new Node(element, i, 0));
    }

    let ansStart = mini;
    let ansEnd = maxi;

    while (!minHeap.isEmpty()) {
      const top = minHeap.pop();
      const topElement = top.data;
      const topRow = top.row;
      const topCol = top.col;

      // Update the minimum value
      mini = topElement;

      // Check for potential answer range
      const currRange = maxi - mini;
      const ansRange = ansEnd - ansStart;
      if (currRange < ansRange) {
        ansStart = mini;
        ansEnd = maxi;
      }

      // Check for new element in the same list
      if (topCol + 1 < nums[topRow].length) {
        maxi = Math.max(maxi, nums[topRow][topCol + 1]);
        const newNode = new Node(nums[topRow][topCol + 1], topRow, topCol + 1);
        minHeap.push(newNode);
      } else {
        // There is no element in the same list
        break;
      }
    }

    return [ansStart, ansEnd];
  }
}

class PriorityQueue {
  constructor(compareFn) {
    this.compareFn = compareFn;
    this.heap = [];
  }

  push(value) {
    this.heap.push(value);
    this.heapifyUp();
  }

  pop() {
    if (this.isEmpty()) {
      return undefined;
    }

    const root = this.heap[0];
    const last = this.heap.pop();

    if (this.heap.length > 0) {
      this.heap[0] = last;
      this.heapifyDown();
    }

    return root;
  }

  isEmpty() {
    return this.heap.length === 0;
  }

  heapifyUp() {
    let index = this.heap.length - 1;
    while (index > 0) {
      const parentIndex = Math.floor((index - 1) / 2);
      if (this.compareFn(this.heap[index], this.heap[parentIndex])) {
        this.swap(index, parentIndex);
        index = parentIndex;
      } else {
        break;
      }
    }
  }

  heapifyDown() {
    let index = 0;
    const size = this.heap.length;

    while (index < size) {
      const leftChild = 2 * index + 1;
      const rightChild = 2 * index + 2;
      let largest = index;

      if (
        leftChild < size &&
        this.compareFn(this.heap[leftChild], this.heap[largest])
      ) {
        largest = leftChild;
      }

      if (
        rightChild < size &&
        this.compareFn(this.heap[rightChild], this.heap[largest])
      ) {
        largest = rightChild;
      }

      if (largest !== index) {
        this.swap(index, largest);
        index = largest;
      } else {
        break;
      }
    }
  }

  swap(a, b) {
    [this.heap[a], this.heap[b]] = [this.heap[b], this.heap[a]];
  }
}

const solution = new Solution();
const nums = [
  [4, 10, 15, 24, 26],
  [0, 9, 12, 20],
  [5, 18, 22, 30]
];

const result = solution.smallestRange(nums);
console.log("Smallest Range:", result[0], "to", result[1]);
