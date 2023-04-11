function solve(target, piece1, piece2, piece3) {
  // base case
  if(target === 0) {
    return 0;
  }
  if(target < 0) {
    return Number.MIN_SAFE_INTEGER;
  }

  // let's solve 1 case
  let ans1 = solve(target - piece1, piece1, piece2, piece3) + 1;
  let ans2 = solve(target - piece2, piece1, piece2, piece3) + 1;
  let ans3 = solve(target - piece3, piece1, piece2, piece3) + 1;
    
  let ans = Math.max(ans1, ans2, ans3);

  return ans;
}

let ans = solve(5, 1, 2, 3);
console.log("Answer is:", ans);
