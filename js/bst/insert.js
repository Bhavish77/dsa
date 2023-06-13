class Node {
    constructor(data) {
        this.data = data;
        this.left = null;
        this.right = null;
    }
}

function insertIntoBST(root, data) {
    if (root === null) {
        // This is the first node we have to create
        root = new Node(data);
        return root;
    }

    // Not the first node

    if (root.data > data) {
        // Insert on the left
        root.left = insertIntoBST(root.left, data);
    } else {
        // Insert on the right
        root.right = insertIntoBST(root.right, data);
    }

    return root;
}

function takeInput() {
    const input = [5, 3, 7, 1, 4]; // Modify this array with your input data

    let root = null;
    for (let i = 0; i < input.length; i++) {
        root = insertIntoBST(root, input[i]);
    }

    console.log(root); // Print the resulting BST
}

takeInput();
