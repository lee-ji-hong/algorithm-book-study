class MinHeap {
  constructor() {
    this.items = []; // 힙을 저장할 배열 초기화
  }

  size() {
    return this.items.length; // 힙에 있는 요소의 개수를 반환
  }

  push(item) {
    this.items.push(item); // 새로운 요소를 힙에 추가
    this.bubbleUp(); // 힙의 특성을 유지하기 위해 bubbleUp 호출
  }

  pop() {
    if (this.size() === 0) return null; // 힙이 비어있으면 null 반환
    this.swap(0, this.size() - 1); // 최상위 요소와 마지막 요소를 교환
    const item = this.items.pop(); // 최상위 요소 제거
    this.bubbleDown(); // 힙의 특성을 유지하기 위해 bubbleDown 호출
    return item; // 제거된 최상위 요소 반환
  }

  swap(a, b) {
    [this.items[a], this.items[b]] = [this.items[b], this.items[a]]; // 두 요소의 위치를 교환
  }

  bubbleUp() {
    let index = this.size() - 1; // 새로 추가된 요소의 인덱스
    while (index > 0) {
      let parentIndex = Math.floor((index - 1) / 2); // 부모 노드의 인덱스 계산
      if (this.items[index] >= this.items[parentIndex]) break; // 자식이 부모보다 크거나 같으면 종료
      this.swap(index, parentIndex); // 부모와 위치 교환
      index = parentIndex; // 인덱스를 부모로 이동
    }
  }

  bubbleDown() {
    let index = 0; // 최상위 요소의 인덱스
    while (index * 2 + 1 < this.size()) {
      let leftChild = 2 * index + 1; // 왼쪽 자식 노드의 인덱스
      let rightChild = 2 * index + 2; // 오른쪽 자식 노드의 인덱스
      let smallerChild =
        rightChild < this.size() &&
        this.items[rightChild] < this.items[leftChild]
          ? rightChild
          : leftChild;
      if (this.items[index] <= this.items[smallerChild]) break;
      this.swap(index, smallerChild);
      index = smallerChild;
    }
  }
}

function solution(graph, start) {
  const distances = {};
  // 모든 노드의 거리 값을 무한대로 초기화
  for (const node in graph) {
    distances[node] = Infinity;
  }

  distances[start] = 0; // 시작 노드의 거리 값을 0으로 초기화
  const queue = new MinHeap();
  queue.push([distances[start], start]); // 시작 노드를 큐에 삽입

  const paths = { [start]: [start] }; // 시작 노드의 경로 초기화
  while (queue.size() > 0) {
    // 현재 가장 최소거리의 노드를 가져옴
    const [currentDistance, currentNode] = queue.pop();

    // 만약 현재 노드의 거리 값이 큐에서 가져온 거리값보다 크면 해당 노드는 무시
    if (distances[currentNode] < currentDistance) continue;

    // 현재 노드의 인접 노드들의 거리 값을 계산하여 업데이트
    for (const neighbor in graph[currentNode]) {
      const newDistance = currentDistance + graph[currentNode][neighbor];
      if (newDistance < distances[neighbor]) {
        distances[neighbor] = newDistance;
        paths[neighbor] = [...paths[currentNode], neighbor];
        queue.push([newDistance, neighbor]);
      }
    }
  }

  // paths 배열을 노드 번호에 따라 오름차순 정렬하여 반환
  const sortedPaths = {};
  for (const node in paths) {
    sortedPaths[node] = paths[node];
  }

  return { distances, paths: sortedPaths };
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
