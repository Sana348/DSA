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
 * @return {boolean}
 */
var isValidBST = function(root, stack = []) {
    let prev = null;

    while (stack.length || root) {
        moveLeft(stack, root);
        root = stack.pop();

        const isInvalid = prev && (root.val <= prev.val);
        if (isInvalid) return false;

        prev = root;
        root = root.right;
    }

    return true;
}

const moveLeft = (stack, root) => {
    while (root) {
        stack.push(root);
        root = root.left;
    }
}





