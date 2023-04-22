function generateParenthesis(n) {
  const ans = [];
  let usedOpen = 0;
  let usedClose = 0;
  let remOpen = n;
  let remClose = n;
  let output = "";

  function solve(usedOpen, usedClose, remOpen, remClose, output) {
    // base case
    if (remOpen === 0 && remClose === 0) {
      ans.push(output);
      return;
    }

    // include open bracket
    if (remOpen > 0) {
      solve(usedOpen + 1, usedClose, remOpen - 1, remClose, output + "(");
    }

    // include close bracket
    if (usedOpen > usedClose && remClose > 0) {
      solve(usedOpen, usedClose + 1, remOpen, remClose - 1, output + ")");
    }
  }

  solve(usedOpen, usedClose, remOpen, remClose, output);
  return ans;
}
