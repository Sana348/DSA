/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
var mergeKLists = function(lists) {
    const minHeap = getMinHeap(lists);

    return mergeLists(minHeap)
};

const getMinHeap = (lists) => {
    const heap = new MinPriorityQueue({ priority: ({ val }) => val });

    for (const node of lists) {
        if (!node) continue;

        heap.enqueue(node);
    }

    return heap;
}


const mergeLists = (minHeap) => {
    let sentinel = tail = new ListNode();

    while (!minHeap.isEmpty()) {
        const node = minHeap.dequeue().element;

        tail.next = node;
        tail = tail.next;

        if (!node.next) continue;

        minHeap.enqueue(node.next);
    }

    return sentinel.next;
}