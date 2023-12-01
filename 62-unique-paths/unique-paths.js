/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var uniquePaths = (row, col) => {
    const tabu = initTabu(col);/* Time O(COLS)        | Space O(COLS) */ 

    search(row, col, tabu);    /* Time O(ROWS * COLS) | Space O(COLS) */ 

    return tabu[(col - 1)];
};

var initTabu = (col) => new Array(col).fill(1); /* Time O(COLS) | Space O(COLS) */ 

var search = (row, col, tabu) => {
    for (let _row = 1; (_row < row); _row++) {/* Time O(ROWS) */ 
        for (let _col = 1; (_col < col); _col++) {/* Time O(COLS) */ 
            const prev = tabu[(_col - 1)];

            tabu[_col] += prev;                     /* Space O(COLS) */ 
        }
    }
}



