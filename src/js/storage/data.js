/**
 * StorageData Class.
 *
 */
export class Data {
  /**
   * SessionStorage.
   *
   * @param {string} name name.
   * @param {string} value vaule.
   */
  #saveSessionStorage (name, value) {
    window.sessionStorage.setItem(name, value)
  }

  /**
   * SessionStorage.
   *
   * @param {string} name name.
   * @returns {string} data.
   */
  #readSessionStorage (name) {
    return window.sessionStorage.getItem(name)
  }

  /**
   * SetData.
   *
   * @param {string} name name.
   * @param {string} value vaule.
   */
  setItem (name, value) {
    this.#saveSessionStorage(name, value)
  }

  /**
   * GetData.
   *
   * @param {string} name name.
   * @returns {string} data.
   */
  getItem (name) {
    return this.#readSessionStorage(name)
  }
}
