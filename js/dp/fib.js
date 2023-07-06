class Solution {
  recSolve(n) {
    // base case
    if (n === 1 || n === 0) {
      return n;
    }
    let ans = this.recSolve(n - 1) + this.recSolve(n - 2);
    return ans;
  }

  topDownSolve(n, dp) {
    // base case
    if (n === 1 || n === 0) {
      return n;
    }
    // check if answer already exists
    if (dp[n] !== -1) {
      return dp[n];
    }
    // replace ans with dp[n]
    dp[n] = this.topDownSolve(n - 1, dp) + this.topDownSolve(n - 2, dp);
    return dp[n];
  }

  bottomUpSolve(n) {
    // create a dp array
    const dp = new Array(n + 1).fill(-1);

    // base cases
    dp[0] = 0;
    if (n === 0) {
      return dp[0];
    }
    dp[1] = 1;

    // top-down approach for n
    for (let i = 2; i <= n; i++) {
      dp[i] = dp[i - 1] + dp[i - 2];
    }

    return dp[n];
  }

  spaceOptSOlve(n) {
    // base cases
    let prev2 = 0;
    let prev1 = 1;

    if (n === 0) {
      return prev2;
    }
    if (n === 1) {
      return prev1;
    }

    let curr;
    // top-down approach for n
    for (let i = 2; i <= n; i++) {
      curr = prev1 + prev2;
      // shifting
      prev2 = prev1;
      prev1 = curr;
    }

    return curr;
  }
