function solution(n) {
  let answer = [];
  function DFS(L) {
    if (L === 0) return;
    else {
      DFS(parseInt(L / 2));
      answer.push(L % 2);
    }
  }
  DFS(n);

  return answer.join("");
}
console.log(solution(11));
