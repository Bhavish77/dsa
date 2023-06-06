function TreeNode(val, left, right) {
  this.val = val;
  this.left = left || null;
  this.right = right || null;
}

const maxDepth = function(root) {
  if (root === null) {
    return 0;
  }

  const leftHeight = maxDepth(root.left);
  const rightHeight = maxDepth(root.right);
  const ans = Math.max(leftHeight, rightHeight) + 1;
  return ans;
};

const diameterOfBinaryTree = function(root) {
  if (root === null) {
    return 0;
  }

  const op1 = diameterOfBinaryTree(root.left);
  const op2 = diameterOfBinaryTree(root.right);
  const op3 = maxDepth(root.left) + 1 + maxDepth(root.right);
  const ans = Math.max(op1, op2, op3);
  return ans;
};

// Test the code
const root = new TreeNode(1);
root.left = new TreeNode(2);
root.right = new TreeNode(3);
root.left.left = new TreeNode(4);
root.left.right = new TreeNode(5);

console.log("Diameter of the binary tree: " + diameterOfBinaryTree(root));
