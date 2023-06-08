class TreeNode {
    constructor(val, left = null, right = null) {
        this.val = val;
        this.left = left;
        this.right = right;
    }
}

class Solution {
    lowestCommonAncestor(root, p, q) {
        // Base case
        if (root === null)
            return null;

        // Check for p and q
        if (root.val === p.val || root.val === q.val)
            return root;

        let leftAns = this.lowestCommonAncestor(root.left, p, q);
        let rightAns = this.lowestCommonAncestor(root.right, p, q);

        if (leftAns === null && rightAns === null)
            return null;
        else if (leftAns !== null && rightAns === null)
            return leftAns;
        else if (leftAns === null && rightAns !== null)
            return rightAns;
        else
            return root;
    }
}

// Example usage:

// Create a sample binary tree
let tree = new TreeNode(3);
tree.left = new TreeNode(5);
tree.right = new TreeNode(1);
tree.left.left = new TreeNode(6);
tree.left.right = new TreeNode(2);
tree.right.left = new TreeNode(0);
tree.right.right = new TreeNode(8);
tree.left.right.left = new TreeNode(7);
tree.left.right.right = new TreeNode(4);

// Create an instance of the Solution class
let solution = new Solution();

// Find the lowest common ancestor of two nodes (e.g., 5 and 1)
let p = new TreeNode(5);
let q = new TreeNode(1);
let lowestCommonAncestor = solution.lowestCommonAncestor(tree, p, q);
console.log(lowestCommonAncestor.val);  // Output: 3
