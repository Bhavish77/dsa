function printSubsequences(str, n, output, i, v) {
  // base case
  if (i === n) {
    v.push(output);
    return;
  }

  // include
  printSubsequences(str, n, output + str[i], i + 1, v);

  // exclude
  printSubsequences(str, n, output, i + 1, v);
}

const str = "abcd";
const output = "";
const v = [];
const n = str.length;
let i = 0;
printSubsequences(str, n, output, i, v);

console.log("Printing all subsequences");
v.forEach((val) => console.log(val));
console.log(`Size of vector is: ${v.length}`);
