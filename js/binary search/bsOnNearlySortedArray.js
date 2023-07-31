function binarySearch(arr, target) {
  let s = 0;
  let e = arr.length - 1;

  let mid = Math.floor((s + e) / 2);

  while (s <= e) {
    if (arr[mid] === target) {                  //nearly sorted ie element will be at ith or i+1 or i-1 position
      return mid;
    }

    if (mid - 1 >= s && arr[mid - 1] === target) {         //mid-1>=s to make sure we dont go at negative invalid index
      return mid - 1;
    }

    if (mid + 1 <= e && arr[mid + 1] === target) {          //mid+1<=eto make sure we dont go out of range of array
      return mid + 1;
    }

    if (target > arr[mid]) {
      // right search
      s = mid + 2;         // + 2 cuz we already checked at mid+1
    } else {
      // left search
      e = mid - 2;          // - 2 cuz we already checked at mid-1
    }

    mid = Math.floor((s + e) / 2);
  }
  return -1;
}

const arr = [10, 3, 40, 20, 50, 80, 70];
const target = 70;

const ans = binarySearch(arr, target);
console.log(`index of ${target} is ${ans}`);
