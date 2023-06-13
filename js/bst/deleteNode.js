function deleteNodeInBST(root, target) {

  // Base case

  if (root === null) {

    return null;

  }

  if (root.data === target) {

    // Deleting the current node

    // 4 cases

    if (root.left === null && root.right === null) {

      // Leaf node

      return null;

    } else if (root.left === null && root.right !== null) {

      const child = root.right;

      return child;

    } else if (root.left !== null && root.right === null) {

      const child = root.left;

      return child;

    } else {

      // Both children are present

      // Find the inorder predecessor in the left subtree

      const inorderPre = maxVal(root.left);

      // Replace root.data value with inorder predecessor

      root.data = inorderPre;

      // Delete inorder predecessor from the left subtree

      root.left = deleteNodeInBST(root.left, inorderPre);

      return root;

    }

  } else if (target > root.data) {

    // Go to the right subtree

    root.right = deleteNodeInBST(root.right, target);

  } else if (target < root.data) {

    // Go to the left subtree

    root.left = deleteNodeInBST(root.left, target);

  }

  return root;

}

