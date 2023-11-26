/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = (nums, right = nums.length - 1) => {
    for (let i = right; 0 <= i; i--) {
        const isJumpable = right <= (i + nums[i])
        if (isJumpable) right = i;
    }

    return right === 0;
}