export default function updateStudentGradeByCity(students, city, newGrades) {
  const studentsInCity = students.filter((student) => student.location === city);
  const updatedStudents = studentsInCity.map((student) => {
    const gradeObject = newGrades.find((grade) => grade.studentId === student.id);
    return {
      ...student,
      grade: gradeObject ? gradeObject.grade : 'N/A',
    };
  });

  return updatedStudents;
}
