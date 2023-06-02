class Solution {
  canCompleteCircuit(gas, cost) {
    let deficit = 0;
    let balance = 0;
    let start = 0;

    for (let i = 0; i < gas.length; i++) {
      balance += gas[i] - cost[i];
      if (balance < 0) {
        deficit += Math.abs(balance);
        start = i + 1;
        balance = 0;
      }
    }

    if (balance >= deficit) {
      return start;
    } else {
      return -1;
    }
  }
}
