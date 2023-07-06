function solveUsingRecursion(weight, value, index, capacity) {
  if (index === 0) {
    if (weight[0] <= capacity) {
      return value[0];
    } else {
      return 0;
    }
  }

  let include = 0;
  if (weight[index] <= capacity) {
    include = value[index] + solveUsingRecursion(weight, value, index - 1, capacity - weight[index]);
  }

  let exclude = 0 + solveUsingRecursion(weight, value, index - 1, capacity);

  return Math.max(include, exclude);
}

function solveUsingMem(weight, value, index, capacity, dp) {
  if (index === 0) {
    if (weight[0] <= capacity) {
      return value[0];
    } else {
      return 0;
    }
  }

  if (dp[index][capacity] !== -1) {
    return dp[index][capacity];
  }

  let include = 0;
  if (weight[index] <= capacity) {
    include = value[index] + solveUsingMem(weight, value, index - 1, capacity - weight[index], dp);
  }

  let exclude = 0 + solveUsingMem(weight, value, index - 1, capacity, dp);

  dp[index][capacity] = Math.max(include, exclude);
  return dp[index][capacity];
}

function solveUsingTabulation(weight, value, n, capacity) {
  const dp = new Array(n).fill(0).map(() => new Array(capacity + 1).fill(0));

  for (let w = weight[0]; w <= capacity; w++) {
    dp[0][w] = weight[0] <= capacity ? value[0] : 0;
  }

  for (let index = 1; index < n; index++) {
    for (let wt = 0; wt <= capacity; wt++) {
      let include = 0;
      if (weight[index] <= wt) {
        include = value[index] + dp[index - 1][wt - weight[index]];
      }

      let exclude = 0 + dp[index - 1][wt];

      dp[index][wt] = Math.max(include, exclude);
    }
  }

  return dp[n - 1][capacity];
}

function solveUsingSO(weight, value, n, capacity) {
  let prev = new Array(capacity + 1).fill(0);
  let curr = new Array(capacity + 1).fill(0);

  for (let w = weight[0]; w <= capacity; w++) {
    prev[w] = weight[0] <= capacity ? value[0] : 0;
  }

  for (let index = 1; index < n; index++) {
    for (let wt = 0; wt <= capacity; wt++) {
      let include = 0;
      if (weight[index] <= wt) {
        include = value[index] + prev[wt - weight[index]];
      }

      let exclude = 0 + prev[wt];

      curr[wt] = Math.max(include, exclude);
    }

    prev = [...curr];
  }

  return prev[capacity];
}

function solveUsingSO2(weight, value, n, capacity) {
  let curr = new Array(capacity + 1).fill(0);

  for (let w = weight[0]; w <= capacity; w++) {
    curr[w] = weight[0] <= capacity ? value[0] : 0;
  }

  for (let index = 1; index < n; index++) {
    for (let wt = capacity; wt >= 0; wt--) {
      let include = 0;
      if (weight[index] <= wt) {
        include = value[index] + curr[wt - weight[index]];
      }

      let exclude = 0 + curr[wt];

      curr[wt] = Math.max(include, exclude);
    }
  }

  return curr[capacity];
}

const weight = [4, 5, 1];
const value = [1, 2, 3];
const n = 3;
const capacity = 4;

// const ans = solveUsingRecursion(weight, value, n - 1, capacity);

// const dp = new Array(n).fill(0).map(() => new Array(capacity + 1).fill(-1));
// const ans = solveUsingMem(weight, value, n - 1, capacity, dp);

// const ans = solveUsingTabulation(weight, value, n, capacity);

const ans = solveUsingSO2(weight, value, n, capacity);
console.log("Ans:", ans);
