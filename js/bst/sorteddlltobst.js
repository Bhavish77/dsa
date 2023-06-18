class Node {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

function createDoublyLinkedList(arr) {
  if (arr.length === 0) {
    return null;
  }

  let head = new Node(arr[0]);
  let prev = head;

  for (let i = 1; i < arr.length; i++) {
    let newNode = new Node(arr[i]);
    prev.right = newNode;
    newNode.left = prev;
    prev = newNode;
  }

  return head;
}

function sortedLinkedListIntoBST(headRef, n) {
  // Base case
  if (n <= 0 || headRef.head === null) {
    return null;
  }

  let leftSubtree = sortedLinkedListIntoBST(headRef, Math.floor(n / 2));

  let root = headRef.head;
  root.left = leftSubtree;

  headRef.head = headRef.head.right;

  // Right part needs to be solved
  root.right = sortedLinkedListIntoBST(headRef, n - 1 - Math.floor(n / 2));

  return root;
}

// Example usage
const arr = [1, 2, 3, 4, 5];
const head = createDoublyLinkedList(arr);

let headRef = { head };
const bstRoot = sortedLinkedListIntoBST(headRef, arr.length);

// In-order traversal of the BST
function inOrderTraversal(node) {
  if (node === null) {
    return;
  }

  inOrderTraversal(node.left);
  console.log(node.val);
  inOrderTraversal(node.right);
}

inOrderTraversal(bstRoot);
