function printSubArrayUtil(arr, start, end) {
  // base case
  if (end == arr.length) {
    return;
  }

  // print the current subarray
  let subArr = "";
  for (let i = start; i <= end; i++) {
    subArr += arr[i] + " ";
  }
  console.log(subArr);

  // recursive call to print all subarrays starting from the next index
  printSubArrayUtil(arr, start, end + 1);
}

function printSubArray(arr) {
  for (let start = 0; start < arr.length; start++) {
        let end = start;
    
      printSubArrayUtil(arr, start, end);
    
  }
}

const arr = [1, 2, 3];
printSubArray(arr);

