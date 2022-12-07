/**
 * The my-basalmetabolicrate web component module.
 *
 * @author Daniel Carlsson <dz222bz@student.lnu.se>
 * @version 1.0.0
 */

import { CaloriesCounter } from '@dc222bz/calories-counter/caloriesCounter.js'
import { Data } from '../../storage/data.js'
const datastorage = new Data()

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
          const height = parseInt(datastorage.getMyAppHeight())
          const weight = parseInt(datastorage.getMyAppWeight())
          const age = parseInt(datastorage.getMyAppAge())
          const sex = datastorage.getMyAppSex()
          const activitylevel = parseFloat(datastorage.getMyAppActivityLevel())

          const person = new CaloriesCounter(height, weight, age, sex, activitylevel)
          this.#bmr.textContent = 'Basal Metabolic Rate: ' + person.getBasalMetabolicRate()
        } catch (err) {
          alert(err)
        }
      })
    }
  }
)
