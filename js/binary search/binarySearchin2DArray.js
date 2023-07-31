function binarySearch(arr, rows, cols, target) {
  let s = 0;
  let e = rows * cols - 1;
  let mid = Math.floor((s + e) / 2);

  while (s <= e) {
    let rowIndex = Math.floor(mid / cols);
    let colIndex = mid % cols;

    if (arr[rowIndex][colIndex] === target) {
      console.log(`Found at ${rowIndex} ${colIndex}`);
      return true;
    }

    if (arr[rowIndex][colIndex] < target) {
      s = mid + 1;
    } else {
      e = mid - 1;
    }
    mid = Math.floor((s + e) / 2);
  }
  return false;
}

const arr = [
  [1, 2, 3, 4],
  [5, 6, 7, 8],
  [9, 10, 11, 12],
  [13, 14, 15, 16],
  [17, 18, 19, 20]
];
const rows = 5;
const cols = 4;

const target = 9;

const ans = binarySearch(arr, rows, cols, target);

if (ans) {
  console.log("Found");
} else {
  console.log("Not Found");
}
