/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var setZeroes = (matrix) => {
    const isColZero = setEdgesToZero(matrix);/* Time O(ROWS * COLS) */

    setCellsToZero(matrix);                  /* Time O(ROWS * COLS) */

    const isZero = (matrix[0][0] === 0);
    if (isZero) setFirstRowZero(matrix);     /* Time O(COLS) */

    if (isColZero) setFirstColZero(matrix);  /* Time O(ROWS) */
}

var setCellsToZero = (matrix) => {
    const [ rows, cols ] = [ matrix.length, matrix[0].length ];

    for (let row = 1; (row < rows); row++) {/* Time O(ROWS) */
        for (let col = 1; (col < cols); col++) {/* Time O(COLS) */
            const isZero = ((matrix[row][0] === 0) || (matrix[0][col] == 0));
            if (!isZero) continue;

            matrix[row][col] = 0;
        }
    }
}

var setEdgesToZero = (matrix, isColZero = false) => {
    const [ rows, cols ] = [ matrix.length, matrix[0].length ];

    for (let row = 0; (row < rows); row++) {/* Time O(ROWS) */
        if (matrix[row][0] === 0) isColZero = true;

        for (let col = 1; (col < cols); col++) {/* Time O(COLS) */
            const canSet = (matrix[row][col] === 0);
            if (!canSet) continue;
            
            matrix[0][col] = 0;
            matrix[row][0] = 0;
        }
    }

    return isColZero;
}

var setFirstRowZero = (matrix, cols =  matrix[0].length) => {
    for (let col = 0; (col < cols); col++) {/* Time O(COLS) */
        matrix[0][col] = 0;
    }
}

var setFirstColZero = (matrix, rows = matrix.length) => {
    for (let row = 0; (row < rows); row++) {/* Time O(ROWS) */
        matrix[row][0] = 0;
    }
}



