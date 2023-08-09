function canPlaceCows(stalls, C, minDistance) {
    let count = 1;
    let prevStall = stalls[0];
    
    for (let i = 1; i < stalls.length; i++) {
        if (stalls[i] - prevStall >= minDistance) {
            count++;                                        // cow placed here
            prevStall = stalls[i];
        }
        if(count === C){
          return true
        }
    }

    return false;
    
    
}

function aggressiveCow(stalls, C) {
    stalls.sort((a, b) => a - b);
    let low = 0;
    let high = stalls[stalls.length - 1] - stalls[0];
    let ans = -1;
    
    while (low <= high) {
        let mid = Math.floor((low + high) / 2);
        
        if (canPlaceCows(stalls, C, mid)) {
          ans = mid;
          low = mid + 1;
        } else {
            high = mid - 1;
        }
    }
    
    return ans;
}


const N = 5;
const C = 3;
const stalls = [1, 2, 8, 4, 9];

const result = aggressiveCow(stalls, C);
console.log("Maximum minimum distance:", result);
