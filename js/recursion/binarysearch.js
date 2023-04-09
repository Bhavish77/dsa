function binarySearch(arr, n , i, target) {
  console.log(`Searching in arr[${i}...${n-1}] for ${target}`);
  let start = i;
  let end = n-1;
  
  // base case
  if (start > end) {
    console.log("Target not found");
    return false;
  }

  // processing
  let mid = Math.floor((start + end) / 2);
  console.log(`mid = ${mid}`);

  if (target === arr[mid]) {
    console.log(`Target found at index ${mid}`);
    return mid;
  }

  // recursive relation
  if (target > arr[mid]) {
    console.log(`Target is greater than arr[${mid}], searching in arr[${mid+1}...${end}]`);
    return binarySearch(arr, n, mid+1, target);
  } else {
    console.log(`Target is less than arr[${mid}], searching in arr[${start}...${mid-1}]`);
    return binarySearch(arr, mid-1, i, target);
  }
}




const arr = [1, 2, 3, 4, 5];
const target = 3;
const result = binarySearch(arr, arr.length, 0, target);
console.log(result);
