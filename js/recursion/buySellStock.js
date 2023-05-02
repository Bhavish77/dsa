

function buySell(j, arr, i, maxProfit) {
  if (j >= arr.length) {
    return maxProfit;
  }

  let currProfit = arr[j] - arr[i];
  maxProfit = Math.max(currProfit, maxProfit);

  return buySell(j + 1, arr, i, maxProfit);
 
}

const arr = [7, 1, 5, 3, 6, 4];
let maxProfit = Number.MIN_SAFE_INTEGER;
for (let i = 0; i < arr.length; i++) {
  let currProfit = buySell(i + 1, arr, i, Number.MIN_SAFE_INTEGER);
  maxProfit = Math.max(currProfit, maxProfit);
}

console.log(maxProfit);
