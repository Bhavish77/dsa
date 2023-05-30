class Deque {
  constructor(size) {
    this.size = size;
    this.arr = new Array(size);
    this.front = -1;
    this.rear = -1;
  }

  pushRear(data) {
    // TODO: add one more condition in the QUEUE FULL if block
    if ((this.front === 0 && this.rear === this.size - 1)) {
      console.log("Q is full, cannot insert");
      return;
    } else if (this.front === -1) {
      this.front = this.rear = 0;
    } else if (this.rear === this.size - 1 && this.front !== 0) {
      this.rear = 0;
    } else {
      this.rear++;
    }
    this.arr[this.rear] = data;
  }

  pushFront(data) {
    // TODO: add one more condition in the QUEUE FULL if block
    if ((this.front === 0 && this.rear === this.size - 1)) {
      console.log("Q is full, cannot insert");
      return;
    } else if (this.front === -1) {
      this.front = this.rear = 0;
    } else if (this.front === 0 && this.rear !== this.size - 1) {
      this.front = this.size - 1;
    } else {
      this.front--;
    }
    this.arr[this.front] = data;
  }

  popFront() {
    if (this.front === -1) {
      console.log("Q is empty, cannot pop");
      return;
    } else if (this.front === this.rear) {
      this.arr[this.front] = -1;
      this.front = -1;
      this.rear = -1;
    } else if (this.front === this.size - 1) {
      this.arr[this.front] = -1;
      this.front = 0;
    } else {
      this.arr[this.front] = -1;
      this.front++;
    }
  }

  popRear() {
    if (this.front === -1) {
      console.log("Q is empty, cannot pop");
      return;
    } else if (this.front === this.rear) {
      this.arr[this.front] = -1;
      this.front = -1;
      this.rear = -1;
    } else if (this.rear === 0) {
      this.arr[this.rear] = -1;
      this.rear = this.size - 1;
    } else {
      this.arr[this.rear] = -1;
      this.rear--;
    }
  }

  print() {
    for (let i = 0; i < this.size; i++) {
      console.log(this.arr[i] + " ");
    }
    console.log("");
  }
}

const dq = new Deque(10);
dq.print();

dq.pushRear(10);
dq.pushRear(20);
dq.pushRear(30);
dq.pushRear(40);
dq.pushRear(50);
dq.pushRear(60);
dq.pushRear(70);
dq.pushRear(80);

dq.print();

dq.popRear();
dq.print();

dq.popRear();
dq.print();

dq.popFront();
dq.print();

dq.popFront();
dq.print();

dq.popFront();
dq.print();

dq.pushFront(101);
dq.print();

dq.pushFront(102);
dq.print();

dq.pushFront(103);
dq.print();

dq.pushFront(104);
dq.print();

dq.popFront();
dq.print();

dq.popFront();
dq.print();

dq.pushRear(201);
