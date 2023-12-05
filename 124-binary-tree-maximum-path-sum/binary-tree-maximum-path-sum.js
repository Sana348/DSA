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
var maxPathSum = function(root, maxValue = [ -Infinity ]) {
    pathSum(root, maxValue);

    return maxValue[0];
};

const pathSum = (root, maxValue) => {
    const isBaseCase = root === null;
    if (isBaseCase) return 0;

    return dfs(root, maxValue);
}

const dfs = (node, maxValue) => {
    const left = Math.max(0, pathSum(node.left, maxValue));
    const right = Math.max(0, pathSum(node.right, maxValue));
    const sum = left + right + node.val;

    maxValue[0] = Math.max(maxValue[0], sum);

    return Math.max(left, right) + node.val;
}



