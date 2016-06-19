// function encodeSpaces(url) {
//   if (!url || url.length === 0) return url;
//   const encoded = url.split('');
//   for (let i = 0; i < encoded.length; i++) {
//     if (encoded[i] === ' ') {
//       encoded.splice(i, 1, '%','2','0')
//     }
//   }
//   return encoded.join('');
// }


// expect array of characters to be passed in
// no array.splice
function encodeSpaces(url) {
  if (!url || url.length === 0) return url;

  let spaces = 0;

  for (let i = 0; i < url.length; i++) {
    if (url[i] === ' ') {
      spaces++;
    }
  }

  const newLength = url.length - 1 + (spaces * 2);
  for (let i = url.length - 1, j= newLength; i >= 0 && j > i; i-- , j--) {
    if (url[i] === ' ') {
      url[j] = '0';
      url[--j] = '2';
      url[--j] = '%';
    } else {
      url[j] = url[i];
    }
  }

  return url;
}