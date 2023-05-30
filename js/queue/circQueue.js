class CirQueue {
  constructor(size) {
    this.size = size;
    this.arr = new Array(size);
    this.front = -1;
    this.rear = -1;
  }

  push(data) {
    // Queue Full
    if ((this.front === 0 && this.rear === this.size - 1) || (this.rear === this.front - 1)) {
      console.log("Queue is full, cannot insert");
    }
    // Single element case - first element
    else if (this.front === -1) {
      this.front = this.rear = 0;
      this.arr[this.rear] = data;
    }
    // Circular nature
    else if (this.rear === this.size - 1 && this.front !== 0) {  // this.front !=0 cuz we have to push data 
      this.rear = 0;
      this.arr[this.rear] = data;
    }
    // Normal flow
    else {
      this.rear++;
      this.arr[this.rear] = data;
    }
  }

  pop() {
    // Empty check
    if (this.front === -1) {
      console.log("Queue is empty, cannot pop");
    }
    // Single element
    else if (this.front === this.rear) {
      this.arr[this.front] = -1;
      this.front = -1;
      this.rear = -1;
    }
    // Circular nature
    else if (this.front === this.size - 1) {      // here this.front !=0 cuz no need to push data
      this.front = 0;
    }
    // Normal flow
    else {
      this.front++;
    }
  }
}

const queue = new CirQueue(5);

queue.push(10);
queue.push(20);
queue.push(30);
queue.push(40);
queue.push(50);
queue.push(60); // Queue is full, cannot insert

queue.pop();
queue.pop();
queue.pop();

queue.push(70);
queue.push(80);
