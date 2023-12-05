/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function (s) {
  const isAlphaNumeric = c => (c.toLowerCase() >= 'a' && c.toLowerCase() <= 'z') || c >= '0' && c <= '9'

  let left = 0;
  let right = s.length - 1;
  let skipLeft, skipRight, endsEqual = false;
  
  while (left < right) {
    skipLeft = !isAlphaNumeric(s.charAt(left))
    if (skipLeft) { left++; continue; }

    skipRight = !isAlphaNumeric(s.charAt(right))
    if (skipRight) { right--; continue; }

    endsEqual = s.charAt(left).toLowerCase() === s.charAt(right).toLowerCase()
    if (!endsEqual) return false

    left++
    right--
  }
  return true
};



