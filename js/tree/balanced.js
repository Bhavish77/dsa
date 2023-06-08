class TreeNode {
    constructor(val, left = null, right = null) {
        this.val = val;
        this.left = left;
        this.right = right;
    }
}

class Solution {
    height(root) {
        // Base case
        if (root === null)
            return 0;

        let leftHeight = this.height(root.left);
        let rightHeight = this.height(root.right);
        let ans = 1 + Math.max(leftHeight, rightHeight);
        return ans;
    }

    isBalanced(root) {
        // Base case
        if (root === null)
            return true;

        // 1 case
        let leftHeight = this.height(root.left);
        let rightHeight = this.height(root.right);
        let diff = Math.abs(leftHeight - rightHeight);

        let ans1 = (diff <= 1);

        // Recursion
        let leftAns = this.isBalanced(root.left);
        let rightAns = this.isBalanced(root.right);

        if (ans1 && leftAns && rightAns)
            return true;
        else
            return false;
    }
}

// Example usage:

// Create a sample binary tree
let tree = new TreeNode(3);
tree.left = new TreeNode(9);
tree.right = new TreeNode(20);
tree.right.left = new TreeNode(15);
tree.right.right = new TreeNode(7);

// Create an instance of the Solution class
let solution = new Solution();

// Check if the binary tree is balanced
let isBalanced = solution.isBalanced(tree);
console.log(isBalanced);  // Output: true
