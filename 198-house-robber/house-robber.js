/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = (nums) => {
    if (!nums.length) return 0;

    let [ left, mid ] = [ 0, 0 ];

    for (const right of nums) {/* Time O(N) */
        const temp = mid;
        const house = left + right;

        mid = Math.max(mid, house);
        left = temp;
    }

    return mid;
};