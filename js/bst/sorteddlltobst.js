class Node {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

// Function to create a doubly linked list from an array
function createDoublyLinkedList(arr) {
  if (arr.length === 0) {
    return null;
  }

  let head = new Node(arr[0]);
  let prev = head;

  // Traverse the array and create nodes of the linked list
  for (let i = 1; i < arr.length; i++) {
    let newNode = new Node(arr[i]);

    // Connect the nodes in a doubly linked manner
    prev.right = newNode;
    newNode.left = prev;
    prev = newNode;
  }

  return head;
}

// Function to construct a binary search tree from a sorted doubly linked list
function sortedLinkedListIntoBST(headRef, n) {
  // Base case: If n is 0 or head is null, return null
  if (n <= 0 || headRef.head === null) {
    return null;
  }

  // Recursively construct the left subtree
  let leftSubtree = sortedLinkedListIntoBST(headRef, Math.floor(n / 2));

  // Create the root node and connect it to the left subtree
  let root = headRef.head;
  root.left = leftSubtree;

  // Move the head reference to the next node
  headRef.head = headRef.head.right;

  // Recursively construct the right subtree
  root.right = sortedLinkedListIntoBST(headRef, n - 1 - Math.floor(n / 2));

  return root;
}

// Example usage
const arr = [1, 2, 3, 4, 5];
const head = createDoublyLinkedList(arr);

// Create a reference object with the head property set to the head node of the linked list
let headRef = { head };

// Construct the binary search tree using the sorted doubly linked list
const bstRoot = sortedLinkedListIntoBST(headRef, arr.length);

// In-order traversal of the BST
function inOrderTraversal(node) {
  if (node === null) {
    return;
  }

  // Recursively traverse the left subtree
  inOrderTraversal(node.left);

  // Print the value of the current node
  console.log(node.val);

  // Recursively traverse the right subtree
  inOrderTraversal(node.right);
}

// Perform an in-order traversal of the constructed binary search tree
inOrderTraversal(bstRoot);

