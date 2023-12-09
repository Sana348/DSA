/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {boolean}
 */
var canFinish = function(numCourses, prerequisites) {
    const { graph, indegree } = buildGraph(numCourses, prerequisites);
    const topologicalOrder = topologicalSort(graph, indegree);
    const isDirectedAcyclicGraph = topologicalOrder.length === numCourses;

    return isDirectedAcyclicGraph;
};

var initGraph = (numCourses) => ({
    graph: new Array(numCourses).fill().map(() => []),
    indegree: new Array(numCourses).fill(0)
})

var buildGraph = (numCourses, prerequisites) => {
    const { graph, indegree } = initGraph(numCourses);

    for (const [ src, dst ] of prerequisites){
        graph[src].push(dst);
        indegree[dst]++;
    }

    return { graph, indegree };
}

var topologicalSort = (graph, indegree, order = []) => {
    const queue = searchGraph(graph, indegree);

    bfs(graph, indegree, queue, order);

    return order;
}

var searchGraph = (graph, indegree, queue = new Queue([])) => {
    for (const node in graph) {
        const isSource = indegree[node] === 0;
        if (isSource) queue.enqueue(node);
    }

    return queue;
}

var bfs = (graph, indegree, queue, order) => {
    while (!queue.isEmpty()) {
        for (let i = (queue.size() - 1); 0 <= i; i--) {
            checkNeighbors(graph, indegree, queue, order);
        }
    }
}

var checkNeighbors = (graph, indegree, queue, order) => {
    const node = queue.dequeue();

    order.push(node);

    for (const neighbor of graph[node]) {
        indegree[neighbor]--;

        const isSource = indegree[neighbor] === 0;
        if (isSource) queue.enqueue(neighbor);
    }
}





