function maxChar(str: any) {
  if (typeof str === "string") return maxChar([str, 0, str[0]]);
  const [value, buffLen, buffChar] = str;
  const [currChar] = value;
  const remainStr = value.replaceAll(currChar, "");
  if (!remainStr) return buffChar;
  const currLen = value.length - remainStr.length;
  return maxChar([
    remainStr,
    ...(currLen > buffLen ? [currLen, currChar] : [buffLen, buffChar]),
  ]);
}

export default maxChar;
