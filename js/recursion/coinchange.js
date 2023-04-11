function solve(arr, target) {
  //base case
  if(target === 0) {
    return 0;
  }
  if(target < 0) {
    return Number.MAX_SAFE_INTEGER;
  }

  //let's solve 1 case
  let mini = Number.MAX_SAFE_INTEGER;
  for(let i = 0; i < arr.length; i++) {
    let ans = solve(arr, target - arr[i]);
    if(ans !== Number.MAX_SAFE_INTEGER) {
      mini = Math.min(mini, ans + 1);
    }
  }

  return mini;
}

let arr = [1, 2];
let target = 5;

let ans = solve(arr, target);
console.log("Answer is:", ans);
