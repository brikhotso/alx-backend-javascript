import getListStudents from "./0-get_list_students";

export default function getListStudentIds(objects) {
    if (!Array.isArray(objects)) {
	return [];
    }

    return objects.map(student => student.id);
}
