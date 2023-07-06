function solveUsingRecursion(n, k) {
  if (n === 1) {
    return k;
  }
  if (n === 2) {
    return k + k * (k - 1);
  }

  let ans = (solveUsingRecursion(n - 2, k) + solveUsingRecursion(n - 1, k)) * (k - 1);
  return ans;
}

function solveUsingMem(n, k, dp) {
  if (n === 1) {
    return k;
  }
  if (n === 2) {
    return k + k * (k - 1);
  }

  if (dp[n] !== -1) {
    return dp[n];
  }

  dp[n] = (solveUsingMem(n - 2, k, dp) + solveUsingMem(n - 1, k, dp)) * (k - 1);
  return dp[n];
}

function solveUsingTab(n, k) {
  const dp = new Array(n + 1).fill(0);
  dp[1] = k;
  dp[2] = k + k * (k - 1);

  for (let i = 3; i <= n; i++) {
    dp[i] = (dp[i - 2] + dp[i - 1]) * (k - 1);
  }
  return dp[n];
}

function solveSO(n, k) {
  let prev2 = k;
  let prev1 = k + k * (k - 1);

  for (let i = 3; i <= n; i++) {
    let curr = (prev2 + prev1) * (k - 1);

    // shift
    prev2 = prev1;
    prev1 = curr;
  }
  return prev1;
}

const n = 4;
const k = 3;

// const ans = solveUsingRecursion(n, k);

// const dp = new Array(n + 1).fill(-1);
// const ans = solveUsingMem(n, k, dp);

const ans = solveSO(n, k);
console.log("ans:", ans);
