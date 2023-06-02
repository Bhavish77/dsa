class Solution {
  maxSlidingWindow(nums, k) {
    let dq = [];
    let ans = [];

    // First window of size k
    for (let i = 0; i < k; i++) {
      // Remove smaller elements
      while (dq.length > 0 && nums[i] >= nums[dq[dq.length - 1]]) {
        dq.pop();
      }
      dq.push(i);
    }

    // Store answer for the first window
    ans.push(nums[dq[0]]);

    // Process remaining windows
    for (let i = k; i < nums.length; i++) {
      // Remove elements out of the window
      if (dq.length > 0 && i - dq[0] >= k) {
        dq.shift();
      }

      // Remove smaller elements for current element
      while (dq.length > 0 && nums[i] >= nums[dq[dq.length - 1]]) {
        dq.pop();
      }
      dq.push(i);

      // Store answer for current window
      ans.push(nums[dq[0]]);
    }

    return ans;
  }
}



let nums = [1, 3, -1, -3, 5, 3, 6, 7];
let k = 3;

let solution = new Solution();
console.log(solution.maxSlidingWindow(nums, k));
