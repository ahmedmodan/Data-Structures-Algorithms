function isPalindromPermutation(strArr) {
  if (!strArr) return false;
  const chars = new Set();
  for (let i = 0; i < strArr.length; i++) {
    const letter = strArr[i];
    if (letter === ' ') continue;
    if (!chars.has(letter)) {
      chars.add(letter);
    } else {
      chars.delete(letter);
    }
  }
  return chars.size <= 1;
}