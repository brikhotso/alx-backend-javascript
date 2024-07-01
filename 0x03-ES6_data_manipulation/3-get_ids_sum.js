export default function getStudentIdsSum(objects) {
    return objects.reduce((acc, student) => acc + student.id, 0);
}
