function solution(str, ending){
  // TODO: complete
  if (ending.length === 0) return false;
  
  return str.slice(-(ending.length)) === ending;
}

console.log(solution('abcde', 'cde'));

console.log(solution('abcde', 'cde'));
console.log(solution('bcde', 'cde'));
console.log(solution('abdecacde', 'acd'));
console.log(solution('abc', ''));