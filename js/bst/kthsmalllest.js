class TreeNode {
    constructor(val, left = null, right = null) {
        this.val = val;
        this.left = left;
        this.right = right;
    }
}

class Solution {
    kthSmallest(root, k) {
        if (!root) {
            // -1 reflects base condition reached
            return -1;
        }

        // In-order traversal

        // Left
        const leftAns = this.kthSmallest(root.left, k);

        if (leftAns !== -1) {
            return leftAns;
        }

        // N -> root
        k--;
        if (k === 0) {
            return root.val;
        }

        // Right
        const rightAns = this.kthSmallest(root.right, k);
        return rightAns;
    }
}
