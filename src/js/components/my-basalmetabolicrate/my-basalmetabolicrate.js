/**
 * The my-basalmetabolicrate web component module.
 *
 * @author Daniel Carlsson <dz222bz@student.lnu.se>
 * @version 1.0.0
 */

import { CaloriesCounter } from '@dc222bz/calories-counter/caloriesCounter.js'

const template = document.createElement('template')
template.innerHTML = `
       <p id="bmr">Basal Metabolic Rate: </p>
`

customElements.define('my-basalmetabolicrate',
  /**
   * Represent a basalmetabolicrate component.
   */
  class extends HTMLElement {
    /**
     * "textfield for bmr"
     */
    #bmr

    /**
     * Creates an instance of the current type.
     */
    constructor () {
      super()

      this.attachShadow({ mode: 'open' }).appendChild(template.content.cloneNode(true))

      this.#bmr = this.shadowRoot.querySelector('#bmr')

      document.querySelector('my-inputform').addEventListener('inputform', (event) => {
        try {
          const height = parseInt(window.sessionStorage.getItem('myapp-height'))
          const weight = parseInt(window.sessionStorage.getItem('myapp-weight'))
          const age = parseInt(window.sessionStorage.getItem('myapp-age'))
          const sex = window.sessionStorage.getItem('myapp-sex')
          const activitylevel = parseFloat(window.sessionStorage.getItem('myapp-activitylevel'))

          const person = new CaloriesCounter(height, weight, age, sex, activitylevel)
          this.#bmr.textContent = 'Basal Metabolic Rate: ' + person.getBasalMetabolicRate()
        } catch (err) {
          alert(err)
        }
      })
    }
  }
)
