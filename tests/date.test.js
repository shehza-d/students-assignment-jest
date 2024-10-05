const path = require("path");
const fs = require("fs");
const { dateFormatExpected1, dateFormatExpected } = require("../utils/dates");

const matrixDir = path.join(__dirname, "../dates-assignments");

// Read all files in the matrix-assignments directory
const studentFiles = fs.readdirSync(matrixDir);

studentFiles.forEach((studentFile) => {
  describe(`Testing :${studentFile}:`, () => {
    let dateFormat, dateFormat1;

    beforeAll(() => {
      // Dynamically require the student module
      const studentModule = require(path.join(matrixDir, studentFile));

      dateFormat = studentModule.dateFormat;
      dateFormat1 = studentModule.dateFormat1;
    });

    test("should correctly add two positive numbers", () => {
      expect(dateFormat1()).toStrictEqual(dateFormatExpected1());
    });

    test("should correctly add two positive numbers", () => {
      expect(dateFormat()).toStrictEqual(dateFormatExpected());
    });

    // test("should correctly add negative numbers", () => {
    //   expect(add(-1, -2)).toBe(-3);
    // });
  });
});
