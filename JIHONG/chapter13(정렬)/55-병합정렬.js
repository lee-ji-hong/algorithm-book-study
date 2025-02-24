// 병합정렬
function solution(arr1, arr2) {
  let answer = [];
  let p1 = 0;
  let p2 = 0;

  // 두 배열 중 하나라도 끝까지 가지 않았다면 계속 비교
  while (p1 < arr1.length && p2 < arr2.length) {
    if (arr1[p1] <= arr2[p2]) {
      answer.push(arr1[p1]);
      p1++;
    } else {
      answer.push(arr2[p2]);
      p2++;
    }
  }

  // arr1에 남은 원소가 있다면 모두 추가
  // 이 과정은 두 배열 중 하나의 배열을 모두 사용하고 나서, 다른 배열에 남은 원소들을 처리하기 위한 것
  while (p1 < arr1.length) {
    answer.push(arr1[p1]);
    p1++;
  }
  // arr2에 남은 원소가 있다면 모두 추가
  while (p2 < arr2.length) {
    answer.push(arr2[p2]);
    p2++;
  }

  return answer;
}

const arr1 = [1, 3, 5];
const arr2 = [2, 4, 6];
console.log(solution(arr1, arr2));

const arr3 = [1, 2, 3];
const arr4 = [4, 5, 6];
console.log(solution(arr3, arr4));
