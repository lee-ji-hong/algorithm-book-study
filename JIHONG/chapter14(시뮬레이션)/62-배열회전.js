// 새로운 배열 생성
function createEmptyArray(size) {
  return Array.from({ length: size }, () =>
    Array.from({ length: size }, () => 0)
  );
}

// 시계방향으로 회전
function rotate(arr, len) {
  let answer = createEmptyArray(len);
  for (let i = 0; i < len; i++) {
    for (let j = 0; j < len; j++) {
      answer[i][j] = arr[len - 1 - j][i];
    }
  }
  return answer;
}

// 배열 회전
function solution(arr, n) {
  let array = arr;
  let len = arr.length;

  for (let i = 0; i < n; i++) {
    array = rotate(array, len);
  }

  return array;
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

/*
기존 로직의 문제
 answer 배열이 함수 외부에 선언되어 있어, rotate 함수가 호출될 때마다 answer 배열이 계속 덮어씌워집니다. 
 이로 인해 n번 회전 후의 결과가 예상과 다를 수 있습니다. 
 rotate 함수 내에서 answer 배열을 새로 생성하여 반환하도록 수정하면 문제를 해결함.
 */
