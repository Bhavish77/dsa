function findNodeInBST(root, target) {

  // Base case

  if (root === null) {

    return null;

  }

  if (root.data === target) {

    return root;

  }

  if (target > root.data) {

    // Search in the right subtree

    return findNodeInBST(root.right, target);

  } else {

    // Search in the left subtree

    return findNodeInBST(root.left, target);

  }

}

function minVal(root) {

  let temp = root;

  if (temp === null) {

    return -1;

  }

  while (temp.left !== null) {

    temp = temp.left;

  }

  return temp.data;

}

function maxVal(root) {

  let temp = root;

  if (temp === null) {

    return -1;

  }

  while (temp.right !== null) {

    temp = temp.right;

  }

  return temp.data;

}

