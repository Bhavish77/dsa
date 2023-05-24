function insertAtBottom(s, target) {
  if (s.length === 0) {
    s.push(target);
    return;
  }

  let topElement = s.pop();
  insertAtBottom(s, target);
  s.push(topElement);
}

function reverseStack(s) {
  if (s.length === 0) {
    return;
  }

  let target = s.pop();
  reverseStack(s);
  insertAtBottom(s, target);
}

let s = [];
s.push(10);
s.push(20);
s.push(30);
s.push(40);
s.push(50);

reverseStack(s);

console.log("Printing");
while (s.length > 0) {
  console.log(s[s.length - 1]);
  s.pop();
}
