export function powNum(a, x) {
  let result = 1;
  for (let i = 0; i < x; i++) {
    result *= a;
  }
  return result;
}
