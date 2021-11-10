export function arrays() {
  const a = [5, 6, 76, 58, 2, 3, 2, 1, 54, 5];
  let sum = 0;
  let value = 0;
  a.forEach((el) => {
    sum += el;
  });
  console.log(sum);
  const b = a.map((el) => {
    value = el * 2;
    return value;
  });
  console.log(b);
  const maxN = Math.max.apply(null, a);
  const minN = Math.min.apply(null, a);
  return console.log(maxN, minN);
}
