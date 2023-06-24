class Node {
  constructor(d, c) {
    this.data = d;
    this.count = c;
  }
}

class Compare {
  compare(a, b) {
    return a.count < b.count;
  }
}

class Solution {
  reorganizeString(s) {
    const freq = new Array(26).fill(0);

    for (let i = 0; i < s.length; i++) {
      const ch = s[i];
      freq[ch.charCodeAt(0) - 'a'.charCodeAt(0)]++;
    }

    const maxHeap = new PriorityQueue(new Compare());

    for (let i = 0; i < 26; i++) {
      if (freq[i] !== 0) {
        const temp = new Node(String.fromCharCode(i + 'a'.charCodeAt(0)), freq[i]);
        maxHeap.push(temp);
      }
    }

    let ans = '';

    while (maxHeap.size() > 1) {
      const first = maxHeap.top();
      maxHeap.pop();
      const second = maxHeap.top();
      maxHeap.pop();

      ans += first.data;
      ans += second.data;

      first.count--;
      second.count--;

      if (first.count !== 0) {
        maxHeap.push(first);
      }

      if (second.count !== 0) {
        maxHeap.push(second);
      }
    }

    if (maxHeap.size() === 1) {
      const temp = maxHeap.top();
      maxHeap.pop();
      if (temp.count === 1) {
        ans += temp.data;
      } else {
        return '';
      }
    }

    return ans;
  }
}

class PriorityQueue {
  constructor(compareFn) {
    this.compare = compareFn.compare;
    this.heap = [];
  }

  size() {
    return this.heap.length;
  }

  top() {
    if (this.size() === 0) {
      return null;
    }
    return this.heap[0];
  }

  push(element) {
    this.heap.push(element);
    this.heapifyUp();
  }

  pop() {
    if (this.size() === 0) {
      return;
    }
    this.swap(0, this.size() - 1);
    this.heap.pop();
    this.heapifyDown();
  }

  heapifyUp() {
    let currentIndex = this.size() - 1;
    while (currentIndex > 0) {
      const parentIndex = Math.floor((currentIndex - 1) / 2);
      if (this.compare(this.heap[currentIndex], this.heap[parentIndex])) {
        this.swap(currentIndex, parentIndex);
        currentIndex = parentIndex;
      } else {
        break;
      }
    }
  }

  heapifyDown() {
    let currentIndex = 0;
    while (currentIndex < this.size()) {
      let childIndex1 = 2 * currentIndex + 1;
      let childIndex2 = 2 * currentIndex + 2;
      let minIndex = currentIndex;

      if (childIndex1 < this.size() && this.compare(this.heap[childIndex1], this.heap[minIndex])) {
        minIndex = childIndex1;
      }

      if (childIndex2 < this.size() && this.compare(this.heap[childIndex2], this.heap[minIndex])) {
        minIndex = childIndex2;
      }

      if (minIndex !== currentIndex) {
        this.swap(currentIndex, minIndex);
        currentIndex = minIndex;
      } else {
        break;
      }
    }
  }

  swap(index1, index2) {
    const temp = this.heap[index1];
    this.heap[index1] = this.heap[index2];
    this.heap[index2] = temp;
  }
}
