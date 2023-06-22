class Node {
    constructor(data) {
        this.data = data;
        this.left = null;
        this.right = null;
    }
}

function solve(root) {
    if (root === null) {
        return [true, Number.MIN_SAFE_INTEGER];
    }

    if (root.left === null && root.right === null) {
        return [true, root.data];
    }

    const [leftValid, leftMax] = solve(root.left);
    const [rightValid, rightMax] = solve(root.right);

    if (
        leftValid === true &&
        rightValid === true &&
        root.data > leftMax &&
        root.data > rightMax
    ) {
        return [true, root.data];
    } else {
        return [false, root.data];
    }
}

// Create your binary tree structure
const root = new Node(10);
root.left = new Node(5);
root.right = new Node(20);

// Call the solve() function on the root node
const [isValidHeap] = solve(root);

// Check if the tree is a valid max heap
if (isValidHeap) {
    console.log("The binary tree is a valid max heap.");
} else {
    console.log("The binary tree is not a valid max heap.");
}
