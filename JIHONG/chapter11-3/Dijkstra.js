// 다익스트라 알고리즘 - 우선순위 큐 사용
function solution(graph, start) {
  let distances = {};
  let previous = {};
  let visited = [];
  let pq = new PriorityQueue();

  for (let node in graph) {
    distances[node] = 10000;
    previous[node] = null;
  }
  distances[start] = 0;
  pq.enqueue(start, 0);

  while (!pq.isEmpty()) {
    let { node: currentNode } = pq.dequeue();

    if (visited.includes(currentNode)) continue;
    visited.push(currentNode);

    for (let neighbor in graph[currentNode]) {
      let newDistance = distances[currentNode] + graph[currentNode][neighbor];
      if (newDistance < distances[neighbor]) {
        distances[neighbor] = newDistance;
        previous[neighbor] = currentNode;
        pq.enqueue(neighbor, newDistance);
      }
    }
  }

  let distanceObj = {};
  let pathObj = {};

  for (let node in distances) {
    distanceObj[node] = distances[node];

    let path = [];
    for (let at = node; at !== null; at = previous[at]) {
      path.push(at);
    }
    path.reverse();
    pathObj[node] = path;
  }

  return [distanceObj, pathObj];
}

class PriorityQueue {
  constructor() {
    this.elements = [];
  }

  enqueue(node, priority) {
    this.elements.push({ node, priority });
    this.elements.sort((a, b) => a.priority - b.priority); //O(nlongn)
  }

  dequeue() {
    return this.elements.shift(); //O(n)
  }

  isEmpty() {
    return this.elements.length === 0;
  }
}

const graph = {
  A: { B: 9, C: 3 },
  B: { A: 5 },
  C: { B: 1 },
};

const graph2 = {
  A: { B: 1 },
  B: { C: 5 },
  C: { D: 1 },
  D: {},
};

console.log(solution(graph, "A"));
console.log(solution(graph2, "A"));
