/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function(nums) {
    
};var longestConsecutive = (nums, maxScore = 0) => {
    const numSet = new Set(nums);         /* Time O(N) | Space O(N) */

    for (const num of [ ...numSet ]) {    /* Time O(N) */
        const prevNum = num - 1;

        if (numSet.has(prevNum)) continue;/* Time O(N) */

        let [ currNum, score ] = [ num, 1 ];

        const isStreak = () => numSet.has(currNum + 1)
        while (isStreak()) {              /* Time O(N) */
            currNum++;
            score++;
        }

        maxScore = Math.max(maxScore, score);
    }

    return maxScore;
}



