function printMiddle(s, totalSize) {
  if (s.length === 0) {
    console.log("There is no element in stack");
    return;
  }
  // base case
  if (s.length === Math.floor(totalSize / 2) + 1) {
    console.log("Middle element is: " + s[s.length - 1]);
    return;
  }

  const temp = s.pop();

  // recursive call
  printMiddle(s, totalSize);

  // backtrack
  s.push(temp);
}

const s = [];

s.push(10);
s.push(20);
s.push(30);
s.push(40);
s.push(50);
s.push(60);
s.push(70);

const totalSize = s.length;
printMiddle(s, totalSize);
