function solve(str) {
  let freq = new Array(26).fill(0);
  let queue = [];

  let ans = "";

  for (let i = 0; i < str.length; i++) {
    let ch = str[i];

    // Increment frequency
    freq[ch.charCodeAt(0) - 'a'.charCodeAt(0)]++;
    // Push to queue
    queue.push(ch);

    while (queue.length > 0) {
      if (freq[queue[0].charCodeAt(0) - 'a'.charCodeAt(0)] > 1) {
        queue.shift();
      } else {
        ans += queue[0];
        break;
      }
    }

    if (queue.length === 0) {
      ans += '#';
    }
  }
  // console.log("Final Ans: " + ans);
  return ans;
}

let str = "zarcaazrd";
console.log("Final ans is: " + solve(str));
