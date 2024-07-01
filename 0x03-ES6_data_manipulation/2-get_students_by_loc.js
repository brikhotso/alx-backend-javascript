export default function getStudentsByLocation(object, city) {
  return object.filter((student) => student.location === city);
}
