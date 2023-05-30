class Queue {
  constructor(size) {
    this.arr = new Array(size);
    this.size = size;
    this.front = 0;
    this.rear = 0;
  }

  push(data) {
    if (this.rear === this.size) {
      console.log("Q is full");
    } else {
      this.arr[this.rear] = data;
      this.rear++;
    }
  }

  pop() {
    if (this.front === this.rear) {
      console.log("Q is empty");
    } else {
      this.arr[this.front] = -1;
      this.front++;
      if (this.front === this.rear) {
        this.front = 0;
        this.rear = 0;
      }
    }
  }

  getFront() {
    if (this.front === this.rear) {
      console.log("Q is empty");
      return -1;
    } else {
      return this.arr[this.front];
    }
  }

  isEmpty() {
    if (this.front === this.rear) {
      return true;
    } else {
      return false;
    }
  }

  getSize() {
    return this.rear - this.front;
  }
}

const q = new Queue(10);

q.push(5);
q.push(15);
q.push(25);
q.push(55);

console.log("Size of queue is:", q.getSize());

q.pop();

console.log("Size of queue is:", q.getSize());

console.log("Front element is:", q.getFront());

if (q.isEmpty()) {
  console.log("Q is empty");
} else {
  console.log("Q is not empty");
}
