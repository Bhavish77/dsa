function selectionSort(arr) {
  const n = arr.length;

  for (let i = 0; i < n - 1; i++) {
    let minIndex = i;       //get the min index

    for (let j = i + 1; j < n; j++) {
      if (arr[j] < arr[minIndex]) {     //update minindex
        minIndex = j;
      }
    }

    // Swap elements at i and minIndex
    [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]];       //swap current with minimum element found
  }

  return arr;
}

// Test with the given example
let arr = [5, 4, 3, 2, 1];
arr = selectionSort(arr);
console.log(arr.join(' ')); // Output: 1 2 3 4 5
