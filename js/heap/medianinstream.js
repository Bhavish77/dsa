// Implementation of Max Heap
class MaxHeap {
  constructor() {
    this.heap = []; // Array to store heap elements
  }

  // Getter for heap size
  get size() {
    return this.heap.length;
  }

  // Check if the heap is empty
  isEmpty() {
    return this.size === 0;
  }

  // Get the maximum element (root) of the heap
  peek() {
    if (this.isEmpty()) return undefined;
    return this.heap[0];
  }

  // Insert an element into the heap
  push(value) {
    this.heap.push(value); // Add the element to the end of the array
    this.bubbleUp(this.size - 1); // Restore the heap property by bubbling up the element
  }

  // Remove and return the maximum element from the heap
  pop() {
    if (this.isEmpty()) return undefined;
    const root = this.heap[0]; // Store the root element to be returned later
    const last = this.heap.pop(); // Remove the last element from the array

    if (this.size > 0) {
      this.heap[0] = last; // Move the last element to the root position
      this.sinkDown(0); // Restore the heap property by sinking down the element
    }

    return root;
  }

  // Restore the heap property by bubbling up an element
  bubbleUp(index) {
    const element = this.heap[index];

    while (index > 0) {
      const parentIndex = Math.floor((index - 1) / 2);
      const parent = this.heap[parentIndex];

      if (element <= parent) break; // If the element is smaller than or equal to its parent, the heap property is satisfied

      this.heap[index] = parent; // Move the parent down
      index = parentIndex; // Update the current index to the parent index for the next iteration
    }

    this.heap[index] = element; // Place the element in its correct position
  }

  // Restore the heap property by sinking down an element
  sinkDown(index) {
    const element = this.heap[index];
    const lastIndex = this.size - 1;

    while (true) {
      const leftChildIndex = index * 2 + 1;
      const rightChildIndex = index * 2 + 2;
      let largestChildIndex = leftChildIndex;

      // Find the larger child (if it exists)
      if (
        rightChildIndex < this.size &&
        this.heap[rightChildIndex] > this.heap[leftChildIndex]
      ) {
        largestChildIndex = rightChildIndex;
      }

      // If the element is larger than or equal to the largest child, the heap property is satisfied
      if (largestChildIndex > lastIndex || this.heap[largestChildIndex] <= element) break;

      this.heap[index] = this.heap[largestChildIndex]; // Move the largest child up
      index = largestChildIndex; // Update the current index to the largest child index for the next iteration
    }

    this.heap[index] = element; // Place the element in its correct position
  }
}

// Implementation of Min Heap
class MinHeap {
  constructor() {
    this.heap = []; // Array to store heap elements
  }

  // Getter for heap size
  get size() {
    return this.heap.length;
  }

  // Check if the heap is empty
  isEmpty() {
    return this.size === 0;
  }

  // Get the minimum element (root) of the heap
  peek() {
    if (this.isEmpty()) return undefined;
    return this.heap[0];
  }

  // Insert an element into the heap
  push(value) {
    this.heap.push(value); // Add the element to the end of the array
    this.bubbleUp(this.size - 1); // Restore the heap property by bubbling up the element
  }

  // Remove and return the minimum element from the heap
  pop() {
    if (this.isEmpty()) return undefined;
    const root = this.heap[0]; // Store the root element to be returned later
    const last = this.heap.pop(); // Remove the last element from the array

    if (this.size > 0) {
      this.heap[0] = last; // Move the last element to the root position
      this.sinkDown(0); // Restore the heap property by sinking down the element
    }

    return root;
  }

  // Restore the heap property by bubbling up an element
  bubbleUp(index) {
    const element = this.heap[index];

    while (index > 0) {
      const parentIndex = Math.floor((index - 1) / 2);
      const parent = this.heap[parentIndex];

      if (element >= parent) break; // If the element is greater than or equal to its parent, the heap property is satisfied

      this.heap[index] = parent; // Move the parent down
      index = parentIndex; // Update the current index to the parent index for the next iteration
    }

    this.heap[index] = element; // Place the element in its correct position
  }

  // Restore the heap property by sinking down an element
  sinkDown(index) {
    const element = this.heap[index];
    const lastIndex = this.size - 1;

    while (true) {
      const leftChildIndex = index * 2 + 1;
      const rightChildIndex = index * 2 + 2;
      let smallestChildIndex = leftChildIndex;

      // Find the smaller child (if it exists)
      if (
        rightChildIndex < this.size &&
        this.heap[rightChildIndex] < this.heap[leftChildIndex]
      ) {
        smallestChildIndex = rightChildIndex;
      }

      // If the element is smaller than or equal to the smallest child, the heap property is satisfied
      if (smallestChildIndex > lastIndex || this.heap[smallestChildIndex] >= element) break;

      this.heap[index] = this.heap[smallestChildIndex]; // Move the smallest child up
      index = smallestChildIndex; // Update the current index to the smallest child index for the next iteration
    }

    this.heap[index] = element; // Place the element in its correct position
  }
}

// Function to determine the signum of two numbers
function signum(a, b) {
  if (a === b) return 0;
  if (a > b) return 1;
  if (a < b) return -1;
}

// Function to calculate the median based on the current state of the max heap and min heap
function callMedian(medianObj, maxHeap, minHeap, element) {
  switch (signum(minHeap.size, maxHeap.size)) {
    case 0:
      if (element > medianObj.value) {
        minHeap.push(element);
        medianObj.value = minHeap.peek();
      } else {
        maxHeap.push(element);
        medianObj.value = maxHeap.peek();
      }
      break;
    case 1:
      if (element > medianObj.value) {
        const minTop = minHeap.pop();
        maxHeap.push(minTop);
        minHeap.push(element);
        medianObj.value = (minHeap.peek() + maxHeap.peek()) / 2.0;
      } else {
        maxHeap.push(element);
        medianObj.value = (minHeap.peek() + maxHeap.peek()) / 2.0;
      }
      break;
    case -1:
      if (element > medianObj.value) {
        minHeap.push(element);
        medianObj.value = (minHeap.peek() + maxHeap.peek()) / 2.0;
      } else {
        const maxTop = maxHeap.pop();
        minHeap.push(maxTop);
        maxHeap.push(element);
        medianObj.value = (minHeap.peek() + maxHeap.peek()) / 2.0;
      }
      break;
  }
}

// Main function
function main() {
  const arr = [5, 15, 1, 3, 2, 8, 7, 9, 10, 6, 11, 4];
  const n = arr.length;

  let medianObj = { value: 0 };
  let maxHeap = new MaxHeap();
  let minHeap = new MinHeap();

  for (let i = 0; i < n; i++) {
    const element = arr[i];
    callMedian(medianObj, maxHeap, minHeap, element);
    console.log(`arr[i]->median: ${medianObj.value}`);
  }
}

// Call the main function
main();

