function solve(arr, i, sum, maxi) {
  // base case
  if (i >= arr.length) {
    // maxi update
    maxi[0] = Math.max(sum, maxi[0]);
    return;
  }

  // include
  solve(arr, i + 2, sum + arr[i], maxi);
  // exclude
  solve(arr, i + 1, sum, maxi);
}

let arr = [1, 2, 3, 1, 3, 5, 8, 1, 9];
let sum = 0;
let maxi = [Number.MIN_SAFE_INTEGER];
let i = 0;
solve(arr, i, sum, maxi);

console.log(maxi[0]);
