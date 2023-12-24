/**
 * @param {string} s
 * @return {number}
 */
var countSubstrings = (s, count = 0) => {
    for (let i = 0; (i < s.length); i++) {/* Time O(N) */
        const [ odd, even ] = [ i, (i + 1) ];
        /* odd-length: single character center */
        count += isPalindromeFromCenter(s, i, odd); /* Time O(N) */
        /* even-length: consecutive characters center */
        count += isPalindromeFromCenter(s, i, even);/* Time O(N) */
    }

    return count;
}

const isPalindromeFromCenter = (s, left, right, count = 0) => {
    const isInBounds = () => ((0 <= left) && (right < s.length));
    while (isInBounds()) {/* Time O(N) */
        const isEqual = (s[left] === s[right]);
        if (!isEqual) break;

        count++;

        left--; right++;
    }

    return count;
}



