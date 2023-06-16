function storeInorder(root, inorder) {
    // Step 1: Build Inorder traversal of the BST
    if (root === null)
        return;
    storeInorder(root.left, inorder);
    inorder.push(root.val);
    storeInorder(root.right, inorder);
}

var findTarget = function(root, k) {
    // Step 2: Check if there exists a pair with the given sum
    const inorder = [];
    storeInorder(root, inorder);

    let start = 0; // Pointer to the start of the traversal
    let end = inorder.length - 1; // Pointer to the end of the traversal

    // Step 3: Compare the sum of the current pointers with the target
    while (start < end) {
        const sum = inorder[start] + inorder[end];

        // Step 4: If the sum equals the target, return true
        if (sum === k)
            return true;

        // Step 5: If the sum is greater than the target, move the end pointer to the left
        if (sum > k)
            end--;
        // Step 6: If the sum is less than the target, move the start pointer to the right
        else
            start++;
    }

    // Step 8: If no pair is found, return false
    return false;
}
