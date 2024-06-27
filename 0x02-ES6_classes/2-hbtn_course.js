/* eslint-disable no-underscore-dangle */

/**
 * Represents a Holberton Course with name, length, and a list of students.
 */
export default class HolbertonCourse {
  /**
   * Creates an instance of HolbertonCourse.
   * @param {string} name - The name of the course.
   * @param {number} length - The length of the course in weeks.
   * @param {string[]} students - An array of student names enrolled in the course.
   * @throws {TypeError} - Throws if the name is not a string, length is not a number,
   *                       or students is not an array of strings.
   */
  constructor(name, length, students) {
    if (typeof name !== 'string') {
      throw new TypeError('Name must be a string');
    }

    if (typeof length !== 'number') {
      throw new TypeError('Length must be a number');
    }

    if (!Array.isArray(students) || !students.every((item) => typeof item === 'string')) {
      throw new TypeError('Students must be an array of strings');
    }

    this._name = name;
    this._length = length;
    this._students = students;
  }

  /**
   * Gets the name of the course.
   * @return {string} The name of the course.
   */
  get name() {
    return this._name;
  }

  /**
   * Sets the name of the course.
   * @param {string} value - The new name of the course.
   * @throws {TypeError} - Throws if the new name is not a string.
   */
  set name(value) {
    if (typeof value !== 'string') {
      throw new TypeError('Name must be a string');
    }
    this._name = value;
  }

  /**
   * Gets the length of the course in weeks.
   * @return {number} The length of the course.
   */
  get length() {
    return this._length;
  }

  /**
   * Sets the length of the course.
   * @param {number} value - The new length of the course in weeks.
   * @throws {TypeError} - Throws if the new length is not a number.
   */
  set length(value) {
    if (typeof value !== 'number') {
      throw new TypeError('Length must be a number');
    }
    this._length = value;
  }

  /**
   * Gets the list of students enrolled in the course.
   * @return {string[]} The list of students.
   */
  get students() {
    return this._students;
  }

  /**
   * Sets the list of students enrolled in the course.
   * @param {string[]} value - The new list of student names.
   * @throws {TypeError} - Throws if the new list is not an array of strings.
   */
  set students(value) {
    if (!Array.isArray(value) || !value.every((item) => typeof item === 'string')) {
      throw new TypeError('Students must be an array of strings');
    }
    this._students = value;
  }
}
