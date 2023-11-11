/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = (nums, target, map = new Map()) => {
    for (let index = 0; index < nums.length; index++) {
        const num = nums[index];
        const complement = (target - num);
        const sumIndex = map.get(complement);

        const isTarget = map.has(complement)
        if (isTarget) return [ index, sumIndex ];

        map.set(num, index);                                
    }

    return [ -1, -1 ];
}