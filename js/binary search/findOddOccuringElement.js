function solve(arr) {
  let s = 0;
  let e = arr.length - 1;
  let mid = Math.floor((s + e) / 2);

  while (s <= e) {
    if (s === e) {
      // Single element
      return s;
    }

    // 2 cases -> mid - even or mid - odd
    if (mid % 2 === 0) {
      if (arr[mid] === arr[mid + 1]) {
        s = mid + 2;
      } else {
        e = mid;
      }
    } else {
      if (arr[mid] === arr[mid - 1]) {
        s = mid + 1;
      } else {
        e = mid - 1;
      }
    }
    mid = Math.floor((s + e) / 2);
  }
  return -1;
}

function main() {
  const arr = [1, 1, 2, 2, 1];
  const ans = solve(arr);
  console.log("index is", ans);
  console.log("value is", arr[ans]);
}

main();
