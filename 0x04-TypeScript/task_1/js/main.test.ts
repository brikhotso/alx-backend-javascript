import { printTeacher, StudentClass, createStudent } from './main';

test('printTeacher function', () => {
  expect(printTeacher('John', 'Doe')).toBe('J. Doe');
});

test('StudentClass displayName', () => {
  const student = new StudentClass('Jane', 'Doe');
  expect(student.displayName()).toBe('Jane');
});

test('createStudent function', () => {
  const student = createStudent(StudentClass, 'Mike', 'Smith');
  expect(student.displayName()).toBe('Mike');
});
