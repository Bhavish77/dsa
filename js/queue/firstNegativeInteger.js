function solve(arr, n, k) {
  let q = [];

  // process first window of size k
  for (let i = 0; i < k; i++) {
    if (arr[i] < 0) {
      q.push(i);
    }
  }

  // remaining windows
  for (let i = k; i < n; i++) {
    // answer for the previous window
    if (q.length === 0) {
      console.log(0 + " ");
    } else {
      console.log(arr[q[0]] + " ");
    }

    // remove out of window elements
    while (q.length > 0 && i - q[0] >= k) {
      q.shift();
    }

    // check current element for insertion
    if (arr[i] < 0) {
      q.push(i);
    }
  }

  // answer for the last window
  if (q.length === 0) {
    console.log(0 + " ");
  } else {
    console.log(arr[q[0]] + " ");
  }
}

// Test
let arr = [12, -1, -7, 8, -15, 30, 16, 28];
let size = 8;
let k = 3;

solve(arr, size, k);
