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
 * @return {TreeNode}
 */
var invertTree = (root,) => {
    const isBaseCase = root === null;
    if (isBaseCase) return root;

    bfs([ root ]);

    return root;
}

const bfs = (queue) => {
    while (queue.length) {
        for (let i = (queue.length - 1); 0 <= i; i--) {
            const node = queue.shift();
            const left = node.right;
            const right = node.left;

            node.left = left;
            node.right = right;

            if (node.left) queue.push(node.left);
            if (node.right) queue.push(node.right);
        }
    }
}
