class Solution {
  solveUsingRecursion(nums, n) {
    if (n < 0) {
      return 0;
    }
    if (n === 0) {
      return nums[0];
    }

    // include
    let include = this.solveUsingRecursion(nums, n - 2) + nums[n];
    let exclude = this.solveUsingRecursion(nums, n - 1) + 0;

    return Math.max(include, exclude);
  }

  solveUsingMem(nums, n, dp) {
    if (n < 0) {
      return 0;
    }
    if (n === 0) {
      return nums[0];
    }

    if (dp[n] !== -1) {
      return dp[n];
    }

    // include
    let include = this.solveUsingMem(nums, n - 2, dp) + nums[n];
    let exclude = this.solveUsingMem(nums, n - 1, dp) + 0;

    dp[n] = Math.max(include, exclude);
    return dp[n];
  }

  solveUsingTabulation(nums, n) {
    const dp = new Array(n + 1).fill(0);
    dp[0] = nums[0];

    for (let i = 1; i <= n; i++) {
      let temp = 0;
      if (i - 2 >= 0) {
        temp = dp[i - 2];
      }

      let include = temp + nums[i];
      let exclude = dp[i - 1] + 0;

      dp[i] = Math.max(include, exclude);
    }

    return dp[n];
  }

  spaceOptimisedSolution(nums, n) {
    let prev2 = 0;
    let prev1 = nums[0];
    let curr = 0;

    for (let i = 1; i <= n; i++) {
      let temp = 0;
      if (i - 2 >= 0) {
        temp = prev2;
      }

      let include = temp + nums[i];
      let exclude = prev1 + 0;

      curr = Math.max(include, exclude);
      prev2 = prev1;
      prev1 = curr;
    }

    return prev1;
  }

  rob(nums) {
    const n = nums.length - 1;

    // Uncomment the desired approach and comment out the others

    // Recursive approach
    // return this.solveUsingRecursion(nums, n);

    // Memoization approach
    // const dp = new Array(n + 1).fill(-1);
    // return this.solveUsingMem(nums, n, dp);

    // Tabulation approach
    // return this.solveUsingTabulation(nums, n);

    // Space-optimized approach
    return this.spaceOptimisedSolution(nums, n);
  }
}
