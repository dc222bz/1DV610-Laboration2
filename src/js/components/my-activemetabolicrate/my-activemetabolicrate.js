/**
 * The my-activemetabolicrate web component module.
 *
 * @author Daniel Carlsson <dz222bz@student.lnu.se>
 * @version 1.0.0
 */

import { CaloriesCounter } from '@dc222bz/calories-counter/caloriesCounter.js'
import { Data } from '../../storage/data.js'

const template = document.createElement('template')
template.innerHTML = `
     <p id='maincal'>Active Metabolic Rate :</p>
 `

customElements.define('my-activemetabolicrate',
  /**
   * Represent an activemetabolicrate component.
   */
  class extends HTMLElement {
    /**
     * "textfield for maincal"
     */
    #maincal

    /**
     * Creates an instance of the current type.
     */
    constructor () {
      super()
      const datastorage = new Data()

      this.attachShadow({ mode: 'open' }).appendChild(template.content.cloneNode(true))

      this.#maincal = this.shadowRoot.querySelector('#maincal')

      document.querySelector('my-inputform').addEventListener('inputform', (event) => {
        try {
          const height = parseInt(datastorage.getMyAppHeight())
          const weight = parseInt(datastorage.getMyAppWeight())
          const age = parseInt(datastorage.getMyAppAge())
          const sex = datastorage.getMyAppSex()
          const activitylevel = parseFloat(datastorage.getMyAppActivityLevel())

          const person = new CaloriesCounter(height, weight, age, sex, activitylevel)
          const maincal = person.getActiveMetabolicRate()

          const weeklycalories = maincal * 7
          this.#maincal.textContent = 'Active Metabolic Rate: ' + maincal

          datastorage.setMyAppWeeklyCalories(weeklycalories)
          datastorage.setMyAppTotCalories(weeklycalories)

          this.dispatchEvent(new window.CustomEvent('addcalories'))
        } catch (err) {
          alert(err)
        }
      })
    }
  }
)
