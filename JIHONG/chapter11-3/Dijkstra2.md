# Dijkstra Algorithm with MinHeap

이 문서는 다익스트라 알고리즘을 `MinHeap`을 사용하여 구현한 코드와 그 설명을 포함하고 있습니다.

## MinHeap 클래스

`MinHeap` 클래스는 최소 힙 자료 구조를 구현합니다. 최소 힙은 각 노드가 자식 노드보다 작거나 같은 값을 가지는 완전 이진 트리입니다. 이 클래스는 다음과 같은 메서드를 포함합니다:

- **constructor**: 힙을 저장할 배열을 초기화합니다.
- **size**: 힙에 있는 요소의 개수를 반환합니다.
- **push(item)**: 새로운 요소를 힙에 추가하고, 힙의 특성을 유지하기 위해 `bubbleUp` 메서드를 호출합니다.
- **pop**: 최상위 요소를 제거하고 반환하며, 힙의 특성을 유지하기 위해 `bubbleDown` 메서드를 호출합니다.
- **swap(a, b)**: 두 요소의 위치를 교환합니다.
- **bubbleUp**: 새로 추가된 요소가 힙의 특성을 유지하도록 위로 이동시킵니다.
- **bubbleDown**: 최상위 요소가 힙의 특성을 유지하도록 아래로 이동시킵니다.

## solution 함수

`solution` 함수는 주어진 그래프와 시작 노드를 기반으로 최단 경로를 계산합니다. 이 함수는 다음과 같은 단계를 수행합니다:

1. **초기화**: 모든 노드의 거리 값을 무한대로 초기화하고, 시작 노드의 거리 값을 0으로 설정합니다.
2. **큐 초기화**: `MinHeap`을 사용하여 시작 노드를 큐에 삽입합니다.
3. **경로 계산**: 큐에서 노드를 하나씩 꺼내어 인접 노드의 거리 값을 업데이트합니다. 만약 새로운 경로가 더 짧다면, 해당 경로를 업데이트하고 큐에 삽입합니다.
4. **결과 반환**: 각 노드에 대한 최단 거리와 경로를 반환합니다.

## 예제 그래프

코드에는 두 개의 예제 그래프가 포함되어 있으며, 각각에 대해 `solution` 함수를 호출하여 결과를 출력합니다.

- **graph**: 노드 A, B, C로 구성된 그래프
- **graph2**: 노드 A, B, C, D로 구성된 그래프

이 코드는 다익스트라 알고리즘을 사용하여 주어진 그래프에서 시작 노드로부터 다른 모든 노드까지의 최단 경로를 찾습니다.
