// 백트래킹 문제
// 유망함수의 조건 : 조합한 숫자의 합이 10보다 크면 백트래킹
// 조합의 합이 10이 되면 유망하다.
function solution(n) {
  let result = [];
  function backtracking(start, sum, combination) {
    console.log(start, sum, combination);
    if (sum > 10) return;
    if (sum === 10) return result.push([...combination]);

    for (let i = start; i <= n; i++) {
      if (sum + i <= 10) {
        combination.push(i);
        backtracking(i + 1, sum + i, combination);
        console.log(combination);
        combination.pop();
      }
    }
  }

  backtracking(1, 0, []); //시작숫자,현재합,현재조합

  return result;
}

console.log(solution(5));
console.log(solution(2));
console.log(solution(7));
