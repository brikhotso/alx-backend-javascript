const fs = require('fs');

function countStudents(path) {
  try {
    const data = fs.readFileSync(path, 'utf-8');

    const lines = data.split('\n').filter((line) => line.trim() !== '');

    if (lines.length < 2) {
      throw new Error('No valid data in the file');
    }

    const students = lines.slice(1);

    console.log(`Number of students: ${students.length}`);

    const fieldCount = {};

    students.forEach((student) => {
      const [firstname, , , field] = student.split(',');

      if (!fieldCount[field]) {
        fieldCount[field] = [];
      }
      fieldCount[field].push(firstname);
    });

    for (const [field, names] of Object.entries(fieldCount)) {
      console.log(`Number of students in ${field}: ${names.length}. List: ${names.join(', ')}`);
    }
  } catch (err) {
    throw new Error('Cannot load the database');
  }
}

module.exports = countStudents;
