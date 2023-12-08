/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function (grid) {
    const unionFind = new UnionFind(grid);/* Time O(ROWS * COLS) | Space O(ROWS * COLS) */

    searchGrid(grid, unionFind);          /* Time O(ROWS * COLS) */

    return unionFind.connectedComponents;
}

var searchGrid = (grid, unionFind) => {
    const [ rows, cols ] = [ grid.length, grid[0].length ];

    for (let row = 0; row < rows; row++) {/* Time O(ROWS) */
        for (let col = 0; col < cols; col++) {/* Time O(COLS) */
            const isWater = grid[row][col] === '0';
            if (isWater) continue;

            grid[row][col] = '0';

            searchRows(unionFind, grid, row, rows, col, cols);
            searchCols(unionFind, grid, row, rows, col, cols);
        }
    }
}

const searchRows = (unionFind, grid, row, rows, col, cols) => [ 1, -1 ]
    .map((_row) => row + _row)
    .filter((_row) => isInBound(_row, rows) && isIsland(grid[_row][col]))
    .map((_row) => [ index(row, cols, col), index(_row, cols, col) ])
    .forEach(([ x, y ]) => unionFind.union(x, y));

const isInBound = (val, vals) => (0 <= val) && (val < vals)
const isIsland = (cell) => cell === '1'
const index = (row, cols, col) => ((row * cols) + col)

const searchCols = (unionFind, grid, row, rows, col, cols) => [ 1, -1 ]
    .map((_col) => col + _col)
    .filter((_col) => isInBound(_col, cols) && isIsland(grid[row][_col]))
    .map((_col) => [ index(row, cols, col), index(row, cols, _col) ])
    .forEach(([ x, y ]) => unionFind.union(x, y));

class UnionFind {
    constructor (grid) {
        const [ rows, cols ] = [ grid.length, grid[0].length ];

        this.connectedComponents = 0;
        this.grid = grid;
        this.rows = rows;
        this.cols = cols;
        this.parent = new Array(rows * cols).fill(0);
        this.rank = new Array(rows * cols).fill(0);

        this.findIslands();
    }

    findIslands ({ grid, rows, cols, parent } = this) {
        for (let row = 0; row < rows; row++) {/* Time O(ROWS) */
            for (let col = 0; col < cols; col++) {/* Time O(COLS) */
                const isWater = grid[row][col] === '0';
                if (isWater) continue;

                const index = (row * cols) + col;

                parent[index] = index;/* Space O(ROWS * COLS) */
                this.connectedComponents++;
            }
        }
    }

    find (index, { parent } = this) {
        const isEqual = () => parent[index] === index;
        while (!isEqual()) {
            index = parent[index];
        }

        return parent[index];
    }

    union (x, y, { parent, rank } = this) {
        const [ rootX, rootY ] = [ this.find(x), this.find(y) ];

        const hasCycle = rootX === rootY;
        if (hasCycle) return;

        this.connectedComponents--;

        const isXGreater = rank[rootY] < rank[rootX];
        if (isXGreater) return parent[rootY] = rootX;

        const isYGreater = rank[rootX] < rank[rootY];
        if (isYGreater) return parent[rootX] = rootY;

        parent[rootY] = rootX;      /* Space O(ROWS * COLS) */
        rank[rootX]++;              /* Space O(ROWS * COLS) */
    }
}



