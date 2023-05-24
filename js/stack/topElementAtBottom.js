function insertAtBottom(stack, target) {
  if (stack.length === 0) {
    stack.push(target);
    return;
  }

  var topElement = stack.pop();
  insertAtBottom(stack, target);
  stack.push(topElement);
}

var s = [];
s.push(10);
s.push(20);
s.push(30);
s.push(40);
s.push(50);
s.push(60);

if (s.length === 0) {
  console.log("Stack is empty, cannot insert at bottom");
}

var target = s.pop();
insertAtBottom(s, target);

console.log("Printing");
while (s.length > 0) {
  console.log(s[s.length - 1]);
  s.pop();
}
