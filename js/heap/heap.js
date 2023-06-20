class Heap {
  constructor() {
    this.arr = []; // Array to store the heap elements
    this.size = 0; // Current size of the heap
  }

  insert(value) {
    this.size += 1; // Increase the size of the heap
    let index = this.size; // Get the index for the new element
    this.arr[index] = value; // Insert the new element at the end of the array

    // Adjust the position of the new element to maintain the heap property
    while (index > 1) {
      let parentIndex = Math.floor(index / 2); // Calculate the parent index
      if (this.arr[index] > this.arr[parentIndex]) {
        // If the new element is greater than its parent, swap them
        [this.arr[index], this.arr[parentIndex]] = [this.arr[parentIndex], this.arr[index]];
        index = parentIndex; // Update the index to the parent index
      } else {
        break; // If the new element is at the correct position, break the loop
      }
    }
  }

  delete() {
    let ans = this.arr[1]; // Store the root element (maximum element)
    this.arr[1] = this.arr[this.size]; // Replace the root with the last element in the array
    this.size--; // Decrease the size of the heap

    let index = 1; // Start from the root index
    while (index < this.size) {
      let left = 2 * index; // Calculate the left child index
      let right = 2 * index + 1; // Calculate the right child index

      let largest = index; // Assume the current index has the largest value

      // Check if the left child exists and its value is greater than the current largest
      if (left < this.size && this.arr[largest] < this.arr[left]) {
        largest = left; // Update the largest index
      }
      // Check if the right child exists and its value is greater than the current largest
      if (right < this.size && this.arr[largest] < this.arr[right]) {
        largest = right; // Update the largest index
      }

      if (largest === index) {
        // If the current index is at the correct position, break the loop
        break;
      } else {
        // Swap the current index with the largest index
        [this.arr[index], this.arr[largest]] = [this.arr[largest], this.arr[index]];
        index = largest; // Update the index to the largest index
      }
    }

    return ans; // Return the deleted element (maximum element)
  }
}

const h = new Heap(); // Create a new instance of the Heap class
h.insert(50); // Insert elements into the heap
h.insert(30);
h.insert(70);
h.insert(40);
h.insert(80);
h.insert(100);

console.log("Printing the heap:");
for (let i = 1; i <= h.size; i++) {
  console.log(h.arr[i]); // Print each element in the heap
}
