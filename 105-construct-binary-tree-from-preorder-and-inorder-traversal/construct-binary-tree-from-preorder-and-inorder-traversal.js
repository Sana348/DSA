/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
var buildTree = function(preorder, inorder, max = -Infinity, indices = { preorder: 0, inorder: 0 }) {
    const isBaseCase = preorder.length <= indices.inorder;
    if (isBaseCase) return null;

    const isAtEnd = inorder[indices.inorder] === max;
    if (isAtEnd) {
        indices.inorder++;
        return null;
    }

    return dfs(preorder, inorder, max, indices);
}

var dfs = (preorder, inorder, max, indices) => {
    const val = preorder[indices.preorder++]
    const root = new TreeNode(val);

    root.left = buildTree(preorder, inorder, root.val, indices);
    root.right = buildTree(preorder, inorder, max, indices);

    return root;
}



