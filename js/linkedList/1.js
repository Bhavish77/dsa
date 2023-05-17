class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
  }

  insertAtHead(data) {
    const newNode = new Node(data);
    if (this.head === null) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      newNode.next = this.head;
      this.head = newNode;
    }
  }

  insertAtTail(data) {
    const newNode = new Node(data);
    if (this.head === null) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
  }

  print() {
    let temp = this.head;
    while (temp !== null) {
      console.log(temp.data);
      temp = temp.next;
    }
  }

  findLength() {
    let len = 0;
    let temp = this.head;
    while (temp !== null) {
      temp = temp.next;
      len++;
    }
    return len;
  }

  insertAtPosition(data, position) {
    if (position <= 0) {
      this.insertAtHead(data);
      return;
    }

    const len = this.findLength();
    if (position >= len) {
      this.insertAtTail(data);
      return;
    }

    let i = 1;
    let prev = this.head;
    while (i < position) {
      prev = prev.next;
      i++;
    }

    const newNode = new Node(data);
    newNode.next = prev.next;
    prev.next = newNode;
  }

  deleteNode(position) {
    if (this.head === null) {
      console.log("Cannot delete, the linked list is empty");
      return;
    }

    if (position === 1) {
      const temp = this.head;
      this.head = this.head.next;
      if (this.head === null) {
        this.tail = null;
      }
      temp.next = null;
      return;
    }

    const len = this.findLength();
    if (position >= len) {
      console.log("Position is out of bounds");
      return;
    }

    let i = 1;
    let prev = this.head;
    while (i < position - 1) {
      prev = prev.next;
      i++;
    }

    const curr = prev.next;
    prev.next = curr.next;
    if (curr === this.tail) {
      this.tail = prev;
    }
    curr.next = null;
  }

  deleteLinkedList() {
    let curr = this.head;
    while (curr !== null) {
      const temp = curr;
      curr = curr.next;
      temp.next = null;
    }
    this.head = null;
    this.tail = null;
  }
}

// Usage:
const linkedList = new LinkedList();

linkedList.insertAtHead(20);
linkedList.insertAtHead(50);
linkedList.insertAtHead(60);
linkedList.insertAtHead(90);
linkedList.insertAtTail(77);

linkedList.print();
console.log();

linkedList.deleteNode(3);

linkedList.print();

