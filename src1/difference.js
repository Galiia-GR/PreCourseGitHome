export function difference(a, b) {
  let result = 0;
  if (a >= b) {
    result = a - b;
  } else {
    result = b - a;
  }
  return result;
}
