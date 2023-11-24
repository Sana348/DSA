/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
    let [ runningSum, maxSum ] = [ nums[0], nums[0] ]
    
    for (let i = 1; i < nums.length; i++) {
        const num = nums[i]
        const sum = runningSum + num
        
        runningSum = Math.max(num, sum)
        maxSum = Math.max(maxSum, runningSum)
    }
    
    return maxSum
};