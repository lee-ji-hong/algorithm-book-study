// 배열 회전
function solution(arr, n) {
  let answer = arr;
  let len = arr.length;

  // 시계방향으로 회전
  function rotate() {
    for (let i = 0; i < len; i++) {
      for (let j = 0; j < len; j++) {
        answer[i][j] = answer[len - 1 - j][i];
      }
    }
  }

  for (let i = 0; i < n; i++) {
    rotate();
  }

  return answer;
}

const arr1 = [
  [1, 2, 3, 4],
  [5, 6, 7, 8],
  [9, 10, 11, 12],
  [13, 14, 15, 16],
];
const n1 = 1;
console.log(solution(arr1, n1));

const arr2 = [
  [1, 2, 3, 4],
  [5, 6, 7, 8],
  [9, 10, 11, 12],
  [13, 14, 15, 16],
];
const n2 = 2;
console.log(solution(arr2, n2));
