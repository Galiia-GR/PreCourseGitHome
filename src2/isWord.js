export function isWord(str) {
  const result = str.search(/ /i) !== -1;
  if (result === true) {
    return false;
  }
  return true;
}
