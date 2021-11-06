export function sumValue() {
  const numN = window.prompt("wrire three - digit number");
  const numA = Math.floor(numN / 100);
  const numB = Math.floor(numN % 10);
  const numC = Math.floor(numN % 100);
  const numD = numC.toFixed(1);
  const numE = Math.floor(numD / 10);
  return console.log(numE + numA + numB);
}
