class TreeNode {
    constructor(val, left = null, right = null) {
        this.val = val;
        this.left = left;
        this.right = right;
    }
}

class Solution {
    solve(root, targetSum, currSum, path, ans) {
        if (root === null) {
            return;
        }
        if (root.left === null && root.right === null) {
            path.push(root.val);
            currSum += root.val;
            if (currSum === targetSum) {
                ans.push([...path]);
            }
            path.pop();
            currSum -= root.val;
            return;
        }
        path.push(root.val);
        currSum += root.val;
        this.solve(root.left, targetSum, currSum, path, ans);
        this.solve(root.right, targetSum, currSum, path, ans);
        path.pop();
        currSum -= root.val;
    }

    pathSum(root, targetSum) {
        let ans = [];
        let sum = 0;
        let temp = [];
        this.solve(root, targetSum, sum, temp, ans);
        return ans;
    }
}

// Example usage:

// Create a sample binary tree
let tree = new TreeNode(5);
tree.left = new TreeNode(4);
tree.right = new TreeNode(8);
tree.left.left = new TreeNode(11);
tree.right.left = new TreeNode(13);
tree.right.right = new TreeNode(4);
tree.left.left.left = new TreeNode(7);
tree.left.left.right = new TreeNode(2);
tree.right.right.left = new TreeNode(5);
tree.right.right.right = new TreeNode(1);

// Create an instance of the Solution class
let solution = new Solution();

// Find all root-to-leaf paths that sum to a target value (e.g., 22)
let targetSum = 22;
let pathSums = solution.pathSum(tree, targetSum);
console.log(pathSums);
// Output: [[5, 4, 11, 2], [5, 8, 4, 5]]

