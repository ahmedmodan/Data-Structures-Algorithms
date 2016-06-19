function encodeSpaces(url) {
  if (!url || url.length === 0) return url;
  const encoded = url.split('');
  for (let i = 0; i < encoded.length; i++) {
    if (encoded[i] === ' ') {
      encoded.splice(i, 1, '%','2','0')
    }
  }
  return encoded.join('');
}
