function findMissing(ar) {
  let l = 0;
  let r = ar.length - 1;
  
  while (l <= r) {
    const mid = Math.floor((l + r) / 2);
    
    if (ar[mid] !== mid + 1 && ar[mid - 1] === mid) {
      return mid + 1;
    }
    
    if (ar[mid] !== mid + 1) {
      r = mid - 1;
    } else {
      l = mid + 1;
    }
  }
  
  return -1;
}

// Driver code
const arr = [1, 2, 3, 4, 5, 7, 8];
console.log(findMissing(arr));
