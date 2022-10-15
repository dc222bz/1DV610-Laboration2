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
     <p id='maincal'>Maintenance Calories:</p>
 `

customElements.define(
  'my-maintenancecalories',
  /**
   * Represent an username component.
   */
  class extends HTMLElement {
    /**
     * "textfield for bmr"
     */
    #maincal

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
      this.#maincal = this.shadowRoot.querySelector('#maincal')

      document
        .querySelector('my-inputform')
        .addEventListener('inputform', (event) => {
          const height = parseInt(
            window.sessionStorage.getItem('myapp-height')
          )
          const weight = parseInt(
            window.sessionStorage.getItem('myapp-weight')
          )
          const age = parseInt(window.sessionStorage.getItem('myapp-age'))
          const sex = window.sessionStorage.getItem('myapp-sex')
          const activitylevel = parseFloat(
            window.sessionStorage.getItem('myapp-activitylevel')
          )
          const person = new CaloriesCounterForExercises(
            height,
            weight,
            age,
            sex,
            activitylevel
          )
          this.#maincal.textContent =
            'Maintenance Calories: ' + person.getMaintenanceCalories()
        })
    }
  }
)
