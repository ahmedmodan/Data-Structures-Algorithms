function stringCompression(str) {
  if (!str) {
    return str;
  }
  let newString = '';
  let prev = str[0];
  let count = 1;
  for (let i = 1; i < str.length; i++) {
    if (prev === str[i]) {
      count++;
    } else {
      newString += count + prev;
      prev = str[i];
      count = 1;
    }
  }
  newString += count + prev;
  if (str.length <= newString.length) {
    return str;
  }
  return newString;
}