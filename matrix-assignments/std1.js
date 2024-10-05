function addMatrix(a, b) {
  const result = [];

  for (let i = 0; i < 3; i++) {
    result[i] = [];

    for (let j = 0; j < 3; j++) {
      const sum = a[i][j] + b[i][j];

      result[i].push(sum);
    }
  }
  return result;
}

// console.log();

module.exports = { addMatrix };
