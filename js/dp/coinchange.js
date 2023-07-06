class Solution {
  solveUsingRecursion(coins, amount) {
    // base case
    if (amount === 0) {
      return 0;
    }
    if (amount < 0) {
      return Infinity;
    }

    let mini = Infinity;
    for (let i = 0; i < coins.length; i++) {
      let ans = this.solveUsingRecursion(coins, amount - coins[i]);
      if (ans !== Infinity) {
        mini = Math.min(mini, 1 + ans);
      }
    }
    return mini;
  }

  solveMem(coins, amount, dp) {
    // base case
    if (amount === 0) {
      return 0;
    }
    if (amount < 0) {
      return Infinity;
    }
    // ans already exists
    if (dp[amount] !== -1) {
      return dp[amount];
    }

    let mini = Infinity;
    for (let i = 0; i < coins.length; i++) {
      let ans = this.solveMem(coins, amount - coins[i], dp);
      if (ans !== Infinity) {
        mini = Math.min(mini, 1 + ans);
      }
    }
    dp[amount] = mini;
    return dp[amount];
  }

  solveTab(coins, amount) {
    // step1: create dp array
    const dp = new Array(amount + 1).fill(Infinity);
    // step2: base case
    dp[0] = 0;
    // step3: check the range and flow of top-down approach and code accordingly
    for (let target = 1; target <= amount; target++) {
      let mini = Infinity;
      for (let i = 0; i < coins.length; i++) {
        if (target - coins[i] >= 0) {
          let ans = dp[target - coins[i]];
          if (ans !== Infinity) {
            mini = Math.min(mini, 1 + ans);
          }
        }
      }
      dp[target] = mini;
    }
    return dp[amount];
  }

  coinChange(coins, amount) {
    // Uncomment the desired approach and comment out the others

    // Recursive approach
    // let ans = this.solveUsingRecursion(coins, amount);
    // if (ans === Infinity) {
    //   return -1;
    // } else {
    //   return ans;
    // }

    // Memoization approach
    // let dp = new Array(amount + 1).fill(-1);
    // let ans = this.solveMem(coins, amount, dp);
    // if (ans === Infinity) {
    //   return -1;
    // } else {
    //   return ans;
    // }

    // Tabulation approach
    let ans = this.solveTab(coins, amount);
    if (ans === Infinity) {
      return -1;
    } else {
      return ans;
    }
  }
}
