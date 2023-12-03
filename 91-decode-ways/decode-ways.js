/**
 * @param {string} s
 * @return {number}
 */
var numDecodings = (s) => {
    const isBaseCase = !s.length || s[0] === '0';
    if (isBaseCase) return 0;

    return decode(s);
}

var decode = (s) => {
    let [ prev, prevPrev ] = [ 1, 1 ];

    for (let curr = 1; curr < s.length; curr++) {
        const temp = prev;

        const isEqual = s[curr] === '0';
        if (isEqual) prev = 0;

        if (isTwoDigit(s, curr)) prev += prevPrev;

        prevPrev = temp;
    }

    return prev;
}

var isTwoDigit = (s, i) => {
    const [ prevChar, curChar ] = [ (s[i - 1]), s[i] ];
    const is10 = prevChar === '1';
    const is20 = (prevChar === '2' && curChar <= '6');

    return is10 || is20;
}



