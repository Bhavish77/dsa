class Stack {
    constructor(size) {
        this.arr = new Array(size);
        this.top = -1;
        this.size = size;
    }

    push(data) {
        if (this.size - this.top > 1) {
            this.top++;
            this.arr[this.top] = data;
        } else {
            console.log("Stack Overflow");
        }
    }

    pop() {
        if (this.top === -1) {
            console.log("Stack underflow, can't delete element");
        } else {
            this.top--;
        }
    }

    getTop() {
        if (this.top === -1) {
            console.log("There is no element in Stack");
        } else {
            return this.arr[this.top];
        }
    }

    getSize() {
        return this.top + 1;
    }

    isEmpty() {
        return this.top === -1;
    }
}

const stack = new Stack(5);

stack.push(10);
stack.push(20);
stack.push(30);
stack.push(40);
stack.push(50);

while (!stack.isEmpty()) {
    console.log(stack.getTop());
    stack.pop();
}

console.log("Size of stack: " + stack.getSize());

stack.pop();
