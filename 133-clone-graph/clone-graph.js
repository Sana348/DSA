/**
 * // Definition for a Node.
 * function Node(val, neighbors) {
 *    this.val = val === undefined ? 0 : val;
 *    this.neighbors = neighbors === undefined ? [] : neighbors;
 * };
 */

/**
 * @param {Node} node
 * @return {Node}
 */
var cloneGraph = function(node, seen = new Map()) {
    const isBaseCase = node === null;
    if (isBaseCase) return null;

    seen.set(node, new Node(node.val));                /*               | Space O(N) */

    bfs(new Queue([ node ]), seen);                    /* Time O(V + E) | Space O(N) */

    return seen.get(node);
};

const bfs = (queue, seen) => {
    while (!queue.isEmpty()) {                         /* Time O(V + E) */
        for (let i = (queue.size() - 1); 0 <= i; i--) {/* Time O(W) */
            const node = queue.dequeue();

            cloneNeighbors(node, seen, queue);         /* Space O(N) */ 
        }
    }
}

const cloneNeighbors = (node, seen, queue) => {
    for (const neighbor of node.neighbors) {
        if (!seen.has(neighbor)) {
            seen.set(neighbor, new Node(neighbor.val));/* Space O(N) */
            queue.enqueue(neighbor);                   /* Space O(W) */
        }

        const [ parentClone, neighborClone ] = [ seen.get(node), seen.get(neighbor) ];

        parentClone.neighbors.push(neighborClone);     /* Space O(V + E) */
    }
}



