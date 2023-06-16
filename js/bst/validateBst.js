class TreeNode {
  constructor(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

class Solution {
  // Step 1: Verify Bounds
  solve(root, lb, ub) {
    // Step 2: Inbound Check
    if (root === null) {
      return true;
    }

    // Step 3: Follow Bounds
    if (root.val > lb && root.val < ub) {
      // Step 4: Evaluate Nodes
      const leftAns = this.solve(root.left, lb, root.val);
      const rightAns = this.solve(root.right, root.val, ub);
      
      // Step 5: Recursive Validation
      return leftAns && rightAns;
    } else {
      // Step 5: Recursive Validation
      return false;
    }
  }

  // Step 6: Yes or No Answer
  isValidBST(root) {
    const lowerBound = -Infinity;
    const upperBound = Infinity;
    
    // Step 7: Verify BST
    const ans = this.solve(root, lowerBound, upperBound);
    return ans;
  }
}

// Example usage
const root = new TreeNode(
  5,
  new TreeNode(
    3,
    new TreeNode(2),
    new TreeNode(4)
  ),
  new TreeNode(
    7,
    new TreeNode(6),
    new TreeNode(8)
  )
);

const solution = new Solution();
console.log(solution.isValidBST(root)); // Output: true
