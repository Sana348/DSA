/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var rotate = (matrix) => {
    reverse(matrix);  /* Time O(ROWS) */
    transpose(matrix);/* Time O(ROWS * COLS) */
};

var reverse = (matrix) => matrix.reverse();

var transpose = (matrix) => {
    const rows = matrix.length;

    for (let row = 0; (row < rows); row++) {/* Time O(ROWS) */
        for (let col = 0; (col < row); col++) {/* Time O(COLS) */
            swap(matrix, row, col);
        }
    }
}

var swap = (matrix, row, col) => [matrix[row][col], matrix[col][row]] = [matrix[col][row], matrix[row][col]];



