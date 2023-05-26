function prevSmallerElement(input) {
  const s = [-1];
  const ans = new Array(input.length);

  // left to right -> prev smaller
  for (let i = 0; i < input.length; i++) {
    let curr = input[i];

    while (s[s.length - 1] !== -1 && input[s[s.length - 1]] >= curr) {
      s.pop();
    }

    ans[i] = s[s.length - 1];
    s.push(i);
  }

  return ans;
}

function nextSmaller(input) {
  const s = [-1];
  const ans = new Array(input.length);

  // right to left -> next smaller
  for (let i = input.length - 1; i >= 0; i--) {
    let curr = input[i];

    while (s[s.length - 1] !== -1 && input[s[s.length - 1]] >= curr) {
      s.pop();
    }

    ans[i] = s[s.length - 1];
    s.push(i);
  }

  return ans;
}

function getRectangularAreaHistogram(height) {
  // step1: prevSmaller output
  const prev = prevSmallerElement(height);

  // step2: nextSmaller call
  const next = nextSmaller(height);

  let maxArea = -Infinity;
  const size = height.length;

  for (let i = 0; i < height.length; i++) {
    let length = height[i];

    if (next[i] === -1) {
      next[i] = size;
    }

    let width = next[i] - prev[i] - 1;
    let area = length * width;
    maxArea = Math.max(maxArea, area);
  }

  return maxArea;
}

const v = [2, 1, 5, 6, 2, 3];
console.log("Ans is:", getRectangularAreaHistogram(v));
