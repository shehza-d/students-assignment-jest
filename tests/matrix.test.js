const path = require("path");
const fs = require("fs");

const matrixDir = path.join(__dirname, "../matrix-assignments");

// Read all files in the matrix-assignments directory
const studentFiles = fs.readdirSync(matrixDir);

studentFiles.forEach((studentFile) => {
  describe(`Testing :${studentFile}:`, () => {
    let addMatrix;

    beforeAll(() => {
      // Dynamically require the student module
      const studentModule = require(path.join(matrixDir, studentFile));

      addMatrix = studentModule.addMatrix;
    });

    test("should correctly add two positive numbers", () => {
      expect(
        addMatrix(
          [
            [3, 2, 5],
            [5, 2, 6],
            [1, 0, 90],
          ],
          [
            [7, 2, 1],
            [5, 9, 2],
            [1, 0, 19],
          ],
        ),
      ).toStrictEqual([
        [10, 4, 6],
        [10, 11, 8],
        [2, 0, 109],
      ]);
    });

    test("should correctly add two matrices", () => {
      const matrix1 = [
        [1, 2, 0, 3],
        [3, 4, 6, 1],
      ];
      const matrix2 = [
        [5, 6, 9, 2],
        [7, 8, 1, 1],
      ];
      const expectedSum = [
        [6, 8, 9, 5],
        [10, 12, 7, 2],
      ];

      expect(addMatrix(matrix1, matrix2)).toEqual(expectedSum);
    });

    test("should handle empty matrices", () => {
      const matrix1 = [];
      const matrix2 = [];
      const expectedSum = [];

      expect(addMatrix(matrix1, matrix2)).toEqual(expectedSum);
    });
  });
});
