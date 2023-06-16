class Node {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}

function bstUsingInorder(inorder, s, e) {
  if (s > e) {
    return null;
  }

  const mid = Math.floor((s + e) / 2);
  const element = inorder[mid];
  const root = new Node(element);

  root.left = bstUsingInorder(inorder, s, mid - 1);
  root.right = bstUsingInorder(inorder, mid + 1, e);

  return root;
}

function levelOrderTraversal(root) {
  if (root === null) return;

  const queue = [];
  queue.push(root);

  while (queue.length > 0) {
    const node = queue.shift();
    console.log(node.data);

    if (node.left) {
      queue.push(node.left);
    }
    if (node.right) {
      queue.push(node.right);
    }
  }
}

// Example usage
const inorder = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const root = bstUsingInorder(inorder, 0, inorder.length - 1);
console.log("Level Order Traversal:");
levelOrderTraversal(root);
