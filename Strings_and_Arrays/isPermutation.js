function isPermutationSorted(str1, str2) {
  if (str1.length !== str2.length) return false;

  return str1.split('').sort().join('') === str2.split('').sort().join('');
}


function isPermutationMap(str1, str2) {
  if (str1.length !== str2.length) return false;

  const length = str1.length;
  const map = new Map();

  for (let i = 0; i < length; i++) {
    const letter = str1[i];
    if (!map.has(letter)) {
      map.set(letter, 1);
    } else {
      map.set(letter, map.get(letter) + 1);
    }
  }

  for (let i = 0; i < length; i++) {
    const letter = str2[i];
    if (!map.has(letter)) {
      return false;
    }
    if (map.get(letter) === 1) {
      map.delete(letter);
    } else {
      map.set(letter, map.get(letter) - 1);
    }
  }

  return map.size === 0;
}