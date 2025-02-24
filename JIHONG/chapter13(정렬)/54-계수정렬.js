// 계수 정렬 구현하기
function solution(s) {
  let answer = "";
  const arr = new Array(26).fill(0);

  for (let char of s) {
    arr[char.charCodeAt(0) - "a".charCodeAt(0)]++;
  }

  for (let i = 0; i < 26; i++) {
    answer += String.fromCharCode(i + "a".charCodeAt(0)).repeat(arr[i]);
  }
  return answer;
}

console.log(solution("hello"));
console.log(solution("algorithm"));
