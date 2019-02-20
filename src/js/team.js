/***
 * List characters team
 * @constructor
 */
export default class Team {
  constructor() {
    this.characters = new Set();
  }

  /***
   * Metod add
   * @param {Object} obj - constructor character
   */
  add(obj) {
    if (this.characters.size >= 5) throw new TypeError('in team can be only 5 characters');
    if (this.characters.has(obj)) throw new TypeError('characters should not be repeated');
    this.characters.add(obj);
  }

  /***
   * Metod addAll
   * @param {Object} character - rest parameters
   */
  addAll(...character) {
    character.forEach((item) => {
      if (!this.characters.has(item)) {
        this.add(item);
      }
    });
  }

  /***
   * Metod toArray
   * @returns {any[]}
   */
  toArray() {
    return [...this.characters];
  }
}
