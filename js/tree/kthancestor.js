class Node {
    constructor(data) {
        this.data = data;
        this.left = null;
        this.right = null;
    }
}

function buildTree() {
    let data;
    console.log("Enter the data:");
    data = parseInt(prompt());

    if (data === -1) {
        return null;
    }

    let root = new Node(data);

    console.log("Enter data for the left part of node " + data);
    root.left = buildTree();

    console.log("Enter data for the right part of node " + data);
    root.right = buildTree();

    return root;
}

function kthAncestor(root, k, p) {
    if (root === null)
        return false;

    if (root.data === p) {
        return true;
    }

    let leftAns = kthAncestor(root.left, k, p);
    let rightAns = kthAncestor(root.right, k, p);

    if (leftAns || rightAns)
        k--;

    if (k === 0) {
        console.log("Answer: " + root.data);
        k = -1;
    }

    return leftAns || rightAns;
}

// Example usage:

// Build the binary tree
let root = buildTree();

// Find the 1st ancestor of node 4
let k = 1;
let p = 4;
kthAncestor(root, k, p);
