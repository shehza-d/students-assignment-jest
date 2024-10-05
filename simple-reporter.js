const fs = require("fs");
const path = require("path");

class AssignmentReporter {
  onRunComplete(_, results) {
    const assignmentResults = {};

    results.testResults.forEach((testResult) => {
      // Extract test file name (e.g., matrix.test.js) to determine assignment
      const testFileName = path.basename(testResult.testFilePath);

      // Determine which assignment the test belongs to (matrix or dates)
      const assignment = testFileName.includes("matrix") ? "matrix" : "dates";

      // Initialize the result for the assignment if it doesn't exist
      if (!assignmentResults[assignment]) {
        assignmentResults[assignment] = [];
      }

      // Iterate over individual test cases within each test file
      testResult.testResults.forEach((test) => {
        const status = test.status === "failed" ? "fail" : "pass";

        const studentName = test.fullName.split(":")[1];

        // Add the result to the corresponding assignment
        assignmentResults[assignment].push(`${studentName} ${status}`);
      });
    });

    // Write separate result files for each assignment
    Object.keys(assignmentResults).forEach((assignment) => {
      const outputFile = path.join(
        __dirname,
        `results/${assignment}-results.txt`,
      );
      const outputData = assignmentResults[assignment].join("\n");

      // Write the results to a file
      fs.writeFileSync(outputFile, outputData);
      console.log(`Results for ${assignment} written to ${outputFile}`);
    });
  }
}

module.exports = AssignmentReporter;
