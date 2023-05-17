class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

function insertAtHead(head, tail, data) {
  if (head === null) {
    const newNode = new Node(data);
    head = newNode;
    tail = newNode;
  } else {
    const newNode = new Node(data);
    newNode.next = head;
    head = newNode;
  }
}

function insertAtTail(head, tail, data) {
  if (head === null) {
    const newNode = new Node(data);
    head = newNode;
    tail = newNode;
    return;
  }
  
  const newNode = new Node(data);
  tail.next = newNode;
  tail = newNode;
}

function print(head) {
  let temp = head;
  while (temp !== null) {
    console.log(temp.data);
    temp = temp.next;
  }
}

function findLength(head) {
  let len = 0;
  let temp = head;
  while (temp !== null) {
    temp = temp.next;
    len++;
  }
  return len;
}

function insertAtPosition(data, position, head, tail) {
  if (head === null) {
    const newNode = new Node(data);
    head = newNode;
    tail = newNode;
    return;
  }
  
  if (position === 0) {
    insertAtHead(head, tail, data);
    return;
  }
  
  const len = findLength(head);
  
  if (position >= len) {
    insertAtTail(head, tail, data);
    return;
  }
  
  let i = 1;
  let prev = head;
  while (i < position) {
    prev = prev.next;
    i++;
  }
  const curr = prev.next;
  
  const newNode = new Node(data);
  newNode.next = curr;
  prev.next = newNode;
}

let head = null;
let tail = null;
insertAtHead(head, tail, 20);
insertAtHead(head, tail, 50);
insertAtHead(head, tail, 60);
insertAtHead(head, tail, 90);
insertAtTail(head, tail, 77);

print(head);
console.log();

insertAtPosition(101, 5, head, tail);
console.log("Printing after insert at position call");
print(head);
console.log("head: " + head.data);
console.log("tail: " + tail.data);
