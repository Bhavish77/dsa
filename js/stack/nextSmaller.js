function nextSmaller(input) {
  const s = [-1];
  const ans = new Array(input.length);

  for (let i = input.length - 1; i >= 0; i--) {
    const curr = input[i];

    while (s[s.length - 1] >= curr) {
      s.pop();
    }

    ans[i] = s[s.length - 1];
    s.push(curr);
  }

  return ans;
}

const input = [4, 2, 5, 3, 1];
const result = nextSmaller(input);
console.log(result);
