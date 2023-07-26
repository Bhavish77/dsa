function binarySearch(arr, target) {
  let s = 0;
  let e = arr.length - 1;
  let mid = Math.floor((s + e) / 2);

  while (s <= e) {
    const element = arr[mid];
    if (element === target) {
      return mid;
    }
    if (element > target) {
      e = mid - 1;
    } else {
      s = mid + 1;
    }
    mid = Math.floor((s + e) / 2);
  }

  return -1;
}

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const target = 9;

const ans = binarySearch(arr, target);

if (ans !== -1) {
  console.log("found");
} else {
  console.log("Not found");
}
