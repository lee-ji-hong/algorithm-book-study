const numbers = [3, 30, 34, 5, 9];

numbers.sort(Compare);
console.log(numbers);
console.log(numbers.join(""));

function Compare(a, b) {
  const [x, y] = [a.toString(), b.toString()];
  return parseInt(x + y) > parseInt(y + x) ? -1 : 1;
}
