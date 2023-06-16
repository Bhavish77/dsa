/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val === undefined ? 0 : val)
 *     this.left = (left === undefined ? null : left)
 *     this.right = (right === undefined ? null : right)
 * }
 */

/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
var lowestCommonAncestor = function(root, p, q) {
    // Base case: If the root is null, return null
    if (root === null)
        return null;

    // Case 1: If both p and q values are less than the root value, recurse on the left subtree
    if (p.val < root.val && q.val < root.val) {
        return lowestCommonAncestor(root.left, p, q);
    }
    // Case 2: If both p and q values are greater than the root value, recurse on the right subtree
    else if (p.val > root.val && q.val > root.val) {
        return lowestCommonAncestor(root.right, p, q);
    }
    // Case 3: If one value is less than the root value and the other value is greater than the root value,
    // or if one value matches the root value, the root is the lowest common ancestor
    else {
        return root;
    }
};
