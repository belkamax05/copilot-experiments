function countChar(str: string, char: string): number {
  if (str.length === 0) return 0;
  return (str[0] === char ? 1 : 0) + countChar(str.slice(1), char);
}

function maxCharRecursive(
  str: string,
  currentMaxChar: string = "",
  currentMaxCount: number = 0
): string {
  if (str.length === 0) return currentMaxChar;

  const char = str[0];
  const count = countChar(str, char);

  if (count > currentMaxCount) {
    return maxCharRecursive(
      str.replace(new RegExp(char, "g"), ""),
      char,
      count
    );
  } else {
    return maxCharRecursive(
      str.replace(new RegExp(char, "g"), ""),
      currentMaxChar,
      currentMaxCount
    );
  }
}

export default maxCharRecursive;
