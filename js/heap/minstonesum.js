class Solution {
    minStoneSum(piles, k) {
        const maxHeap = new MaxHeap();

        for (let i = 0; i < piles.length; i++) {
            maxHeap.push(piles[i]);
        }

        while (k > 0) {
            let maxElement = maxHeap.pop();
            maxElement -= Math.floor(maxElement / 2);
            maxHeap.push(maxElement);
            k--;
        }

        let sum = 0;
        while (!maxHeap.isEmpty()) {
            let temp = maxHeap.pop();
            sum += temp;
        }
        return sum;
    }
}

class MaxHeap {
    constructor() {
        this.heap = [];
    }

    push(value) {
        this.heap.push(value);
        this.heapifyUp(this.heap.length - 1);
    }

    pop() {
        if (this.heap.length === 0) {
            return null;
        }

        const root = this.heap[0];
        const lastElement = this.heap.pop();

        if (this.heap.length > 0) {
            this.heap[0] = lastElement;
            this.heapifyDown(0);
        }

        return root;
    }

    heapifyUp(index) {
        const parentIndex = Math.floor((index - 1) / 2);

        if (parentIndex >= 0 && this.heap[parentIndex] < this.heap[index]) {
            [this.heap[parentIndex], this.heap[index]] = [this.heap[index], this.heap[parentIndex]];
            this.heapifyUp(parentIndex);
        }
    }

    heapifyDown(index) {
        const leftChildIndex = 2 * index + 1;
        const rightChildIndex = 2 * index + 2;
        let largestIndex = index;

        if (leftChildIndex < this.heap.length && this.heap[leftChildIndex] > this.heap[largestIndex]) {
            largestIndex = leftChildIndex;
        }

        if (rightChildIndex < this.heap.length && this.heap[rightChildIndex] > this.heap[largestIndex]) {
            largestIndex = rightChildIndex;
        }

        if (largestIndex !== index) {
            [this.heap[index], this.heap[largestIndex]] = [this.heap[largestIndex], this.heap[index]];
            this.heapifyDown(largestIndex);
        }
    }

    isEmpty() {
        return this.heap.length === 0;
    }
}
