function prevSmallerElement(input) {
  const s = [-1];
  const ans = new Array(input.length);

  // left to right -> prev smaller
  for (let i = 0; i < input.length; i++) {
    const curr = input[i];

    while (s[s.length - 1] >= curr) {
      s.pop();
    }

    ans[i] = s[s.length - 1];
    s.push(curr);
  }

  return ans;
}
