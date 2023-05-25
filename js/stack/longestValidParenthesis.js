/**
 * @param {string} s
 * @return {number}
 */
var longestValidParentheses = function(s) {
    const stack = [-1];
  let maxLen = 0;

  for (let i = 0; i < s.length; i++) {
    const ch = s[i];
    if (ch === '(') {
      stack.push(i);
    } else {
      stack.pop();
      if (stack.length === 0) {
        stack.push(i);
      } else {
        const len = i - stack[stack.length - 1];
        maxLen = Math.max(len, maxLen);
      }
    }
  }

  return maxLen;
};
