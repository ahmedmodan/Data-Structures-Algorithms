function zeroMatrix(mx) {
  const rows = new Set();
  const columns = new Set();
  for(let i = 0; i < mx.length; i++) {
    for(let j = 0; j < mx[i].length; j++) {
      if(mx[i][j] === 0) {
        rows.add(i);
        columns.add(j);
      }
    }
  }

  rows.forEach(row => {
    for(let i = 0; i < mx[row].length; i++) {
      mx[row][i] = 0;
    }
  })

  columns.forEach(column => {
    for (let i = 0; i < mx.length; i++) {
      mx[i][column] = 0;
    }
  })

  return mx;
}