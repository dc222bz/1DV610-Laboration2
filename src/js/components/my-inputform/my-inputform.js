/**
 * The my-username web component module.
 *
 * @author Daniel Carlsson <dz222bz@student.lnu.se>
 * @version 1.0.0
 */

import { CaloriesCounterForExercises } from '../../../../module/caloriesCounterForExercises.js'

// Define template.
const template = document.createElement('template')
template.innerHTML = `
    <form onSubmit="return false">
    <table id="customers">
        <tr>
            <th>Height</th>
            <th>Weight</th>
            <th>Age</th>
            <th>Sex</th>
            <th>ActivityLevel</td>
        </tr>
        <tr>
            <td><input type="text" id="height" placeholder="Enter Ur Height" autofocus/></td>
            <td><input type="text" id="weight" placeholder="Enter Ur Weight" /></td>
            <td><input type="text" id="age" placeholder="Enter Ur Age" /></td>
            <td><input type="text" id="sex" placeholder="Enter Ur Sex" /></td>
            <td><input type="text" id="activitylevel" placeholder="Enter Ur ActivityLevel" /></td>
            <td><button id="saveinputs">Save Inputs</button></td>
        </tr>
    </table>
    </form>
`

customElements.define(
  'my-inputform',
  /**
   * Represent an username component.
   */
  class extends HTMLElement {
    /**
     * "textfield for height"
     */
    #height

    /**
     * "textfield for weight"
     */
    #weight

    /**
     * "textfield for age"
     */
    #age

    /**
     * "textfield for sex"
     */
    #sex

    /**
     * "textfield for activitylevel"
     */
    #activitylevel

    /**
     * "button to store username"
     */
    #button

    /**
     * Creates an instance of the current type.
     */
    constructor () {
      super()

      // Attach a shadow DOM tree to this element and
      // append the template to the shadow root.
      this.attachShadow({ mode: 'open' }).appendChild(
        template.content.cloneNode(true)
      )

      // Get the input, datalist and article elements in the shadow root.
      this.#height = this.shadowRoot.querySelector('#height')
      this.#weight = this.shadowRoot.querySelector('#weight')
      this.#age = this.shadowRoot.querySelector('#age')
      this.#sex = this.shadowRoot.querySelector('#sex')
      this.#activitylevel = this.shadowRoot.querySelector('#activitylevel')
      this.#button = this.shadowRoot.querySelector('#saveinputs')

      // Adds eventlistener to button with click function
      this.#button.addEventListener('click', (event) => {
        event.stopPropagation()
        event.preventDefault()
        const input = this.formatInput()
        const person = new CaloriesCounterForExercises(input[0], input[1], input[2], input[3], input[4])
        const bmr = this.calculateBMR(person)
        const mainCal = this.calculateMaintenanceCalories(person)
        this.dispatchEvent(new window.CustomEvent('inputform', { detail: { data: [bmr, mainCal] } }))
      })
    }

    /**
     * CalculateData.
     *
     * @param {CaloriesCounterForExercises} person person.
     * @returns {number} bmr.
     */
    calculateBMR (person) {
      return person.getBMR()
    }

    /**
     * CalculateData.
     *
     * @param {CaloriesCounterForExercises} person person.
     * @returns {number} maintenance calories.
     */
    calculateMaintenanceCalories (person) {
      return person.getMaintenanceCalories()
    }

    /**
     * Format inputs.
     *
     * @returns {Array} formated inputs.
     */
    formatInput () {
      const height = parseInt(this.#height.value)
      const weight = parseInt(this.#weight.value)
      const age = parseInt(this.#age.value)
      const sex = this.#sex.value
      const activitylevel = parseFloat(this.#activitylevel.value)
      return [height, weight, age, sex, activitylevel]
    }
  }
)
