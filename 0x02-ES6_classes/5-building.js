/* eslint-disable no-underscore-dangle */

/**
 * Represents a generic building structure.
 * This class is designed to be extended by more specific building types.
 * It enforces that any subclass must implement the `evacuationWarningMessage` method.
 */
export default class Building {
  /**
   * Creates an instance of the Building class.
   * @param {number} sqft - The square footage of the building.
   * @throws {TypeError} If the sqft parameter is not a number.
   * @throws {Error} If a subclass does not override the evacuationWarningMessage method.
   */
  constructor(sqft) {
    this.sqft = sqft; // Set the square footage using the setter.
    // Ensure that subclasses implement the evacuationWarningMessage method.
    if (this.constructor !== Building) {
      if (typeof this.evacuationWarningMessage !== 'function') {
        throw new Error(
          'Class extending Building must override evacuationWarningMessage',
        );
      }
    }
  }

  /**
   * Gets the square footage of the building.
   * @return {number} The square footage of the building.
   */
  get sqft() {
    return this._sqft;
  }

  /**
   * Sets the square footage of the building.
   * @param {number} value - The square footage to set.
   * @throws {TypeError} If the value is not a number.
   */
  set sqft(value) {
    if (typeof value !== 'number') {
      throw new TypeError('Sqft must be a number');
    }
    this._sqft = value;
  }
}
