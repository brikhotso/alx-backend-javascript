export default function iterateThroughObject(reportWithIterator) {
  let result = '';
  for (const employee of reportWithIterator) {
    if (result) {
      result += ' | '; // Add separator if result is not empty
    }
    result += employee; // Append the current employee name
  }
  return result;
}
