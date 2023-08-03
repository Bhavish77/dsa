/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findPairs = function(nums, k) {
    nums.sort((a, b) => a - b);
    let i = 0;
    let j = 1;
    const mySet = new Set();
    
    while(j < nums.length){
        
        let diff = Math.abs(nums[j] - nums[i]);

        if(diff === k){
            const pair = [nums[i], nums[j]];
           mySet.add(pair.toString());  //converted to string so only unique pair can be added // since array are pass by reference each array is considered different even if array content is same
            i++;
            j++;
        }else if(diff > k){

            i++;
    
        }else {
            j++;
        }


            if(i === j) {
                j++;
               
            }

      

    }
    return mySet.size;

};
