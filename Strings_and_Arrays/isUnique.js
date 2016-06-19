function hasUniqueCharacters(str) {
  const set = new Set();
  for (let i = 0; i < str.length; i++) {
    const letter = str[i];
    if (!set.has(letter)) {
      set.add(letter);
    } else {
      return false;
    }
  }
  return true;
}