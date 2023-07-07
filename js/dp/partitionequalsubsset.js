function solveUsingRecursion(index, nums, target) {
  if (index >= nums.length)
    return false;

  if (target < 0)
    return false;

  if (target === 0)
    return true;

  let include = solveUsingRecursion(index + 1, nums, target - nums[index]);
  let exclude = solveUsingRecursion(index + 1, nums, target);

  return include || exclude;
}

function solveUsingMem(index, nums, target, dp) {
  if (index >= nums.length)
    return false;

  if (target < 0)
    return false;

  if (target === 0)
    return true;

  if (dp[index][target] !== -1)
    return dp[index][target];

  let include = solveUsingMem(index + 1, nums, target - nums[index], dp);
  let exclude = solveUsingMem(index + 1, nums, target, dp);

  dp[index][target] = include || exclude;
  return dp[index][target];
}

function solveUsingTabulation(nums, target, dp) {
  let n = nums.length;

  for (let i = 0; i < nums.length; i++) {
    dp[i][0] = true;
  }

  for (let index = n - 1; index >= 0; index--) {
    for (let t = 1; t <= target; t++) {
      let include = false;
      if (t - nums[index] >= 0)
        include = dp[index + 1][t - nums[index]];

      let exclude = dp[index + 1][t];

      dp[index][t] = include || exclude;
    }
  }

  return dp[0][target];
}

function solveUsingTabulationSO(nums, target) {
  let n = nums.length;

  let curr = new Array(target + 1).fill(false);
  let next = new Array(target + 1).fill(false);

  curr[0] = true;
  next[0] = true;

  for (let index = n - 1; index >= 0; index--) {
    for (let t = 1; t <= target; t++) {
      let include = false;
      if (t - nums[index] >= 0)
        include = next[t - nums[index]];

      let exclude = next[t];

      curr[t] = include || exclude;
    }
    next = [...curr];
  }

  return next[target];
}

function canPartition(nums) {
  let sum = 0;
  for (let i = 0; i < nums.length; i++) {
    sum += nums[i];
  }

  if (sum % 2 !== 0)
    return false;

  let target = sum / 2;
  let index = 0;

  let dp = new Array(nums.length + 1);
  for (let i = 0; i < dp.length; i++) {
    dp[i] = new Array(target + 1).fill(false);
  }

  for (let i = 0; i < nums.length; i++) {
    dp[i][0] = true;
  }

  let ans = solveUsingTabulation(nums, target, dp);

  for (let i = 0; i < nums.length + 1; i++) {
    for (let j = 0; j < target + 1; j++) {
      console.log(dp[i][j] + " ");
    }
    console.log();
  }

  return ans;
}

const nums = [1, 5, 11, 5];
const result = canPartition(nums);
console.log(result);
