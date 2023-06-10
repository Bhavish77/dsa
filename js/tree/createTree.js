class Node {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}

function findPosition(arr, n, element) {
  for (let i = 0; i < n; i++) {
    if (arr[i] === element) {
      return i;
    }
  }
  return -1;
}

function buildTreeFromPreOrderInOrder(
  inorder,
  preorder,
  size,
  preIndex,
  inorderStart,
  inorderEnd
) {
  if (preIndex >= size || inorderStart > inorderEnd) {
    return null;
  }

  const element = preorder[preIndex++];
  const root = new Node(element);
  const pos = findPosition(inorder, size, element);

  root.left = buildTreeFromPreOrderInOrder(
    inorder,
    preorder,
    size,
    preIndex,
    inorderStart,
    pos - 1
  );

  root.right = buildTreeFromPreOrderInOrder(
    inorder,
    preorder,
    size,
    preIndex,
    pos + 1,
    inorderEnd
  );

  return root;
}

function buildTreeFromPostOrderInOrder(
  inorder,
  postorder,
  postIndex,
  size,
  inorderStart,
  inorderEnd,
  mapping
) {
  if (postIndex < 0 || inorderStart > inorderEnd) {
    return null;
  }

  const element = postorder[postIndex];
  postIndex--;
  const root = new Node(element);

  const pos = mapping[element];

  root.right = buildTreeFromPostOrderInOrder(
    inorder,
    postorder,
    postIndex,
    size,
    pos + 1,
    inorderEnd,
    mapping
  );

  root.left = buildTreeFromPostOrderInOrder(
    inorder,
    postorder,
    postIndex,
    size,
    inorderStart,
    pos - 1,
    mapping
  );

  return root;
}

function levelOrderTraversal(root) {
  const queue = [];
  queue.push(root);
  queue.push(null);

  while (queue.length > 0) {
    const temp = queue.shift();

    if (temp === null) {
      console.log();
      if (queue.length > 0) {
        queue.push(null);
      }
    } else {
      console.log(temp.data + " ");

      if (temp.left) {
        queue.push(temp.left);
      }
      if (temp.right) {
        queue.push(temp.right);
      }
    }
  }
}

function createMapping(mapping, inorder, n) {
  for (let i = 0; i < n; i++) {
    mapping[inorder[i]] = i;
  }
}

// Example usage

const inorder = [40, 20, 10, 50, 30, 60];
const postorder = [40, 20, 50, 60, 30, 10];
const size = 6;
let postIndex = size - 1;
let inorderStart = 0;
let inorderEnd = size - 1;

const mapping = {};

createMapping(mapping, inorder, size);

console.log("Building the tree:");
const root = buildTreeFromPostOrderInOrder(
  inorder,
  postorder,
  postIndex,
  size,
  inorderStart,
  inorderEnd,
  mapping
);

console.log("Printing the tree:");
levelOrderTraversal(root);
