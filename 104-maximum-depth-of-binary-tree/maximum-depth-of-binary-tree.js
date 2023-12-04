/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var maxDepth = function(root) {
    const isBaseCase = root === null;
    if (isBaseCase) return 0;

    return bfs([[ root, 0 ]]);
};

const bfs = (queue, height = 0) => {
    while (queue.length) {
        for (let i = (queue.length - 1); 0 <= i; i--) {
            const [ root, depth ] = queue.shift();

            height = Math.max(height, (depth + 1));

            if (root.left) queue.push([ root.left, (depth + 1) ]);
            if (root.right) queue.push([  root.right, (depth + 1) ]);
        }
    }

    return height;
};



