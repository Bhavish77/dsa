class PriorityQueue {
  constructor(compare) {
    this.heap = [];
    this.compare = compare;
  }

  get size() {
    return this.heap.length;
  }

  enqueue(value) {
    this.heap.push(value);
    this.heapifyUp();
  }

  dequeue() {
    if (this.size === 0) {
      return null;
    }

    const root = this.heap[0];
    const last = this.heap.pop();

    if (this.size > 0) {
      this.heap[0] = last;
      this.heapifyDown();
    }

    return root;
  }

  heapifyUp() {
    let index = this.size - 1;

    while (index > 0) {
      const element = this.heap[index];
      const parentIndex = Math.floor((index - 1) / 2);
      const parent = this.heap[parentIndex];

      if (this.compare(element, parent) >= 0) {
        break;
      }

      this.heap[index] = parent;
      this.heap[parentIndex] = element;
      index = parentIndex;
    }
  }

  heapifyDown() {
    let index = 0;
    const length = this.size;
    const element = this.heap[index];

    while (true) {
      let leftChildIndex = 2 * index + 1;
      let rightChildIndex = 2 * index + 2;
      let leftChild, rightChild;
      let swapIndex = null;

      if (leftChildIndex < length) {
        leftChild = this.heap[leftChildIndex];
        if (this.compare(leftChild, element) < 0) {
          swapIndex = leftChildIndex;
        }
      }

      if (rightChildIndex < length) {
        rightChild = this.heap[rightChildIndex];
        if (
          (swapIndex === null && this.compare(rightChild, element) < 0) ||
          (swapIndex !== null && this.compare(rightChild, leftChild) < 0)
        ) {
          swapIndex = rightChildIndex;
        }
      }

      if (swapIndex === null) {
        break;
      }

      this.heap[index] = this.heap[swapIndex];
      this.heap[swapIndex] = element;
      index = swapIndex;
    }
  }
}

function getKthGreatestElement(arr, n, k) {
  const compare = (a, b) => a - b;
  const pq = new PriorityQueue(compare);

  for (let i = 0; i < k; i++) {
    pq.enqueue(arr[i]);
  }

  for (let i = k; i < n; i++) {
    const element = arr[i];
    if (element > pq.heap[0]) {
      pq.dequeue();
      pq.enqueue(element);
    }
  }

  const ans = pq.heap[0];
  return ans;
}

function getKthSmallestElement(arr, n, k) {
  const compare = (a, b) => b - a;
  const pq = new PriorityQueue(compare);

  for (let i = 0; i < k; i++) {
    pq.enqueue(arr[i]);
  }

  for (let i = k; i < n; i++) {
    const element = arr[i];
    if (element < pq.heap[0]) {
      pq.dequeue();
      pq.enqueue(element);
    }
  }

  const ans = pq.heap[0];
  return ans;
}

const arr = [10, 5, 20, 4, 15];
const n = 5;
const k = 5;

const ans = getKthGreatestElement(arr, n, k);
console.log("Ans is:", ans);
