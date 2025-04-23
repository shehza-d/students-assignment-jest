function addMatrix(a, b) {
  const result = [];

  for (let i = 0; i < a.length; i++) {
    result[i] = [];

    for (let j = 0; j < a[i].length; j++) {
      const sum = a[i][j] + b[i][j];

      result[i].push(sum);
    }
  }
  return result;
}

module.exports = { addMatrix };
