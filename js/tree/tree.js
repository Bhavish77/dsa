class Node {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}

function buildTree() {
  const data = prompt("Enter the data:");
  
  if (data === '-1') {
    return null;
  }

  const root = new Node(parseInt(data));

  console.log("Enter data for the left part of " + data + " node");
  root.left = buildTree();

  console.log("Enter data for the right part of " + data + " node");
  root.right = buildTree();

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

function inorderTraversal(root) {
  if (root === null) {
    return;
  }

  inorderTraversal(root.left);
  console.log(root.data + " ");
  inorderTraversal(root.right);
}

function preorderTraversal(root) {
  if (root === null) {
    return;
  }

  console.log(root.data + " ");
  preorderTraversal(root.left);
  preorderTraversal(root.right);
}

function postorderTraversal(root) {
  if (root === null) {
    return;
  }

  postorderTraversal(root.left);
  postorderTraversal(root.right);
  console.log(root.data + " ");
}

function height(root) {
  if (root === null) {
    return 0;
  }

  const leftHeight = height(root.left);
  const rightHeight = height(root.right);
  const ans = Math.max(leftHeight, rightHeight) + 1;
  return ans;
}

function main() {
  const root = buildTree();
  levelOrderTraversal(root);
  console.log("height: " + height(root));
}

main();
