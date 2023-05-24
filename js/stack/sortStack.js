function insertSorted(s, target) {
  if (s.length === 0 || s[s.length - 1] >= target) {
    s.push(target);
    return;
  }

  let topElement = s.pop();
  insertSorted(s, target);
  s.push(topElement);
}

function sortStack(s) {
  if (s.length === 0) {
    return;
  }

  let topElement = s.pop();
  sortStack(s);
  insertSorted(s, topElement);
}

let s = [];
s.push(7);
s.push(11);
s.push(3);
s.push(5);
s.push(9);

sortStack(s);

console.log("Printing");
while (s.length > 0) {
  console.log(s[s.length - 1]);
  s.pop();
}
