/**
 * StorageData Class.
 *
 */
export class Data {
  #height = 'myapp-height'
  #weight = 'myapp-weight'
  #age = 'myapp-age'
  #sex = 'myapp-sex'
  #activitylevel = 'myapp-activitylevel'
  #weeklycalories = 'myapp-weeklycalories'
  #totcalories = 'myapp-totcalories'

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

  /**
   * SetHeight.
   *
   * @param {number} height height.
   */
  setMyAppHeight (height) {
    this.setItem(this.#height, height)
  }

  /**
   * SetWeight.
   *
   * @param {number} weight height.
   */
  setMyAppWeight (weight) {
    this.setItem(this.#weight, weight)
  }

  /**
   * SetAge.
   *
   * @param {number} age age.
   */
  setMyAppAge (age) {
    this.setItem(this.#age, age)
  }

  /**
   * SetSex.
   *
   * @param {string} sex sex.
   */
  setMyAppSex (sex) {
    this.setItem(this.#sex, sex)
  }

  /**
   * SetActivitylevel.
   *
   * @param {number} activitylevel activitylevel.
   */
  setMyAppActivityLevel (activitylevel) {
    this.setItem(this.#activitylevel, activitylevel)
  }

  /**
   * Set Total Calories.
   *
   * @param {number} calories calories.
   */
  setMyAppTotCalories (calories) {
    this.setItem(this.#totcalories, calories)
  }

  /**
   * Set Weekly Calories.
   *
   * @param {number} calories calories.
   */
  setMyAppWeeklyCalories (calories) {
    this.setItem(this.#weeklycalories, calories)
  }

  /**
   * Get weekly calories.
   *
   * @returns {string} calories.
   */
  getMyAppWeeklyCalories () {
    return this.getItem(this.#weeklycalories)
  }

  /**
   * Get total calories.
   *
   * @returns {string} calories.
   */
  getMyAppTotCalories () {
    return this.getItem(this.#totcalories)
  }

  /**
   * Get height.
   *
   * @returns {string} height.
   */
  getMyAppHeight () {
    return this.getItem(this.#height)
  }

  /**
   * Get weight.
   *
   * @returns {string} weight.
   */
  getMyAppWeight () {
    return this.getItem(this.#weight)
  }

  /**
   * Get sex.
   *
   * @returns {string} sex.
   */
  getMyAppSex () {
    return this.getItem(this.#sex)
  }

  /**
   * Get age.
   *
   * @returns {string} age.
   */
  getMyAppAge () {
    return this.getItem(this.#age)
  }

  /**
   * Get activiylevel.
   *
   * @returns {string} activitylevel.
   */
  getMyAppActivityLevel () {
    return this.getItem(this.#activitylevel)
  }
}
