// 가장 큰 수
function solution(nums) {
  let answer = [];
  let max = nums;

  max.sort((a, b) => {
    let first = a.toString();
    let second = b.toString();
    return parseInt(second + first) - parseInt(first + second);
  });
  answer = max.join("");
  return answer;
}

const numbers1 = [6, 10, 2];
console.log(solution(numbers1));

const numbers2 = [3, 30, 34, 5, 9];
console.log(solution(numbers2));
