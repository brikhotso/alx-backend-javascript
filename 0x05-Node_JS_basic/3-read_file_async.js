const fs = require('fs');

function countStudents(path) {
  return new Promise((resolve, reject) => {
    fs.readFile(path, 'utf-8', (err, data) => {
      if (err) {
        reject(new Error('Cannot load the database'));
        return;
      }

      // Split the data into lines and filter out empty lines
      const lines = data.split('\n').filter((line) => line.trim() !== '');

      // Check if the file contains at least two lines (header + at least one record)
      if (lines.length < 2) {
        console.log('Number of students: 0');
        resolve();
        return;
      }

      // Extract student records, ignoring the header
      const students = lines.slice(1).map((line) => line.split(',')).filter((fields) => fields.length === 4);

      // Log the total number of students
      console.log(`Number of students: ${students.length}`);

      // Object to keep track of students by field
      const fieldCount = {};

      students.forEach(([firstname, , , field]) => {
        if (!fieldCount[field]) {
          fieldCount[field] = [];
        }
        fieldCount[field].push(firstname);
      });

      // Log the number of students and the list of their names for each field
      for (const [field, names] of Object.entries(fieldCount)) {
        console.log(`Number of students in ${field}: ${names.length}. List: ${names.join(', ')}`);
      }

      resolve();
    });
  });
}

// Example usage
// countStudents('database.csv')
//   .then(() => console.log('Operation completed'))
//   .catch((error) => console.error(error.message));

module.exports = countStudents;
