class Solution {
  numRollsToTarget(n, k, target) {
    const MOD = 1000000007;

    function solveUsingRecursion(n, k, target) {
      if (n < 0) return 0;
      if (n === 0 && target === 0) return 1;
      if (n === 0 && target !== 0) return 0;
      if (n !== 0 && target === 0) return 0;

      let ans = 0;
      for (let i = 1; i <= k; i++) {
        ans += solveUsingRecursion(n - 1, k, target - i);
      }
      return ans;
    }

    function solveUsingMem(n, k, target, dp) {
      if (n < 0) return 0;
      if (n === 0 && target === 0) return 1;
      if (n === 0 && target !== 0) return 0;
      if (n !== 0 && target === 0) return 0;

      if (dp[n][target] !== -1) return dp[n][target];

      let ans = 0;
      for (let i = 1; i <= k; i++) {
        let recAns = 0;
        if (target - i >= 0)
          recAns = solveUsingMem(n - 1, k, target - i, dp);
        ans = (ans % MOD + recAns % MOD) % MOD;
      }
      dp[n][target] = ans;
      return dp[n][target];
    }

    function solveUsingTabulation(n, k, target) {
      let dp = new Array(n + 1).fill(0).map(() => new Array(target + 1).fill(0));
      dp[0][0] = 1;

      for (let index = 1; index <= n; index++) {
        for (let t = 1; t <= target; t++) {
          let ans = 0;
          for (let i = 1; i <= k; i++) {
            let recAns = 0;
            if (t - i >= 0) recAns = dp[index - 1][t - i];
            ans = (ans % MOD + recAns % MOD) % MOD;
          }
          dp[index][t] = ans;
        }
      }

      return dp[n][target];
    }

    function solveUsingTabulationSO(n, k, target) {
      let prev = new Array(target + 1).fill(0);
      let curr = new Array(target + 1).fill(0);

      prev[0] = 1;

      for (let index = 1; index <= n; index++) {
        for (let t = 1; t <= target; t++) {
          let ans = 0;
          for (let i = 1; i <= k; i++) {
            let recAns = 0;
            if (t - i >= 0) recAns = prev[t - i];
            ans = (ans % MOD + recAns % MOD) % MOD;
          }
          curr[t] = ans;
        }
        prev = [...curr];
      }

      return prev[target];
    }

    return solveUsingTabulationSO(n, k, target);
  }
}
