/**
 * @param {number[]} nums
 * @return {number}
 */
var lengthOfLIS = (nums) => {
    const subsequence = logarithmicSort(nums);/* Time O(N * log(N) */

    return subsequence.length;
}

var logarithmicSort = (nums, subsequence = []) => {
    for (const num of nums) {/* Time O(N) */
        const max = subsequence[(subsequence.length - 1)];

        const canAdd = (max < num);
        if (canAdd) { subsequence.push(num); continue; }/* Space O(N) */

        const index = binarySearch(num, subsequence);   /* Time O(log(N)) */

        subsequence[index] = num;
    }

    return subsequence;
}

const binarySearch = (num, subsequence) => {
    let [ left, right ] = [ 0, (subsequence.length - 1) ];

    while (left < right) {/* Time O(log(N)) */
        const mid = ((left + right) >> 1);
        const guess = subsequence[mid];

        const isNumTarget = (num === guess);
        if (isNumTarget) return mid;

        const isNumGreater = (guess < num);
        if (isNumGreater) left = (mid + 1);

        const isNumLess = (num < guess);
        if (isNumLess) right = mid;
    }

    return left;
}