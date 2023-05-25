class MinStack {
  constructor() {
    this.st = [];
  }

  push(val) {
    if (this.st.length === 0) {
      this.st.push([val, val]);
    } else {
      const minVal = Math.min(val, this.st[this.st.length - 1][1]);
      this.st.push([val, minVal]);
    }
  }

  pop() {
    this.st.pop();
  }

  top() {
    if (this.st.length === 0) {
      return undefined; // or any other value indicating an empty stack
    }
    return this.st[this.st.length - 1][0];
  }

  getMin() {
    if (this.st.length === 0) {
      return undefined; // or any other value indicating an empty stack
    }
    return this.st[this.st.length - 1][1];
  }
}

// Usage:
const obj = new MinStack();
obj.push(5);
obj.pop();
const param3 = obj.top();
const param4 = obj.getMin();

console.log(param3); // Output: undefined
console.log(param4); // Output: undefined
