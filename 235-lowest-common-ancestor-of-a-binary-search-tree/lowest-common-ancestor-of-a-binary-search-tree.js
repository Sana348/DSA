/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
var lowestCommonAncestor = function(root, p, q) {
    while (root !== null) {
        const isGreater = (root.val < p.val) && (root.val < q.val)
        if (isGreater) {
            root = root.right;
            continue;
        }

        const isLess = (p.val < root.val) && (q.val < root.val);;
        if (isLess) {
            root = root.left;
            continue;
        }

        break;
    }

    return root;
};



