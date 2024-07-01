function validateStudent({ id, firstName, location }) {
  if (typeof id !== 'number') {
    throw new TypeError('ID must be a number');
  }
  if (typeof firstName !== 'string') {
    throw new TypeError('FirstName must be a string');
  }
  if (typeof location !== 'string') {
    throw new TypeError('Location must be a string');
  }
}

export default function getListStudents() {
  const student1 = { id: 1, firstName: 'Guillaume', location: 'San Francisco' };
  const student2 = { id: 2, firstName: 'James', location: 'Columbia' };
  const student3 = { id: 5, firstName: 'Serena', location: 'San Francisco' };

  // Validate each student before returning the list
  [student1, student2, student3].forEach(validateStudent);

  return [student1, student2, student3];
}
