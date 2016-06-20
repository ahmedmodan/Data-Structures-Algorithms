function rotateMatrix(mx) {
  for (let i = 0; i < Math.floor(mx.length / 2); i++) {
    for (let j = 0 + i; j < mx[0].length - 1 - i; j++) {
      swapEdges(mx, j, i);
    }
  }
  return mx;
}

function swapEdges(mx, index, depth) {
  const len = mx.length - 1;
  const temp = mx[depth][index];
  mx[depth][index] = mx[len - index][depth];
  mx[len - index][depth] = mx[len - depth][len - index];
  mx[len - depth][len - index] = mx[index][len - depth];
  mx[index][len - depth] = temp;
}


